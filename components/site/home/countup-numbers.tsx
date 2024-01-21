"use client";

import CountUp from "react-countup";
import Image from "next/image";

interface CountUpNumbersProps {
  title: string;
  img: string;
  value: number;
}

export default function CountUpNumbers({
  title,
  img,
  value,
}: CountUpNumbersProps) {
  return (
    <div className="flex flex-col items-center justify-between border-4 border-gray-100 w-36 h-40">
      <div className="flex items-center justify-center mt-3 h-[90px]">
        <Image
          src={img!}
          width={60}
          height={60}
          alt={`${title} - title`}
          style={{ width: "75px", height: "75px" }}
        />
      </div>
      <CountUp
        end={value!}
        delay={1}
        duration={10}
        className="text-gray-500 font-semibold text-2xl"
      />
      <span className="text-gray-500 font-semibold text-xl">{title}</span>
    </div>
  );
}
