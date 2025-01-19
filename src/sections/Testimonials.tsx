import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import Image from "next/image";

const testimonials = [
  {
    text: "“Gila! Keren banget ini server”",
    name: "xLqcy",
    title: "Owner @ KandangAlwi",
    avatarImg: avatar1,
  },
  {
    text: "“Wah, OneBlocknya ga ada yang bisa nyaingin sih”",
    name: "Sulphora",
    title: "Developer @ KandangAlwi",
    avatarImg: avatar2,
  },
  {
    text: "“Sistenya keren juga!”",
    name: "Dev_Dio",
    title: "COO @ KandangAlwi",
    avatarImg: avatar3,
  },
  {
    text: "“Acid paling seru sih!”",
    name: "Yur28_",
    title: "Helper @ KandangAlwi",
    avatarImg: avatar4,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl text-center tracking-tighter font-medium text-white">
          Testimoni Pengalaman.
        </h2>
        <p className="text-white/70 text-lg text-center mt-5 tracking-tight">
          Berikut adalah pengalaman nyata yang dirasakan oleh para pemain di
          server kami!
        </p>
        <div className="mt-10 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-l from-black/70 to-transparent" />
          <div className="absolute inset-0 pointer-events-none right-0 bg-gradient-to-r from-black/40 to-transparent" />

          <div className="flex gap-5 overflow-hidden justify-center">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="border border-white/15 p-6 rounded-xl max-w-xs flex-none transition-transform transform hover:scale-105 shadow-lg hover:shadow-2xl flex flex-col items-center"
                style={{
                  background:
                    "linear-gradient(to bottom left, rgba(48, 180, 255, 0.5), rgba(0, 0, 0, 0.7))",
                }}
              >
                <div className="text-lg tracking-tight text-center text-white">
                  {testimonial.text}
                </div>
                <div className="flex items-center gap-3 mt-5">
                  <div className="relative after:content-[''] after:absolute after:inset-0 after:bg-[rgba(48,180,255,0.5)] after:mix-blend-soft-light before:content-[''] before:absolute before:inset-0 before:border before:border-white/30 before:z-10 before:rounded-lg">
                    <Image
                      src={testimonial.avatarImg}
                      alt={`Avatar for ${testimonial.name}`}
                      className="h-11 w-11 rounded-lg grayscale border border-white/30"
                      width={44}
                      height={44}
                    />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-white/50 text-sm">
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
