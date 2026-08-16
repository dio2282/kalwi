"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, ChevronRight, MessageCircle } from "lucide-react";
import ReactMarkdown from "react-markdown";

import { type Language, type RuleSection } from "@/config/rulesConfig";

export const RuleCard = ({
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

export const RuleContent = ({ rule }: { rule: RuleSection }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden"
        >
            <div
                className="p-6 border-b border-white/10"
                style={{ backgroundColor: `${rule.color}15` }}
            >
                <h2 className="text-2xl font-bold text-white">{rule.title}</h2>
            </div>

            <div className="p-6">
                <div className="prose prose-invert prose-sm max-w-none">
                    <ReactMarkdown
                        components={{
                            h3: ({ children }) => (
                                <h3 className="text-lg font-bold text-white mt-6 mb-3 first:mt-0">
                                    {children}
                                </h3>
                            ),
                            h4: ({ children }) => (
                                <h4 className="text-base font-semibold text-white/90 mt-5 mb-2">
                                    {children}
                                </h4>
                            ),
                            p: ({ children }) => (
                                <p className="text-white/70 mb-3">{children}</p>
                            ),
                            ul: ({ children }) => (
                                <ul className="list-disc pl-5 space-y-2 mb-4">{children}</ul>
                            ),
                            ol: ({ children }) => (
                                <ol className="list-decimal pl-5 space-y-2 mb-4">{children}</ol>
                            ),
                            li: ({ children }) => (
                                <li className="pl-1 text-white/70 marker:text-[#30b4ff]">
                                    {children}
                                </li>
                            ),
                            strong: ({ children }) => (
                                <strong className="text-white font-semibold">
                                    {children}
                                </strong>
                            ),
                            pre: ({ children }) => (
                                <pre className="mb-4 overflow-x-auto whitespace-pre-wrap rounded-xl border border-white/10 bg-black/40 p-4 text-sm leading-relaxed text-white/70">
                                    {children}
                                </pre>
                            ),
                            code: ({ children }) => (
                                <code className="px-1.5 py-0.5 bg-white/10 rounded text-[#30b4ff] text-sm">
                                    {children}
                                </code>
                            ),
                            blockquote: ({ children }) => (
                                <blockquote className="mb-4 border-l-4 border-[#30b4ff]/60 bg-[#30b4ff]/10 py-3 pl-4 pr-3 text-white/70">
                                    {children}
                                </blockquote>
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

            {rule.footer && (
                <div className="px-6 py-4 border-t border-white/10 bg-white/5">
                    <p className="text-sm text-white/40">{rule.footer}</p>
                </div>
            )}
        </motion.div>
    );
};

export const FlagIcon = ({ language }: { language: Language }) => {
    if (language === "english") {
        return (
            <span
                aria-hidden="true"
                className="relative inline-block h-4 w-6 shrink-0 overflow-hidden rounded-[2px] shadow-[0_0_0_1px_rgba(255,255,255,0.25)]"
                style={{
                    backgroundImage:
                        "linear-gradient(90deg, transparent 44%, #ffffff 44%, #ffffff 56%, transparent 56%), linear-gradient(0deg, transparent 38%, #ffffff 38%, #ffffff 62%, transparent 62%), linear-gradient(90deg, transparent 48%, #c8102e 48%, #c8102e 52%, transparent 52%), linear-gradient(0deg, transparent 44%, #c8102e 44%, #c8102e 56%, transparent 56%), linear-gradient(33deg, transparent 43%, #ffffff 43%, #ffffff 52%, transparent 52%), linear-gradient(-33deg, transparent 43%, #ffffff 43%, #ffffff 52%, transparent 52%), linear-gradient(33deg, transparent 47%, #c8102e 47%, #c8102e 50%, transparent 50%), linear-gradient(-33deg, transparent 47%, #c8102e 47%, #c8102e 50%, transparent 50%)",
                    backgroundColor: "#012169",
                }}
            />
        );
    }

    return (
        <span
            aria-hidden="true"
            className="inline-block h-4 w-6 shrink-0 overflow-hidden rounded-[2px] bg-[linear-gradient(to_bottom,#e70011_0_50%,#ffffff_50%_100%)] shadow-[0_0_0_1px_rgba(255,255,255,0.25)]"
        />
    );
};

export const RulesTypeSwitcher = ({
    active,
}: {
    active: "server" | "discord";
}) => {
    const items = [
        {
            id: "server" as const,
            href: "/rules",
            label: "Server Rules",
            icon: BookOpen,
        },
        {
            id: "discord" as const,
            href: "/rules/discord",
            label: "Discord Rules",
            icon: MessageCircle,
        },
    ];

    return (
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            {items.map((item) => {
                const Icon = item.icon;
                const isActive = active === item.id;

                return (
                    <Link
                        key={item.id}
                        href={item.href}
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 ${isActive
                                ? "bg-[#30b4ff]/20 border-[#30b4ff]/50 text-[#30b4ff]"
                                : "bg-white/5 border-white/10 text-white/60 hover:border-white/20"
                            }`}
                    >
                        <Icon className="w-4 h-4" />
                        {item.label}
                    </Link>
                );
            })}
        </div>
    );
};
