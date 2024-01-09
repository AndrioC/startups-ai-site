import { SiLinkedin } from "react-icons/si";
import { TbMessage2 } from "react-icons/tb";
import Image from "next/image";

import userPlaceHolder from "@/assets/user-placeholder.jpeg";
import { Button } from "@/components/ui/button";

export default function CardExpert() {
  return (
    <div className="border-4 border-gray-200 p-4 w-[400px] rounded-[100px] h-[500px] flex flex-col justify-center">
      <div className="flex">
        <div className="flex flex-col items-center w-[170px]">
          <Image
            src={userPlaceHolder}
            alt="user-placeholder"
            width={90}
            height={90}
            className="rounded-full border-blue-500 border-4"
          />
          <h2 className="font-bold mt-2">Milton Rodrigues</h2>
        </div>
        <div className="flex flex-col h-[90px] justify-between">
          <div className="flex items-center">
            <TbMessage2 size={30} className="text-gray-500 mr-3" />
            <span>en - es - pt</span>
          </div>
          <SiLinkedin size={30} className="text-blue-500" />
        </div>
      </div>
      <div className="px-5 mt-3">
        <p className="text-xs font-medium text-gray-500">
          Mestre em Inovação e Empreendedorismo (Universidade do Porto).
          Especialização em Inovação (Stanford University) e Gestão (Fundação D.
          Cabral). Pós-graduado em Marketgin (FGV). Empreendedor, consultor,
          professor, ex-diretor de mark..
        </p>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-2 gap-4 px-5 mt-3">
        <div className="flex items-center justify-center border-2 border-gray-400 rounded-full p-2 w-[150px] h-[30px] text-xs text-gray-500">
          Inovação
        </div>
        <div className="flex items-center justify-center border-2 border-gray-400 rounded-full p-2 w-[150px] h-[30px] text-xs text-gray-500">
          Internacionalização
        </div>
        <div className="flex items-center justify-center border-2 border-gray-400 rounded-full p-2 w-[150px] h-[30px] text-xs text-gray-500">
          Marketing
        </div>
        <div className="flex items-center justify-center border-2 border-gray-400 rounded-full p-2 w-[150px] h-[30px] text-xs text-gray-500">
          Vendas B2B
        </div>
        <div className="flex items-center justify-center border-2 border-gray-400 rounded-full p-2 w-[150px] h-[30px] text-xs text-gray-500">
          Precificação
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <Button variant="blue">Saiba mais</Button>
      </div>
    </div>
  );
}
