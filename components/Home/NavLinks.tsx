"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function NavLinks() {
  const t = useTranslations("Home");
  const [hoverIndex, setHoverIndex] = useState(0);

  const navData = [
    { _id: 101, title: "Home", href: "#home" },
    { _id: 102, title: t("nav-title-journey"), href: "#journey" },
    { _id: 103, title: t("nav-title-plans"), href: "#account" },
    { _id: 104, title: t("nav-title-team"), href: "#team" },
    { _id: 105, title: "Workshops", href: "#workshops" },
  ];
  return (
    <>
      {navData.map(({ _id, title, href }) => (
        <Link
          key={_id}
          href={href}
          className="relative -mx-3 -my-2 px-3 rounded-lg py-2 text-base text-gray-700 transition-colors"
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
