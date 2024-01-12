import { ReactNode } from "react";
import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  children: ReactNode;
}

export default function AboutInfoCard({ src, alt, children }: Props) {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg w-80 lg:w-96">
      <Image src={src} alt={alt} />
      {children}
    </div>
  );
}
