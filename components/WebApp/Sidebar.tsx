"use client";
import { PropsWithChildren, useState } from "react";
import { BsPeople } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { GoHome } from "react-icons/go";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { IoBusinessOutline, IoWalletOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import globalLinkOpenLogo from "@/assets/img/logos/global-link-logo.svg";
import globalLinkCloseLogo from "@/assets/img/logos/global-link-logo-collapsed.svg";

import SidebarMenu from "./SidebarMenu";

export default function SideBar({ children }: PropsWithChildren) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const currentRoute = usePathname();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const logo = isSidebarOpen ? globalLinkOpenLogo : globalLinkCloseLogo;

  return (
    <aside>
      <div className="flex">
        <div
          className={`fixed ${
            isSidebarOpen ? "w-56" : "w-20"
          } h-screen bg-white border-r-[1px] flex flex-col justify-between transition-all ease-in-out duration-30`}
        >
          <div className="flex flex-col items-center space-y-4">
            <Link href="/">
              <div className="text-white p-3 mt-4 rounded-lg inline-block">
                <Image src={globalLinkOpenLogo} alt="sidebar-menu-logo" />
              </div>
            </Link>
            <span className="border-b-[1px] border-gray-200 w-full p-2"></span>
            <div className="flex flex-col items-center justify-center w-full">
              {menus.map((value) => (
                <SidebarMenu
                  key={value.id}
                  href={value.href}
                  icon={value.icon}
                  text={value.title}
                  currentRoute={currentRoute}
                  isSidebarOpen={isSidebarOpen}
                  size={20}
                  strokeWidth={value.strokeWidth}
                />
              ))}
            </div>
          </div>
          <div className="flex -p-4 items-center justify-center bg-gray-200 w-full h-10">
            <button onClick={toggleSidebar}>
              {isSidebarOpen ? (
                <IoIosArrowDropleft size={21} className="text-gray-400" />
              ) : (
                <IoIosArrowDropright size={21} className="text-gray-400" />
              )}
            </button>
          </div>
        </div>
        <main className={`w-full ${isSidebarOpen ? "ml-40" : "ml-20"}`}>
          {children}
        </main>
      </div>
    </aside>
  );
}

const menus = [
  {
    id: 1,
    title: "Home",
    href: "/",
    icon: <GoHome />,
    strokeWidth: 0.5,
  },
  {
    id: 2,
    title: "Startups",
    href: "/startups",
    icon: <RxDashboard />,
    strokeWidth: 0.5,
  },
  {
    id: 3,
    title: "Experts",
    href: "/experts",
    icon: <IoWalletOutline />,
    strokeWidth: 0.5,
  },
  {
    id: 4,
    title: "Investidores",
    href: "/investors",
    icon: <BsPeople />,
    strokeWidth: 0.5,
  },
  {
    id: 5,
    title: "Empresas",
    href: "/companies",
    icon: <IoBusinessOutline />,
    strokeWidth: 0.5,
  },
  {
    id: 6,
    title: "Configurações",
    href: "/settings",
    icon: <FiSettings />,
    strokeWidth: 2,
  },
];
