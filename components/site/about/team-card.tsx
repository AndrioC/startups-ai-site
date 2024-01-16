import { SiLinkedin } from "react-icons/si";
import Image from "next/image";

interface TeamCardProps {
  name: string;
  position: string;
  linkedin: string;
  photo: string;
}

export default function TeamCard({
  name,
  position,
  linkedin,
  photo,
}: TeamCardProps) {
  return (
    <div className="flex items-center space-x-2 lg:space-x-4 w-[170px] lg:w-[300px] h-[150px] lg:h-[90px]">
      <div className="relative">
        <Image
          src={photo}
          alt={`${name}-photo`}
          className="rounded-full border-4 border-gray-500"
          width={90}
          height={90}
        />
        <a href={linkedin} target="_blank">
          <SiLinkedin
            size={30}
            alt="LinkedIn"
            className="absolute top-2/3 left-1/5 transform -translate-x-2/3 -translate-y-1/4 text-blue-500"
          />
        </a>
      </div>
      <div className="flex flex-col h-[60px] mt-5">
        <p className="text-blue-500 text-xs lg:text-sm font-semibold">{name}</p>
        <p className="text-gray-500 w-[90px] lg:w-[200px] text-xs lg:text-sm font-normal">
          {position}
        </p>
      </div>
    </div>
  );
}
