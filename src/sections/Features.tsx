"use client";

import { DotLottiePlayer } from "@dotlottie/react-player";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import productImage from "@/assets/product-image.png";

const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "Ping dijamin rendah",
    isNew: false,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "GUI yang mudah dimengerti",
    isNew: false,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Banyak fitur dan item yang menarik",
    isNew: true,
  },
];

interface Voter {
  id: number;
  username: string;
  votes: number;
}

const TopVoters: React.FC = () => {
  const [voters, setVoters] = useState<Voter[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchVoters = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/voters");
      if (!response.ok) {
        throw new Error("Failed to fetch voters");
      }
      const data = await response.json();
      setVoters(data);
    } catch (error) {
      console.error("Failed to fetch voters", error);
      setError("Failed to load top voters. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchVoters();
  }, []);

  if (isLoading) {
    return <div className="text-center">Loading top voters...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="mt-10 border border-white/15 rounded-xl p-4">
      <h3 className="text-xl font-semibold mb-4 text-center">Top Voters</h3>
      {voters.length > 0 ? (
        <ul className="list-none space-y-2">
          {voters.map((voter) => (
            <li
              key={voter.id}
              className="flex justify-between border-b border-white/10 py-2"
            >
              <span>{voter.username}</span>
              <span>{voter.votes} Votes</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-white/70">
          No top voters yet. Be the first!
        </p>
      )}
    </div>
  );
};

export const Features: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-medium text-center tracking-tighter">
          Meningkatkan pengalaman bermainmu di server!
        </h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto tracking-tight text-center mt-5">
          Kami menyediakan fitur-fitur yang akan membantu kamu dalam bermain di
          server kami. Banyaknya gamemode seperti Survival, AcidIsland,
          OneBlock, dan masih banyak lagi.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tabs.map((tab) => (
            <div
              key={tab.title}
              className="border border-white/15 flex p-4 rounded-xl gap-4 items-center"
            >
              <div className="h-12 w-12 border border-white/15 rounded-lg inline-flex items-center justify-center flex-shrink-0">
                <DotLottiePlayer
                  src={tab.icon}
                  className="h-10 w-10"
                  autoplay
                  loop
                />
              </div>
              <div className="flex-grow">
                <div className="font-medium">{tab.title}</div>
                {tab.isNew && (
                  <div className="text-xs inline-block mt-1 rounded-full px-2.5 py-0.5 bg-[#30b4ff] text-black font-semibold">
                    New
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="border border-white/20 p-2.5 rounded-xl mt-8">
          <div
            className="aspect-video bg-cover bg-center border border-white/20 rounded-lg"
            style={{
              backgroundImage: `url(${productImage.src})`,
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};
