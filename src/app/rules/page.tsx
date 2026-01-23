"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
    BookOpen,
    ChevronRight,
    Globe,
    Shield,
    AlertTriangle,
    CheckCircle,
} from "lucide-react";
import ReactMarkdown from "react-markdown";

import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import {
    getRulesByLanguage,
    getLanguageLabel,
    availableLanguages,
    type Language,
    type RuleSection,
} from "@/config/rulesConfig";
import starsBg from "@/assets/stars.png";

// Rule card component
const RuleCard = ({
    rule,
    isActive,
    onClick,
}: {
    rule: RuleSection;
    isActive: boolean;
    onClick: () => void;
}) => {
    return (
        <button
            onClick={onClick}
            className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${isActive
                    ? "bg-white/10 border-white/30"
                    : "bg-white/5 border-white/10 hover:border-white/20"
                }`}
        >
            <div className="flex items-center gap-3">
                <span className="text-2xl">{rule.emoji}</span>
                <div className="flex-1">
                    <h3 className="font-semibold text-white">{rule.label}</h3>
                </div>
                <ChevronRight
                    className={`w-5 h-5 text-white/40 transition-transform duration-300 ${isActive ? "rotate-90" : ""
                        }`}
                />
            </div>
        </button>
    );
};

// Rule content component with markdown rendering
const RuleContent = ({ rule }: { rule: RuleSection }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden"
        >
            {/* Header */}
            <div
                className="p-6 border-b border-white/10"
                style={{ backgroundColor: `${rule.color}15` }}
            >
                <h2 className="text-2xl font-bold text-white">{rule.title}</h2>
            </div>

            {/* Content */}
            <div className="p-6">
                <div className="prose prose-invert prose-sm max-w-none">
                    <ReactMarkdown
                        components={{
                            h3: ({ children }) => (
                                <h3 className="text-lg font-bold text-white mt-6 mb-3 first:mt-0">
                                    {children}
                                </h3>
                            ),
                            p: ({ children }) => (
                                <p className="text-white/70 mb-3">{children}</p>
                            ),
                            ul: ({ children }) => (
                                <ul className="space-y-2 mb-4">{children}</ul>
                            ),
                            li: ({ children }) => (
                                <li className="flex items-start gap-2 text-white/70">
                                    <ChevronRight className="w-4 h-4 text-[#30b4ff] mt-1 shrink-0" />
                                    <span>{children}</span>
                                </li>
                            ),
                            strong: ({ children }) => (
                                <strong className="text-white font-semibold">
                                    {children}
                                </strong>
                            ),
                            code: ({ children }) => (
                                <code className="px-1.5 py-0.5 bg-white/10 rounded text-[#30b4ff] text-sm">
                                    {children}
                                </code>
                            ),
                            hr: () => (
                                <hr className="border-white/10 my-6" />
                            ),
                        }}
                    >
                        {rule.content}
                    </ReactMarkdown>
                </div>
            </div>

            {/* Footer */}
            {rule.footer && (
                <div className="px-6 py-4 border-t border-white/10 bg-white/5">
                    <p className="text-sm text-white/40">{rule.footer}</p>
                </div>
            )}
        </motion.div>
    );
};

export default function RulesPage() {
    const [language, setLanguage] = useState<Language>("indonesia");
    const [activeRuleId, setActiveRuleId] = useState<string | null>(null);

    const rules = getRulesByLanguage(language);
    const activeRule = rules.find((r) => r.id === activeRuleId) || rules[0];

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

                {/* Glow effects */}
                <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-red-500/20 rounded-full blur-[100px]" />
                <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#30b4ff]/20 rounded-full blur-[100px]" />

                <div className="container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/10 mb-6">
                            <BookOpen className="w-4 h-4 text-[#30b4ff]" />
                            <span className="text-sm text-white/70">Server Guidelines</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                            Server{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                                Rules
                            </span>
                        </h1>

                        <p className="text-lg text-white/60 max-w-2xl mx-auto">
                            Peraturan server untuk menjaga kenyamanan bermain bersama.
                            Pastikan kamu memahami dan mengikuti aturan berikut.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Rules Section */}
            <section className="py-16 bg-black">
                <div className="container">
                    {/* Language Selector */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex flex-wrap items-center justify-center gap-3 mb-12"
                    >
                        <Globe className="w-5 h-5 text-white/40" />
                        {availableLanguages.map((lang) => (
                            <button
                                key={lang}
                                onClick={() => {
                                    setLanguage(lang);
                                    setActiveRuleId(null);
                                }}
                                className={`px-4 py-2 rounded-lg border transition-all duration-300 ${language === lang
                                        ? "bg-[#30b4ff]/20 border-[#30b4ff]/50 text-[#30b4ff]"
                                        : "bg-white/5 border-white/10 text-white/60 hover:border-white/20"
                                    }`}
                            >
                                {getLanguageLabel(lang)}
                            </button>
                        ))}
                    </motion.div>

                    {/* Quick Info Cards */}
                    <div className="grid md:grid-cols-3 gap-4 mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-green-500/10 border border-green-500/20 rounded-xl p-4"
                        >
                            <div className="flex items-center gap-3">
                                <CheckCircle className="w-8 h-8 text-green-400" />
                                <div>
                                    <h4 className="font-semibold text-green-400">Diperbolehkan</h4>
                                    <p className="text-sm text-white/50">Mods client-side, trading in-game</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4"
                        >
                            <div className="flex items-center gap-3">
                                <AlertTriangle className="w-8 h-8 text-yellow-400" />
                                <div>
                                    <h4 className="font-semibold text-yellow-400">Peringatan</h4>
                                    <p className="text-sm text-white/50">Spam, provokasi, griefing</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-red-500/10 border border-red-500/20 rounded-xl p-4"
                        >
                            <div className="flex items-center gap-3">
                                <Shield className="w-8 h-8 text-red-400" />
                                <div>
                                    <h4 className="font-semibold text-red-400">Dilarang Keras</h4>
                                    <p className="text-sm text-white/50">Hack, RMT, doxing, account sharing</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Rules Layout */}
                    <div className="grid lg:grid-cols-3 gap-6">
                        {/* Sidebar - Rule Navigation */}
                        <div className="lg:col-span-1 space-y-2">
                            {rules.map((rule) => (
                                <RuleCard
                                    key={rule.id}
                                    rule={rule}
                                    isActive={activeRule.id === rule.id}
                                    onClick={() => setActiveRuleId(rule.id)}
                                />
                            ))}
                        </div>

                        {/* Content Area */}
                        <div className="lg:col-span-2">
                            <AnimatePresence mode="wait">
                                <RuleContent key={activeRule.id} rule={activeRule} />
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-t from-black via-black to-transparent">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative overflow-hidden rounded-2xl"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10" />
                        <div className="absolute inset-0 bg-black/60 backdrop-blur-xl" />

                        <div className="relative p-8 md:p-12 text-center">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                Ada pertanyaan tentang rules?
                            </h3>
                            <p className="text-white/60 mb-6 max-w-xl mx-auto">
                                Jika ada aturan yang kurang jelas atau kamu mengalami masalah,
                                hubungi staff kami di Discord.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <a
                                    href="https://discord.gg/kalwi"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#30b4ff] hover:bg-[#30b4ff]/80 text-black font-semibold rounded-xl transition-all duration-300"
                                >
                                    Join Discord
                                    <ChevronRight className="w-5 h-5" />
                                </a>
                                <Link
                                    href="/staff"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/15 border border-white/10 text-white rounded-xl transition-all duration-300"
                                >
                                    Lihat Staff
                                    <ChevronRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </>
    );
}
