"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ExternalLink, Shield, ArrowRight, AlertTriangle, X } from "lucide-react";
import Link from "next/link";

import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import starsBg from "@/assets/stars.png";

// Known safe domains (no redirect warning needed)
const SAFE_DOMAINS = [
    "discord.gg",
    "discord.com",
    "store.kalwi.net",
    "kalwi.net",
    "kalwi.id",
    "docs.kalwi.net",
    "minecraft-mp.com",
];

// Check if URL is from a safe domain
const isSafeDomain = (url: string): boolean => {
    try {
        const urlObj = new URL(url);
        return SAFE_DOMAINS.some(
            (domain) =>
                urlObj.hostname === domain || urlObj.hostname.endsWith(`.${domain}`)
        );
    } catch {
        return false;
    }
};

// Get domain from URL
const getDomain = (url: string): string => {
    try {
        const urlObj = new URL(url);
        return urlObj.hostname;
    } catch {
        return "Unknown";
    }
};

function RedirectContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [countdown, setCountdown] = useState(5);
    const [cancelled, setCancelled] = useState(false);

    const targetUrl = searchParams.get("url") || "";
    const decodedUrl = decodeURIComponent(targetUrl);
    const domain = getDomain(decodedUrl);
    const isSafe = isSafeDomain(decodedUrl);

    useEffect(() => {
        if (!targetUrl || cancelled) return;

        // If it's a safe domain, redirect immediately
        if (isSafe) {
            window.location.href = decodedUrl;
            return;
        }

        // Countdown timer
        const timer = setInterval(() => {
            setCountdown((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    window.location.href = decodedUrl;
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [targetUrl, decodedUrl, isSafe, cancelled]);

    const handleCancel = () => {
        setCancelled(true);
        router.push("/");
    };

    const handleContinue = () => {
        window.location.href = decodedUrl;
    };

    // Invalid URL
    if (!targetUrl) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="text-center">
                    <AlertTriangle className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                    <h1 className="text-2xl font-bold text-white mb-2">Invalid Link</h1>
                    <p className="text-white/60 mb-6">No redirect URL provided.</p>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#30b4ff] text-black font-semibold rounded-xl"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <>
            <Header />

            <section
                className="min-h-[calc(100vh-200px)] flex items-center justify-center relative py-20"
                style={{
                    backgroundImage: `url(${starsBg.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/80 to-black" />

                {/* Glow effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-500/20 rounded-full blur-[120px]" />

                <div className="container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-lg mx-auto"
                    >
                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
                            {/* Header */}
                            <div className="p-6 border-b border-white/10 bg-yellow-500/10">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-xl bg-yellow-500/20 flex items-center justify-center">
                                        <Shield className="w-7 h-7 text-yellow-400" />
                                    </div>
                                    <div>
                                        <h1 className="text-xl font-bold text-white">
                                            Leaving KalWi
                                        </h1>
                                        <p className="text-sm text-white/60">
                                            External link detected
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 space-y-6">
                                <div>
                                    <p className="text-white/70 mb-4">
                                        Kamu akan diarahkan ke website eksternal:
                                    </p>

                                    {/* URL Display */}
                                    <div className="bg-black/50 border border-white/10 rounded-xl p-4">
                                        <div className="flex items-center gap-3 mb-2">
                                            <ExternalLink className="w-5 h-5 text-[#30b4ff]" />
                                            <span className="text-sm font-semibold text-white/80">
                                                {domain}
                                            </span>
                                        </div>
                                        <p className="text-xs text-white/40 break-all">
                                            {decodedUrl}
                                        </p>
                                    </div>
                                </div>

                                {/* Warning */}
                                <div className="flex items-start gap-3 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
                                    <AlertTriangle className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-sm text-yellow-400 font-medium">
                                            Perhatian
                                        </p>
                                        <p className="text-sm text-white/60">
                                            KalWi tidak bertanggung jawab atas konten di website
                                            eksternal. Pastikan kamu mempercayai link ini.
                                        </p>
                                    </div>
                                </div>

                                {/* Countdown */}
                                {!cancelled && (
                                    <div className="text-center">
                                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#30b4ff]/20 border-2 border-[#30b4ff]/50 mb-3">
                                            <span className="text-3xl font-bold text-[#30b4ff]">
                                                {countdown}
                                            </span>
                                        </div>
                                        <p className="text-white/50 text-sm">
                                            Redirect otomatis dalam {countdown} detik...
                                        </p>
                                    </div>
                                )}

                                {/* Buttons */}
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <button
                                        onClick={handleContinue}
                                        className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-[#30b4ff] hover:bg-[#30b4ff]/80 text-black font-semibold rounded-xl transition-all duration-300"
                                    >
                                        Lanjutkan Sekarang
                                        <ArrowRight className="w-5 h-5" />
                                    </button>
                                    <button
                                        onClick={handleCancel}
                                        className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/15 border border-white/10 text-white rounded-xl transition-all duration-300"
                                    >
                                        <X className="w-5 h-5" />
                                        Batalkan
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default function RedirectPage() {
    return (
        <Suspense
            fallback={
                <div className="min-h-screen bg-black flex items-center justify-center">
                    <div className="text-white">Loading...</div>
                </div>
            }
        >
            <RedirectContent />
        </Suspense>
    );
}
