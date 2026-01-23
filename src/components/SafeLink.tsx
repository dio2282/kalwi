"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

// Known safe domains that bypass redirect page
const BYPASS_REDIRECT_DOMAINS = [
    "discord.gg",
    "discord.com",
    "store.kalwi.net",
    "kalwi.net",
    "kalwi.id",
    "docs.kalwi.net",
    "minecraft-mp.com",
    "wa.me",
    "wa.link",
];

// Check if URL is external
export const isExternalLink = (href: string): boolean => {
    if (!href) return false;
    return href.startsWith("http://") || href.startsWith("https://");
};

// Check if should bypass redirect (safe domains)
export const shouldBypassRedirect = (href: string): boolean => {
    try {
        const url = new URL(href);
        return BYPASS_REDIRECT_DOMAINS.some(
            (domain) =>
                url.hostname === domain || url.hostname.endsWith(`.${domain}`)
        );
    } catch {
        return false;
    }
};

// Get redirect URL
export const getRedirectUrl = (href: string): string => {
    return `/redirect?url=${encodeURIComponent(href)}`;
};

interface SafeLinkProps {
    href: string;
    children: ReactNode;
    className?: string;
    id?: string;
    onClick?: () => void;
    // If true, always bypass redirect page
    bypassRedirect?: boolean;
}

/**
 * SafeLink component that handles external links with redirect page
 * - Internal links: normal navigation
 * - External safe domains: direct link
 * - External unknown domains: redirect page with countdown
 */
export const SafeLink = ({
    href,
    children,
    className,
    id,
    onClick,
    bypassRedirect = false,
}: SafeLinkProps) => {
    const isExternal = isExternalLink(href);

    // Internal link - use Next.js Link
    if (!isExternal) {
        return (
            <Link href={href} className={className} id={id} onClick={onClick}>
                {children}
            </Link>
        );
    }

    // External link with bypass or safe domain - direct link
    if (bypassRedirect || shouldBypassRedirect(href)) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
                id={id}
                onClick={onClick}
            >
                {children}
            </a>
        );
    }

    // External unknown domain - use redirect page
    return (
        <Link
            href={getRedirectUrl(href)}
            className={className}
            id={id}
            onClick={onClick}
        >
            {children}
        </Link>
    );
};

export default SafeLink;
