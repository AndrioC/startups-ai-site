import Image from "next/image";

import colaborationIcon from "@/assets/img/colaboration-icon.svg";
import globalConnectionsIcon from "@/assets/img/global-connections-icon.svg";
import globalInnovationIcon from "@/assets/img/global-innovation-icon.svg";
import mentorshipIcon from "@/assets/img/mentorship-icon.svg";
import winWinIcon from "@/assets/img/win-win-icon.svg";

export default function WhyChooseUsList() {
  return (
    <div className="mt-8 lg:mt-10 flex flex-col items-center lg:items-start">
      <ul className="md:flex md:flex-col lg:grid lg:grid-cols-2 lg:gap-20">
        <li className="flex flex-col items-center justify-center mb-10 lg:flex-row lg:mb-0">
          <Image src={globalConnectionsIcon} alt="global-connections-icon" />
          <div className="flex flex-col items-center px-10 lg:items-start lg:ml-3 lg:px-0">
            <span className="text-base text-gray-500 font-semibold">
              Conexões globais
            </span>
            <p className="w-40 font-light text-center text-sm lg:text-left lg:w-52">
              Criamos conexões mundiais para startups.
            </p>
          </div>
        </li>
        <li className="flex flex-col items-center justify-center mb-10 lg:flex-row lg:mb-0">
          <Image src={colaborationIcon} alt="global-connections-icon" />
          <div className="flex flex-col items-center px-10 lg:items-start lg:ml-3 lg:px-0">
            <span className="text-base text-gray-500 font-semibold">
              Colaboração
            </span>
            <p className="w-40 font-light text-center text-sm lg:text-left lg:w-52">
              Nós o conectamos com potenciais parceiros.
            </p>
          </div>
        </li>
        <li className="flex flex-col items-center justify-center mb-10 lg:flex-row lg:mb-0">
          <Image src={globalInnovationIcon} alt="global-connections-icon" />
          <div className="flex flex-col items-center px-10 lg:items-start lg:ml-3 lg:px-0">
            <span className="text-base text-gray-500 font-semibold">
              Global Innovation Scouting
            </span>
            <p className="w-40 font-light text-center text-sm lg:text-left lg:w-52">
              Com apenas alguns cliques a sua startup já está escrita.
            </p>
          </div>
        </li>
        <li className="flex flex-col items-center justify-center mb-10 lg:flex-row lg:mb-0">
          <Image src={mentorshipIcon} alt="global-connections-icon" />
          <div className="flex flex-col items-center px-10 lg:items-start lg:ml-3 lg:px-0">
            <span className="text-base text-gray-500 font-semibold">
              Mentoria especializada
            </span>
            <p className="w-40 font-light text-center text-sm lg:text-left lg:w-52">
              Mentores profissionais que podem ajudar a ter sucesso.
            </p>
          </div>
        </li>
        <li className="flex flex-col items-center justify-center lg:flex-row lg:mb-0">
          <Image src={winWinIcon} alt="global-connections-icon" />
          <div className="flex flex-col items-center px-10 lg:items-start lg:ml-3 lg:px-0">
            <span className="text-base text-gray-500 font-semibold">
              Win-Win
            </span>
            <p className="w-40 font-light text-center text-sm lg:text-left lg:w-52">
              Todos os participantes ganham.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}
