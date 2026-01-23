"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Users, Crown, Shield, Code, HelpCircle, ChevronRight } from "lucide-react";

import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import {
    staffMembers,
    roleConfig,
    getMcHead,
    getSortedStaff,
    type StaffMember,
    type StaffRole,
} from "@/config/staffConfig";
import starsBg from "@/assets/stars.png";

// Role icons mapping
const roleIcons: Record<StaffRole, React.ElementType> = {
    Owner: Crown,
    "Co-Owner": Crown,
    Developer: Code,
    Admin: Shield,
    Moderator: Shield,
    Helper: HelpCircle,
};

// Staff card component
const StaffCard = ({
    member,
    index,
}: {
    member: StaffMember;
    index: number;
}) => {
    const config = roleConfig[member.role];
    const RoleIcon = roleIcons[member.role];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className="group"
        >
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:border-white/25 transition-colors duration-300 cursor-pointer">
                {/* Avatar Container */}
                <div className="relative mx-auto w-24 h-24 mb-4">
                    <div
                        className="absolute inset-0 rounded-xl blur-lg opacity-50"
                        style={{ backgroundColor: config.color }}
                    />
                    <div className="relative w-24 h-24 rounded-xl overflow-hidden border-2 border-white/20">
                        <Image
                            src={getMcHead(member.username, 128)}
                            alt={`${member.displayName || member.username}'s avatar`}
                            width={96}
                            height={96}
                            className="w-full h-full object-cover"
                            unoptimized
                        />
                    </div>
                </div>

                {/* Name */}
                <h3 className="text-lg font-bold text-white text-center mb-2">
                    {member.displayName || member.username}
                </h3>

                {/* Role Badge */}
                <div className="flex justify-center">
                    <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${config.bgColor} ${config.textColor} border border-current/20`}
                    >
                        <RoleIcon className="w-3.5 h-3.5" />
                        {member.role}
                    </span>
                </div>

                {/* Discord (optional) */}
                {member.discord && (
                    <p className="text-center text-white/40 text-xs mt-3">
                        @{member.discord}
                    </p>
                )}
            </div>
        </motion.div>
    );
};

export default function StaffPage() {
    // Get all staff sorted by role priority
    const allStaff = getSortedStaff();

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

                {/* Glow effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#30b4ff]/20 rounded-full blur-[100px]" />

                <div className="container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/10 mb-6">
                            <Users className="w-4 h-4 text-[#30b4ff]" />
                            <span className="text-sm text-white/70">Meet Our Team</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                            Staff{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#30b4ff] to-cyan-400">
                                List
                            </span>
                        </h1>

                        <p className="text-lg text-white/60 max-w-2xl mx-auto">
                            Tim yang berdedikasi untuk menjaga dan mengembangkan server KalWi.
                            Jangan ragu untuk menghubungi mereka jika butuh bantuan!
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Staff Grid Section - Horizontal 5-column */}
            <section className="py-16 bg-black">
                <div className="container">
                    {/* Staff Count */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center gap-3 mb-8"
                    >
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#30b4ff]/20">
                            <Users className="w-5 h-5 text-[#30b4ff]" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-white">
                                Staff List
                            </h2>
                            <p className="text-sm text-white/40">
                                {allStaff.length} member{allStaff.length > 1 ? "s" : ""}
                            </p>
                        </div>
                    </motion.div>

                    {/* Staff Grid - 5 columns horizontal */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                        {allStaff.map((member, index) => (
                            <StaffCard
                                key={member.username}
                                member={member}
                                index={index}
                            />
                        ))}
                    </div>

                    {/* Empty State */}
                    {allStaff.length === 0 && (
                        <div className="text-center py-20">
                            <Users className="w-16 h-16 text-white/20 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-white/60">
                                No staff members yet
                            </h3>
                            <p className="text-white/40">Check back later!</p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA to Career */}
            <section className="py-16 bg-gradient-to-t from-black via-black to-transparent">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative overflow-hidden rounded-2xl"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-[#30b4ff]/20 to-purple-500/20" />
                        <div className="absolute inset-0 bg-black/50 backdrop-blur-xl" />
                        <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                    Ingin bergabung dengan tim kami?
                                </h3>
                                <p className="text-white/60">
                                    Lihat posisi yang tersedia dan apply sekarang!
                                </p>
                            </div>
                            <Link
                                href="/career"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-[#30b4ff] hover:bg-[#30b4ff]/80 text-black font-semibold rounded-xl transition-all duration-300 hover:transform hover:scale-105"
                            >
                                Lihat Lowongan
                                <ChevronRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </>
    );
}
