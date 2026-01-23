"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import LogoIcon from "@/assets/logo.png";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { Button, buttonVariants } from "@/components/Button";
import { SafeLink } from "@/components/SafeLink";
import { cn } from "@/lib/utils";

type NavItem = {
  id: string;
  name: string;
  href: string;
  badge?: string;
};

const VIEW_TYPE_DESKTOP = "desktop";
const VIEW_TYPE_MOBILE = "mobile";

const mainNav: NavItem[] = [
  { id: "discord-link", name: "Discord", href: "https://discord.gg/kalwi" },
  { id: "staff-link", name: "Staff", href: "/staff" },
  { id: "career-link", name: "Career", href: "/career" },
  {
    id: "store-link",
    name: "Store",
    href: "https://store.kalwi.net",
    badge: "80%",
  },
  {
    id: "rules-link",
    name: "Rules",
    href: "/rules",
  },
  { id: "support-link", name: "Support", href: "https://discord.gg/kalwi" },
];

const voteNav: NavItem = {
  id: "vote-link",
  name: "Vote Now",
  href: "https://minecraft-mp.com/server/287720/vote/",
};

const Badge = React.memo(({ text }: { text: string }) => (
  <span className="ml-2 px-1.5 py-0.5 text-xs bg-[#30b4ff] text-black rounded-full">
    {text}
  </span>
));
Badge.displayName = "Badge";

const NavLink = React.memo(
  ({
    item,
    viewType,
  }: {
    item: NavItem;
    viewType: typeof VIEW_TYPE_DESKTOP | typeof VIEW_TYPE_MOBILE;
  }) => (
    <SafeLink
      href={item.href}
      id={item.id}
      className={cn(
        viewType === VIEW_TYPE_DESKTOP
          ? "text-sm text-white/70 hover:text-white transition-colors"
          : "flex items-center justify-between rounded-lg px-3 py-2 text-sm transition text-white/70 hover:text-white hover:bg-white/10"
      )}
    >
      {item.name}
      {item.badge && <Badge text={item.badge} />}
    </SafeLink>
  ),
  (prevProps, nextProps) =>
    prevProps.item.id === nextProps.item.id &&
    prevProps.viewType === nextProps.viewType
);
NavLink.displayName = "NavLink";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 py-4 px-4">
      <div className="relative">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-lg rounded-xl border border-white/15" />
        <div className="relative py-4 px-4 flex justify-between items-center max-w-7xl mx-auto">
          <Link href="/" className="relative z-10 flex items-center">
            <div className="h-11 w-11 rounded-full bg-[radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, rgba(48, 180, 255, 0.5) 80%)] shadow-2xl flex items-center justify-center">
              <Image
                src={LogoIcon?.src || "/placeholder.svg"}
                alt="Logo"
                width={40}
                height={40}
                className="h-8 w-8"
                priority
              />
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {mainNav.map((item) => (
              <NavLink key={item.id} item={item} viewType={VIEW_TYPE_DESKTOP} />
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <SafeLink
              href={voteNav.href}
              className={cn(buttonVariants(), "hidden md:inline-flex")}
            >
              {voteNav.name}
            </SafeLink>
            <button
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                "md:hidden p-2"
              )}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="relative md:hidden mt-2"
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-lg rounded-xl border border-white/15" />
            <nav className="relative flex flex-col gap-2 p-4">
              {mainNav.map((item) => (
                <NavLink
                  key={item.id}
                  item={item}
                  viewType={VIEW_TYPE_MOBILE}
                />
              ))}
              <SafeLink
                href={voteNav.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  buttonVariants({ size: "sm" }),
                  "mt-2 w-full justify-center"
                )}
              >
                {voteNav.name}
              </SafeLink>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

Header.displayName = "Header";

export { Header };
