import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import LogoImage from "@/assets/img/logos/global-link-logo.svg";

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
};

export default function Logo({ className, ...props }: ContainerProps) {
  return (
    <Link href="/">
      <h2
        className={clsx(
          "text-3xl font-bold text-gray-600 hover:text-gray-900 duration-300",
          className
        )}
        {...props}
      >
        <Image src={LogoImage} alt="global-link-logo" width={186} height={58} />
      </h2>
    </Link>
  );
}
