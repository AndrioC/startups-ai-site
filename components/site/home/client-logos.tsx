import Image from "next/image";

// import logoConecta from "@/assets/img/logos/conecta-logo.svg";
// import logoFi from "@/assets/img/logos/fi-logo.svg";
import logoIfia from "@/assets/img/logos/ifia-logo.svg";
import logoBricsHub from "@/assets/img/logos/logo-brics.svg";
import sriLogo from "@/assets/img/logos/sri-logo.avif";
// import logoIguassuAngels from "@/assets/img/logos/iguassu-angels-logo.svg";
// import logoIguassuValley from "@/assets/img/logos/iguassu-logo.svg";
// import logoImcti from "@/assets/img/logos/imcti-logo.svg";
// import logoInovativa from "@/assets/img/logos/inovativa-logo.svg";
// import logoMaxi from "@/assets/img/logos/maxi-logo.svg";
// import newEnglandInventsLogo from "@/assets/img/logos/new-england-invents-logo.png";
// import logoParImpacto from "@/assets/img/logos/parimpacto-logo.svg";

export default function ClientLogos() {
  const logos = [
    { _id: 2001, title: "Ifia", logo: logoIfia, url: "https://www.ifia.com/" },
    {
      _id: 2002,
      title: "Brics Hub",
      logo: logoBricsHub,
      url: "https://www.brics-ch.org.br/",
    },
    {
      _id: 2002,
      title: "SRI",
      logo: sriLogo,
      url: "https://www.srinortepioneiro.com.br/",
    },
  ];

  return (
    <div className="flex items-center justify-center mt-10 w-[900px]">
      <ul
        role="list"
        className="container grid sm:grid-cols-1 md:grid-cols-3 gap-y-3 gap-x-2 place-items-center"
      >
        {logos.map(({ title, logo, url, _id }) => (
          <li key={_id} className="w-40 lg:w-72 mx-auto mb-4 md:mb-6 lg:mb-8">
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="block p-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 bg-white/50 hover:bg-white/90"
            >
              <div className="relative w-full h-48 flex items-center justify-center">
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
