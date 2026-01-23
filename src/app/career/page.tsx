"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    Briefcase,
    CheckCircle,
    Star,
    MessageCircle,
    ChevronRight,
    Code,
    Users,
    ArrowRight,
    Sparkles,
    FileText,
    ExternalLink,
} from "lucide-react";

import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import {
    careerOpenings,
    getDiscordDmLink,
    getOpenCareerCount,
    type CareerOpening,
    type ApplyMethod,
} from "@/config/staffConfig";
import starsBg from "@/assets/stars.png";

// Get apply button props based on method type
const getApplyButtonProps = (method: ApplyMethod) => {
    switch (method.type) {
        case "discord":
            return {
                href: getDiscordDmLink(method.userId),
                icon: MessageCircle,
                label: `DM ${method.username} di Discord`,
            };
        case "gform":
            return {
                href: method.url,
                icon: FileText,
                label: method.label || "Isi Google Form",
            };
        case "link":
            return {
                href: method.url,
                icon: ExternalLink,
                label: method.label,
            };
    }
};

// Career Card Component
const CareerCard = ({
    opening,
    index,
}: {
    opening: CareerOpening;
    index: number;
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            className="group relative"
        >
            <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300">
                {/* Header */}
                <div className="relative p-6 pb-4 border-b border-white/10">
                    {/* Open badge */}
                    {opening.isOpen ? (
                        <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                            <span className="text-xs font-medium text-green-400">OPEN</span>
                        </div>
                    ) : (
                        <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 bg-red-500/20 border border-red-500/30 rounded-full">
                            <span className="w-2 h-2 bg-red-400 rounded-full" />
                            <span className="text-xs font-medium text-red-400">CLOSED</span>
                        </div>
                    )}

                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#30b4ff] to-cyan-400 flex items-center justify-center shrink-0">
                            <Code className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-1">
                                {opening.title}
                            </h3>
                            {opening.description && (
                                <p className="text-sm text-white/60">{opening.description}</p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Requirements */}
                <div className="p-6 space-y-6">
                    {/* Technical Requirements */}
                    <div>
                        <h4 className="flex items-center gap-2 text-sm font-semibold text-[#30b4ff] uppercase tracking-wider mb-3">
                            <CheckCircle className="w-4 h-4" />
                            Requirements
                        </h4>
                        <ul className="space-y-2">
                            {opening.requirements.map((req, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                    className="flex items-start gap-3 text-white/80"
                                >
                                    <ChevronRight className="w-4 h-4 text-[#30b4ff] mt-0.5 shrink-0" />
                                    <span>{req}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    {/* General Requirements */}
                    <div>
                        <h4 className="flex items-center gap-2 text-sm font-semibold text-purple-400 uppercase tracking-wider mb-3">
                            <Users className="w-4 h-4" />
                            Syarat Umum
                        </h4>
                        <ul className="space-y-2">
                            {opening.generalRequirements.map((req, i) => (
                                <li
                                    key={i}
                                    className="flex items-start gap-3 text-white/80"
                                >
                                    <ChevronRight className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                                    <span>{req}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Benefits */}
                    <div>
                        <h4 className="flex items-center gap-2 text-sm font-semibold text-amber-400 uppercase tracking-wider mb-3">
                            <Star className="w-4 h-4" />
                            Benefits
                        </h4>
                        <ul className="space-y-2">
                            {opening.benefits.map((benefit, i) => (
                                <li
                                    key={i}
                                    className="flex items-start gap-3 text-white/80"
                                >
                                    <Sparkles className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                                    <span>{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* CTA */}
                {opening.isOpen && (() => {
                    const buttonProps = getApplyButtonProps(opening.applyMethod);
                    const ButtonIcon = buttonProps.icon;
                    return (
                        <div className="p-6 pt-0">
                            <a
                                href={buttonProps.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#30b4ff] to-cyan-400 hover:from-[#30b4ff]/90 hover:to-cyan-400/90 text-black font-semibold rounded-xl transition-all duration-300 hover:transform hover:scale-[1.02] active:scale-[0.98]"
                            >
                                <ButtonIcon className="w-5 h-5" />
                                {buttonProps.label}
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    );
                })()}
            </div>
        </motion.div>
    );
};

export default function CareerPage() {
    const openCount = getOpenCareerCount();

    return (
        <>
            <Header />

            {/* Hero Section */}
            <section
                className="relative py-24 overflow-hidden"
                style={{
                    backgroundImage: `url(${starsBg.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />

                {/* Animated glow effects */}
                <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#30b4ff]/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/20 rounded-full blur-[100px] animate-pulse delay-700" />

                <div className="container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/10 mb-6">
                            <Briefcase className="w-4 h-4 text-[#30b4ff]" />
                            <span className="text-sm text-white/70">We&apos;re Hiring!</span>
                            {openCount > 0 && (
                                <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full">
                                    {openCount} Open
                                </span>
                            )}
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                            Join Our{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#30b4ff] to-purple-400">
                                Team
                            </span>
                        </h1>

                        <p className="text-lg text-white/60 max-w-2xl mx-auto">
                            Bergabunglah dengan tim KalWi dan bantu kami membangun pengalaman
                            Minecraft yang luar biasa untuk semua pemain!
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Career Listings */}
            <section className="py-16 bg-black">
                <div className="container">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center justify-between mb-12"
                    >
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-2">
                                Lowongan Tersedia
                            </h2>
                            <p className="text-white/50">
                                {openCount > 0
                                    ? `${openCount} posisi sedang dibuka`
                                    : "Tidak ada posisi yang dibuka saat ini"}
                            </p>
                        </div>
                    </motion.div>

                    {/* Career Grid */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {careerOpenings.map((opening, index) => (
                            <CareerCard key={opening.id} opening={opening} index={index} />
                        ))}
                    </div>

                    {/* Empty State */}
                    {careerOpenings.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-20"
                        >
                            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-white/5 flex items-center justify-center">
                                <Briefcase className="w-10 h-10 text-white/20" />
                            </div>
                            <h3 className="text-xl font-semibold text-white/60 mb-2">
                                Tidak ada lowongan saat ini
                            </h3>
                            <p className="text-white/40 max-w-md mx-auto">
                                Follow Discord kami untuk update terbaru tentang lowongan yang
                                akan dibuka!
                            </p>
                            <a
                                href="https://discord.gg/kalwi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-white/10 hover:bg-white/15 border border-white/10 rounded-xl text-white transition-all duration-300"
                            >
                                Join Discord
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Info Section */}
            <section className="py-16 bg-gradient-to-t from-black via-black to-transparent">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative overflow-hidden rounded-2xl"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-[#30b4ff]/10 to-purple-500/10" />
                        <div className="absolute inset-0 bg-black/60 backdrop-blur-xl" />

                        <div className="relative p-8 md:p-12">
                            <div className="grid md:grid-cols-3 gap-8">
                                {/* Info 1 */}
                                <div className="text-center md:text-left">
                                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#30b4ff]/20 text-[#30b4ff] mb-4">
                                        <MessageCircle className="w-6 h-6" />
                                    </div>
                                    <h4 className="text-lg font-semibold text-white mb-2">
                                        Apply Sekarang
                                    </h4>
                                    <p className="text-white/50 text-sm">
                                        Lihat detail cara apply di setiap lowongan. Bisa melalui Discord DM atau Google Form tergantung posisi.
                                    </p>
                                </div>

                                {/* Info 2 */}
                                <div className="text-center md:text-left">
                                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 mb-4">
                                        <Star className="w-6 h-6" />
                                    </div>
                                    <h4 className="text-lg font-semibold text-white mb-2">
                                        Benefit Menarik
                                    </h4>
                                    <p className="text-white/50 text-sm">
                                        Dapatkan pengalaman berharga dan gaji yang kompetitif dengan
                                        pembayaran fleksibel.
                                    </p>
                                </div>

                                {/* Info 3 */}
                                <div className="text-center md:text-left">
                                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 mb-4">
                                        <Users className="w-6 h-6" />
                                    </div>
                                    <h4 className="text-lg font-semibold text-white mb-2">
                                        Tim Solid
                                    </h4>
                                    <p className="text-white/50 text-sm">
                                        Bergabung dengan tim yang suportif dan profesional dalam
                                        mengembangkan server.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Link to Staff */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mt-8"
                    >
                        <Link
                            href="/staff"
                            className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors"
                        >
                            Lihat Staff Saat Ini
                            <ChevronRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </>
    );
}
