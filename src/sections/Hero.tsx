"use client";

import { useState } from "react";
import { Button } from "@/components/Button";
import starsBg from "@/assets/stars.png";

export const Hero = () => {
  const [notificationVisible, setNotificationVisible] = useState(false);
  const ipAddress = "kalwi.id";

  const handleJoinServer = () => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(ipAddress)
        .then(() => {
          setNotificationVisible(true);
          setTimeout(() => setNotificationVisible(false), 2000);
        })
        .catch((err) => console.error("Failed to copy: ", err));
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = ipAddress;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setNotificationVisible(true);
      setTimeout(() => setNotificationVisible(false), 2000);
    }
  };

  return (
    <section
      className="h-[492px] flex items-center relative"
      style={{
        backgroundImage: `url(${starsBg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute h-64 w-64 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                      bg-[radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, rgba(48, 180, 255, 0.5) 80%)] 
                      shadow-2xl opacity-60"
      />
      <div className="container relative z-10 text-center">
        <h1 className="text-7xl font-bold tracking-tight text-white drop-shadow-lg">
          <span className="block md:inline">KalWi</span>
        </h1>
        <p className="mt-5 text-lg text-white/90 drop-shadow-sm">
          Selamat datang di Landing Page KandangAlwi! Temukan semua informasi
          terbaru tentang server Minecraft kami yang penuh petualangan!
        </p>
        {notificationVisible && (
          <div className="mb-4">
            <div className="bg-white text-black px-4 py-2 rounded shadow-lg z-50 max-w-xs mx-auto">
              IP address server telah disalin: {ipAddress}
            </div>
          </div>
        )}
        <div className="flex justify-center mt-5">
          <Button onClick={handleJoinServer}>Join Server</Button>
        </div>
      </div>
    </section>
  );
};
