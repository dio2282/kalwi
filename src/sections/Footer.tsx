import { FC } from "react";
import InstaSocial from "@/assets/social-instagram.svg";
import YTSocial from "@/assets/social-youtube.svg";

const socialIcons = [
  {
    Icon: InstaSocial,
    href: "https://instagram.com/kandangalwi.me",
    label: "Instagram",
  },
  {
    Icon: YTSocial,
    href: "https://www.youtube.com/@kandangalwi",
    label: "YouTube",
  },
];

const navLinks = [
  { href: "https://store.kalwi.net/", label: "Store", id: "store-link" },
  { href: "https://discord.gg/kalwi", label: "Discord", id: "discord-link" },
  {
    href: "https://docs.kalwi.net/docs/main/rules",
    label: "Rules",
    id: "perks-link",
  },
  { href: "https://wa.link/h8r00y", label: "Support", id: "support-link" },
];

export const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-white/15 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="font-medium text-sm text-white">
              © {currentYear} KalWi. All rights reserved.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center md:justify-end gap-6">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-white/70 hover:text-white text-sm transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex gap-6 items-center">
            {socialIcons.map(({ Icon, href, label }) => (
              <a
                key={href}
                href={href}
                aria-label={label}
                className="text-white/40 hover:text-white transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
