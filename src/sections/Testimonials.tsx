"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useTransform,
  useAnimation,
  useSpring,
  type MotionValue,
} from "framer-motion";

import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";

const testimonials = [
  {
    text: '"Gila! Keren banget ini server"',
    name: "xLqcy",
    title: "Owner @ KandangAlwi",
    avatarImg: avatar1,
  },
  {
    text: '"Wah, OneBlocknya ga ada yang bisa nyaingin sih"',
    name: "Sulphora",
    title: "Developer @ KandangAlwi",
    avatarImg: avatar2,
  },
  {
    text: '"Sistenya keren juga!"',
    name: "Dev_Dio",
    title: "COO @ KandangAlwi",
    avatarImg: avatar3,
  },
  {
    text: '"Acid paling seru sih!"',
    name: "Yur28_",
    title: "Helper @ KandangAlwi",
    avatarImg: avatar4,
  },
];

const TestimonialCard = ({
  testimonial,
  progress,
}: {
  testimonial: (typeof testimonials)[0];
  progress: MotionValue<number>;
}) => {
  const background = useTransform(
    progress,
    [0, 0.5, 1],
    [
      "linear-gradient(180deg, rgba(48, 180, 255, 0.3), rgba(0, 0, 0, 0.7))",
      "linear-gradient(180deg, rgba(48, 180, 255, 0.5), rgba(0, 0, 0, 0.7))",
      "linear-gradient(180deg, rgba(48, 180, 255, 0.3), rgba(0, 0, 0, 0.7))",
    ]
  );

  return (
    <motion.div
      style={{ background }}
      className="border border-white/15 p-6 rounded-xl w-80 flex-none transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl flex flex-col items-center"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="text-lg tracking-tight text-center text-white">
        {testimonial.text}
      </div>
      <div className="flex items-center gap-3 mt-5">
        <div className="relative after:content-[''] after:absolute after:inset-0 after:bg-[rgba(48,180,255,0.5)] after:mix-blend-soft-light before:content-[''] before:absolute before:inset-0 before:border before:border-white/30 before:z-10 before:rounded-lg">
          <Image
            src={testimonial.avatarImg || "/placeholder.svg"}
            alt={`Avatar for ${testimonial.name}`}
            className="h-11 w-11 rounded-lg grayscale border border-white/30"
            width={44}
            height={44}
          />
        </div>
        <div className="text-left">
          <div className="font-semibold text-white">{testimonial.name}</div>
          <div className="text-white/50 text-sm">{testimonial.title}</div>
        </div>
      </div>
    </motion.div>
  );
};

export const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false); // Added state for desktop detection
  const x = useMotionValue(0);
  const xSmooth = useSpring(x, {
    stiffness: 300,
    damping: 30,
    restDelta: 0.01,
  });
  const xProgress = useTransform(xSmooth, [-contentWidth, 0], [1, 0]);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
        setContentWidth(containerRef.current.scrollWidth);
      }
      setIsDesktop(window.innerWidth >= 1024); // Added desktop detection
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const handleDrag = (event: any, info: any) => {
    x.set(x.get() + info.delta.x);
  };

  const handleDragEnd = () => {
    const currentX = x.get();
    const maxX = 0;
    const minX = -contentWidth + containerWidth;

    if (currentX > maxX) {
      x.set(maxX);
    } else if (currentX < minX) {
      x.set(minX);
    }
  };

  const infiniteTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl text-center tracking-tighter font-medium text-white">
          Testimoni Pengalaman.
        </h2>
        <p className="text-white/70 text-lg text-center mt-5 tracking-tight">
          Berikut adalah pengalaman nyata yang dirasakan oleh para pemain di
          server kami!
        </p>
        <motion.div className="mt-10 relative overflow-x-auto">
          {" "}
          {/* Added overflow-x-auto */}
          <motion.div
            ref={containerRef}
            className={`flex flex-row gap-5 ${
              isDesktop
                ? "overflow-x-auto scrollbar-hide"
                : "cursor-grab active:cursor-grabbing"
            } touch-pan-x`}
            style={{
              x: isDesktop ? 0 : xSmooth,
              display: "flex",
              justifyContent: "center",
            }}
            drag={isDesktop ? false : "x"}
            dragConstraints={{
              left: isDesktop ? 0 : -contentWidth + containerWidth,
              right: 0,
            }}
            onDrag={isDesktop ? undefined : handleDrag}
            onDragEnd={isDesktop ? undefined : handleDragEnd}
          >
            {infiniteTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={`${testimonial.name}-${index}`}
                testimonial={testimonial}
                progress={xProgress}
              />
            ))}
          </motion.div>
        </motion.div>
        <div className="mt-6 flex justify-center">
          <p className="text-white/50 text-sm justify-center text-center">
            Geser atau tarik untuk melihat lebih banyak testimoni
          </p>
        </div>
      </div>
    </section>
  );
};
