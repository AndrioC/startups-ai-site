import Image from "next/image";

import brazilFlag from "@/assets/startups/brazil-flag.svg";
import image01 from "@/assets/startups/image01.png";
import sglImage from "@/assets/startups/sgl.svg";

export default function CardStartup() {
  return (
    <div
      className="flex flex-col shadow-lg w-[390px] md:w-[450px] h-[200px] mb-10"
      style={{ position: "relative" }}
    >
      <div className="flex justify-between p-5 items-center">
        <div className="flex flex-col">
          <Image width={200} height={200} src={image01} alt="startup-image" />
          <div className="flex mt-5">
            <span className="mr-5 font-semibold">123 Seguro</span>
            <p className="text-gray-400">2019</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <Image width={60} height={60} src={sglImage} alt="sgl-image" />
          <span className="text-xs text-gray-400 font-medium">
            Última atualização
          </span>
          <p className="text-xs text-gray-400 font-medium">03/01/2024</p>
        </div>
      </div>
      <div
        id="footer"
        className="flex items-center justify-between bg-gray-200 w-full p-2"
        style={{ position: "absolute", bottom: "0" }}
      >
        <div>
          <span>INSURANCE • B2B</span>
        </div>
        <Image width={30} height={30} src={brazilFlag} alt="brazil-image" />
      </div>
    </div>
  );
}
