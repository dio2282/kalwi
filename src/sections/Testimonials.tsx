"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    text: '"Saya sangat suka bermain di Alwi karena player nya sangat ramah dan baik"',
    name: "ItsFahry",
    title: "Mirachle @ KandangAlwi",
    avatarImg: "/avatar/ItsFahry.png",
  },
  {
    text: '"Saya suka bermain kalwi karena saya mendapatkan banyak pengalaman bermain, dan juga mendapatkan teman yg banyak"',
    name: "braing20",
    title: "Mirachle @ KandangAlwi",
    avatarImg: "/avatar/braing20.png",
  },
  {
    text: '"Saya sangat suka bermain di server Kandang Alwi karena komunitasnya ramah, servernya stabil, dan gampang mencari teman mabar."',
    name: "Reyzha",
    title: "Mirachle @ KandangAlwi",
    avatarImg: "/avatar/Reyzha.png",
  },
  {
    text: '"bermain di server kandang alwi tuh seru banget, banyak sub server bervariasi yang ga membosankan pastinya!! kalwi tempat ternyaman player indonesia:)"',
    name: "xr0rVx3Q",
    title: "Mirachle @ KandangAlwi",
    avatarImg: "/avatar/xr0rVx3Q.png",
  },
  {
    text: '"Saya suka bermain di server kandang alwi, karena player nya yang ramah, sopan,  tidak ada yang rasis, yang kedua server kandang alwi suka mengadakan event seperti diskon 80 persen untuk rank dan lain lain."',
    name: "danilmns",
    title: "Mirachle @ KandangAlwi",
    avatarImg: "/avatar/danilmns.png",
  },
  {
    text: '"saya suka kalwi karena bisa berteman dengan orang2 di server."',
    name: "Cioomayyy",
    title: "Mirachle @ KandangAlwi",
    avatarImg: "/avatar/Cioomayyy.png",
  },
  {
    text: '"Server Kalwi seru, gamemodenya banyak dan staff staffnya friendly & fastresp. Sebagai player java sih gw jarang ngalamin tps drop ato ngelag. Saran" dari playernya didenger dan announcement ttg server aktif di discord. Jadi ya klo mau main minecraft sih di kalwi"',
    name: "Atlas_90",
    title: "Mirachle @ KandangAlwi",
    avatarImg: "/avatar/Atlas_90.png",
  },
  {
    text: '"i like playing kalwi cuz its so fun."',
    name: "Tchaikovskyyyy",
    title: "Mirachle @ KandangAlwi",
    avatarImg: "/avatar/Tchaikovskyyyy.png",
  },
  {
    text: '"server kalwi cukup seru dimainkan, namun rank udah mentok, tambahin rank lagi donggsss"',
    name: "Sneax22_",
    title: "Mirachle @ KandangAlwi",
    avatarImg: "/avatar/Sneax22_.png",
  },
  {
    text: '"Saya suka bermain di server kandang alwi karena bisa ketemu banyak teman dan tidak bosan karena sekarang tidak bermain sendiri lagi. Dari staff juga asik, gk sombong, selalu bantu membernya yg butuh bantuan. Dan selama bermain di server Minecraft aku baru ngerasain gk sendirian."',
    name: ".Avif_Ikhsan",
    title: "Mirachle @ KandangAlwi",
    avatarImg: "/avatar/.Avif_Ikhsan.png",
  },
  {
    text: '"saya suka bermain di server kalwi karena. Staffnya ramah, baik hati, dan suka menolong. Banyak pilihan subserver yang dapat di mainkan. Rank yang ada bagus" dan menarik"',
    name: "ItsFaa_",
    title: "Mirachle @ KandangAlwi",
    avatarImg: "/avatar/ItsFaa_.png",
  },
  {
    text: '"Seneng sekali saya bisa bermain di server kalwi , bahagia bisa bertemu dengan teman2 yg baik dan saling membantu dan banyak keseruan lain nya lagi di server kalwi, pokok nya buat server kalwi best banget aku suka bnget"',
    name: "akiillaa_",
    title: "Mirachle @ KandangAlwi",
    avatarImg: "/avatar/ akiillaa_.png",
  },
];

const TestimonialCard = ({
  testimonial,
  isCenter,
}: {
  testimonial: (typeof testimonials)[0];
  isCenter: boolean;
}) => {
  const [fontSize, setFontSize] = useState(18);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const adjustFontSize = () => {
      if (textRef.current) {
        let currentFontSize = 18;
        textRef.current.style.fontSize = `${currentFontSize}px`;

        while (
          textRef.current.scrollHeight > textRef.current.clientHeight &&
          currentFontSize > 10
        ) {
          currentFontSize--;
          textRef.current.style.fontSize = `${currentFontSize}px`;
        }

        setFontSize(currentFontSize);
      }
    };

    adjustFontSize();
  }, [testimonial.text]);

  return (
    <motion.div
      className={`border border-white/15 p-6 rounded-xl w-72 sm:w-80 flex-none transition-all duration-300 backdrop-blur-sm ${
        isCenter ? "opacity-100" : "opacity-40"
      }`}
      initial={false}
      animate={{ opacity: isCenter ? 1 : 0.4 }}
      transition={{ duration: 0.5 }}
    >
      <div
        ref={textRef}
        className="tracking-tight text-center text-white h-40 overflow-hidden"
        style={{ fontSize: `${fontSize}px` }}
      >
        {testimonial.text}
      </div>
      <div className="flex items-center gap-3 mt-4">
        <div className="relative after:content-[''] after:absolute after:inset-0 after:bg-[rgba(48,180,255,0.5)] after:mix-blend-soft-light before:content-[''] before:absolute before:inset-0 before:border before:border-white/30 before:z-10 before:rounded-lg">
          <Image
            src={testimonial.avatarImg || "/placeholder.svg"}
            alt={`Avatar for ${testimonial.name}`}
            className="h-10 w-10 sm:h-11 sm:w-11 rounded-lg grayscale border border-white/30"
            width={44}
            height={44}
          />
        </div>
        <div className="text-left">
          <div className="font-semibold text-white text-sm sm:text-base">
            {testimonial.name}
          </div>
          <div className="text-white/50 text-xs sm:text-sm">
            {testimonial.title}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const visibleTestimonials = [
    testimonials[
      (currentIndex - 1 + testimonials.length) % testimonials.length
    ],
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
  ];

  return (
    <section className="py-16 sm:py-20 overflow-hidden bg-gradient-to-b from-black via-blue-950 to-black relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl sm:text-5xl text-center tracking-tighter font-medium text-white">
          Testimoni Pengalaman.
        </h2>
        <p className="text-white/70 text-base sm:text-lg text-center mt-4 tracking-tight max-w-2xl mx-auto">
          Berikut adalah pengalaman nyata yang dirasakan oleh para pemain di
          server kami!
        </p>
        <div className="mt-8 sm:mt-10 relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex justify-center items-center"
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {visibleTestimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={`${testimonial.name}-${index}`}
                  testimonial={testimonial}
                  isCenter={index === 1}
                />
              ))}
            </motion.div>
          </div>
        </div>
        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                currentIndex === index ? "bg-blue-500 w-4" : "bg-white/30 w-2"
              }`}
            />
          ))}
        </div>
        <div className="mt-4 flex justify-center">
          <p className="text-white/50 text-sm sm:text-base text-center mt-4">
            Di atas merupakan testimoni nyata yang dirasakan oleh player
            KandangAlwi
          </p>
        </div>
      </div>
    </section>
  );
};
