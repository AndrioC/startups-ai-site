"use client";
import { ReactNode } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { TbMenu2 } from "react-icons/tb";
import { Popover } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { LanguageToggle } from "@/components/ui/language-toggler";
import { Link } from "@/navigation";

import Button from "./Button";
import Container from "./Container";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

type MobileNavLinksProps = {
  children: ReactNode;
  href: string;
};

export default function Header() {
  const t = useTranslations("Home");

  const navData = [
    { _id: 101, title: "Home", href: "/" },
    { _id: 102, title: t("nav-title-plans"), href: "/plans" },
    { _id: 103, title: "Startups", href: "/startups" },
    { _id: 104, title: t("nav-title-experts"), href: "/experts" },
    { _id: 105, title: "Workshops", href: "/workshops" },
  ];
  return (
    <header className={"w-full sticky z-50 bg-white"}>
      <nav>
        <Container className="relative z-50 flex justify-between py-8">
          {/* Logo */}
          <div className="relative z-10 flex items-center gap-16">
            <Logo />
          </div>
          {/* NavLinks */}
          <div className="hidden lg:flex lg:gap-10 items-center font-semibold">
            <NavLinks />
          </div>
          {/* Buttons */}
          <div className="flex items-center gap-6">
            <LanguageToggle />
            <Button href="#" variant="outline" className="hidden lg:block">
              Log In
            </Button>
            <Button
              href="#"
              variant="solid"
              color="blue"
              className="hidden lg:block"
            >
              Sign Up
            </Button>
            {/* Mobile NavLinks */}
            <Popover className="lg:hidden">
              {({ open }) => (
                <>
                  <Popover.Button
                    className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 [&:not(:focus-visible)]:focus:outline-none outline-none"
                    aria-label="Toggle site navigation"
                  >
                    {({ open }) =>
                      open ? (
                        <IoIosArrowUp className="text-2xl" />
                      ) : (
                        <TbMenu2 className="text-2xl" />
                      )
                    }
                  </Popover.Button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <>
                        <Popover.Overlay
                          static
                          as={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur"
                        />
                        <Popover.Panel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, y: -32 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{
                            opacity: 0,
                            y: -32,
                            transition: { duration: 0.2 },
                          }}
                          className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-6 pb-6 pt-32 shadow-2xl shadow-gray-900/20"
                        >
                          <div className="space-y-4">
                            {navData.map(({ _id, title, href }) => (
                              <MobileNavLinks href={href} key={_id}>
                                {title}
                              </MobileNavLinks>
                            ))}
                          </div>
                          <div className="mt-8 flex flex-col gap-4">
                            <Button href="#" variant="outline">
                              Log In
                            </Button>
                            <Button href="#" variant="solid" color="blue">
                              Sign Up
                            </Button>
                          </div>
                        </Popover.Panel>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>
          </div>
        </Container>
      </nav>
      <div className={"w-full h-1 bg-transparent shadow"} />
    </header>
  );
}

const MobileNavLinks: React.FC<MobileNavLinksProps> = ({
  children,
  ...props
}) => {
  return (
    <Popover.Button
      as={Link}
      className="block text-base leading-7 tracking-tight text-gray-700"
      {...props}
    >
      {children}
    </Popover.Button>
  );
};
