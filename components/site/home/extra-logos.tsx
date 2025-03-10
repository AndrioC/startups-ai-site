import Image from "next/image";

import logoAbipir from "@/assets/img/logos/abipir-logo.svg";
import logoAws from "@/assets/img/logos/aws-logo.png";
import cogTech from "@/assets/img/logos/cogtech.svg";
import logoIfiaBharat from "@/assets/img/logos/ifiabharat-logo.svg";
// import logoConecta from "@/assets/img/logos/conecta-logo.svg";
// import logoFi from "@/assets/img/logos/fi-logo.svg";
// import logoIfia from "@/assets/img/logos/ifia-logo.svg";
// import logoIguassuAngels from "@/assets/img/logos/iguassu-angels-logo.svg";
// import logoIguassuValley from "@/assets/img/logos/iguassu-logo.svg";
// import logoImcti from "@/assets/img/logos/imcti-logo.svg";
// import logoInovativa from "@/assets/img/logos/inovativa-logo.svg";
// import logoMaxi from "@/assets/img/logos/maxi-logo.svg";
// import newEnglandInventsLogo from "@/assets/img/logos/new-england-invents-logo.png";
// import logoParImpacto from "@/assets/img/logos/parimpacto-logo.svg";

export default function ExtraLogos() {
  const logos = [
    // { _id: 2001, title: "Ifia", logo: logoIfia, url: "https://www.ifia.com/" },
    {
      _id: 2002,
      title: "Abipir",
      logo: logoAbipir,
      url: "http://abipir.org.br/",
    },
    {
      _id: 2003,
      title: "Ifia Bharat",
      logo: logoIfiaBharat,
      url: "https://ifiabharat.com/",
    },
    // {
    //   _id: 2004,
    //   title: "Maxi",
    //   logo: logoMaxi,
    //   url: "https://www.maxi.science/",
    // },
    // {
    //   _id: 2005,
    //   title: "Conecta",
    //   logo: logoConecta,
    //   url: "https://www.startups-brazil.com/",
    // },
    // {
    //   _id: 2006,
    //   title: "IMCTI",
    //   logo: logoImcti,
    //   url: "https://www.maxi.institute/",
    // },
    // {
    //   _id: 2007,
    //   title: "Inovativa",
    //   logo: logoInovativa,
    //   url: "https://www.inovativa.online/",
    // },
    // { _id: 2008, title: "Fi", logo: logoFi, url: "https://fi.co/" },
    // {
    //   _id: 2009,
    //   title: "ParImpacto",
    //   logo: logoParImpacto,
    //   url: "https://www.parimpacto.com/",
    // },
    // {
    //   _id: 2010,
    //   title: "Iguassu Valley",
    //   logo: logoIguassuValley,
    //   url: "https://www.iguassuvalley.com.br/",
    // },
    // {
    //   _id: 2011,
    //   title: "Iguassu Angels",
    //   logo: logoIguassuAngels,
    //   url: "https://www.iguassuangels.com.br/",
    // },
    {
      _id: 2012,
      title: "CogTech",
      logo: cogTech,
      url: "https://cogtech.com.br/",
    },
    // {
    //   _id: 2013,
    //   title: "NewEnglandInvents",
    //   logo: newEnglandInventsLogo,
    //   url: "https://neinvents.org/",
    // },
    {
      _id: 2014,
      title: "AWS",
      logo: logoAws,
      url: "https://aws.amazon.com/",
    },
  ];

  return (
    <div className="flex items-center justify-center mt-10 w-[900px]">
      <ul
        role="list"
        className="container grid sm:grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-2 place-items-center"
      >
        {logos.map(({ title, logo, url, _id }) => (
          <li
            key={_id || title}
            className="w-40 lg:w-72 mx-auto mb-4 md:mb-6 lg:mb-8"
          >
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="block p-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 bg-white/50 hover:bg-white/90"
            >
              <div className="relative w-full h-24 flex items-center justify-center">
                <Image
                  src={logo}
                  alt={title}
                  width={300}
                  height={300}
                  className="object-contain max-h-full transition-opacity duration-300 filter hover:brightness-110"
                />
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
