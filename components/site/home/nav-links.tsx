"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

import { Link } from "@/navigation";

export default function NavLinks() {
  const t = useTranslations("Home");

  const getPathName = (): string => {
    const path = usePathname().split("/");

    if (path.length === 3) {
      return "/" + path[2];
    }

    return "/";
  };

  const [hoverIndex, setHoverIndex] = useState(0);
  const pathname = getPathName();

  const navData = [
    { _id: 101, title: "Home", href: "/" },
    { _id: 102, title: t("nav-title-plans"), href: "/plans" },
    { _id: 103, title: "Startups", href: "/startups" },
    { _id: 104, title: t("nav-title-experts"), href: "/experts" },
    { _id: 105, title: t("nav-title-about"), href: "/about" },
  ];
  return (
    <>
      {navData.map(({ _id, title, href }) => (
        <Link
          key={_id}
          href={href}
          className={`relative -mx-3 -my-2 px-3 rounded-lg py-2 text-base ${
            pathname === href ? "bg-gray-100" : "text-gray-700"
          } transition-colors`}
          onMouseEnter={() => setHoverIndex(_id)}
          onMouseLeave={() => setHoverIndex(0)}
        >
          <AnimatePresence>
            {hoverIndex === _id && (
              <motion.span
                className="absolute inset-0 rounded-lg bg-gray-100"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <span className="relative z-10">{title}</span>
        </Link>
      ))}
    </>
  );
}
