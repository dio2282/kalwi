"use client";

import React from "react";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}

const GradientButton: React.FC<ButtonProps> = ({
  href,
  onClick,
  className = "",
  children,
}) => {
  const isLink = Boolean(href);

  return isLink ? (
    <a
      href={href}
      className={`relative border py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#30b4ff] shadow-[0px_0px_12px_#30b4ff] transition duration-200 ease-in-out hover:shadow-[0px_0px_20px_#30b4ff] ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ) : (
    <button
      onClick={onClick}
      className={`relative border py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#30b4ff] shadow-[0px_0px_12px_#30b4ff] transition duration-200 ease-in-out hover:shadow-[0px_0px_20px_#30b4ff] ${className}`}
    >
      {children}
    </button>
  );
};

export const CallToAction: React.FC = () => {
  return (
    <section className="py-4 flex flex-col justify-center items-center bg-black/50 backdrop-blur-lg text-white">
      <div className="relative z-10 max-w-3xl mx-auto w-full px-4">
        <div className="border border-white/15 rounded-xl overflow-hidden p-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Tutorial Server</h2>
            <p className="text-lg mb-4 text-white/80">
              Pelajari cara bermain di server kami dengan mudah
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <GradientButton
                href="https://www.youtube.com/shorts/lXJXjt2VPN0"
                className="m-2"
              >
                Tutorial Donasi
              </GradientButton>
              <GradientButton
                href="https://www.tiktok.com/@kandangalwi.me/video/7374736729531567365"
                className="m-2"
              >
                Tutorial Join Server
              </GradientButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
