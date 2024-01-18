import Image from "next/image";

import logoAbipir from "@/assets/img/logos/abipir-logo.svg";
import cogTech from "@/assets/img/logos/cogtech.svg";
import logoConecta from "@/assets/img/logos/conecta-logo.svg";
import logoFi from "@/assets/img/logos/fi-logo.svg";
import logoIfia from "@/assets/img/logos/ifia-logo.svg";
import logoIfiaBharat from "@/assets/img/logos/ifiabharat-logo.svg";
import logoIguassuAngels from "@/assets/img/logos/iguassu-angels-logo.svg";
import logoIguassuValley from "@/assets/img/logos/iguassu-logo.svg";
import logoImcti from "@/assets/img/logos/imcti-logo.svg";
import logoMaxi from "@/assets/img/logos/maxi-logo.svg";
import logoParImpacto from "@/assets/img/logos/parimpacto-logo.svg";
import logoXrathus from "@/assets/img/logos/xrathus-logo.svg";

export default function ExtraLogos() {
  const logos = [
    { _id: 2001, title: "Ifia", logo: logoIfia },
    { _id: 2002, title: "Abipir", logo: logoAbipir },
    { _id: 2003, title: "Ifia Bharat", logo: logoIfiaBharat },
    { _id: 2004, title: "Maxi", logo: logoMaxi },
    { _id: 2005, title: "Conecta", logo: logoConecta },
    { _id: 2006, title: "IMCTI", logo: logoImcti },
    { _id: 2007, title: "Xrathus", logo: logoXrathus },
    { _id: 2008, title: "Fi", logo: logoFi },
    { _id: 2009, title: "ParImpacto", logo: logoParImpacto },
    { _id: 2010, title: "Iguassu Valley", logo: logoIguassuValley },
    { _id: 2011, title: "Iguassu Angels", logo: logoIguassuAngels },
    { _id: 2012, title: "CogTech", logo: cogTech },
  ];

  return (
    <div className="flex items-center justify-center mt-10">
      <ul
        role="list"
        className="container grid sm:grid-cols-1 md:grid-cols-3 gap-y-3 place-items-center"
      >
        {logos.map(({ title, logo }) => (
          <li key={title} className="w-32 lg:w-44 mx-auto mb-4 md:mb-6 lg:mb-8">
            <Image src={logo} alt={title} width={250} height={250} />
          </li>
        ))}
      </ul>
    </div>
  );
}
