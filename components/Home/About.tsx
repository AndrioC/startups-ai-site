import abipirLogo from "@/assets/img/logos/abipir-logo-100.svg";
import globalLinkLogo from "@/assets/img/logos/global-link-logo-100.svg";
import ifiaLogo from "@/assets/img/logos/ifia-logo-100.svg";

import AboutInfoCard from "./AboutInfoCard";
import Container from "./Container";

export default function About() {
  return (
    <section id="About" className="py-20 sm:py-32 lg:pb-32 xl:pb-36">
      <Container className="-mt-20">
        <div className="w-full flex flex-col items-center gap-10">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold">
            SOBRE <span style={{ color: "#2594EA" }}>NÓS</span>
          </h2>
          <div className="flex flex-col gap-3 lg:flex-row">
            <AboutInfoCard src={globalLinkLogo} alt="startups-global-link-logo">
              <p className="mt-6 w-72 text-lg text-gray-500 font-light">
                Somos um ecossistema de aceleração de Startups que oferece
                conexões globais para Startups de todo o mundo. Nosso objetivo é
                ajudar Startups a melhorar suas taxas de sucesso e
                sobrevivência, fornecendo acesso a mentoria especializada e
                conexões valiosas.
              </p>
              <p className="mt-6 w-72 text-lg text-gray-500 font-light">
                Sede em São Paulo - Brasil
              </p>
              <p className="mt-6 w-72 text-lg text-gray-500 font-light">
                Conectado aos principais ecossistemas de startups, de negócios e
                indústria.
              </p>
            </AboutInfoCard>
            <AboutInfoCard src={ifiaLogo} alt="startups-global-link-logo">
              <p className="mt-6 w-72 text-lg text-gray-500 font-light">
                Federação Internacional das Associações dos Inventores.
              </p>
              <ul className="list-disc ml-10">
                <li className="mt-6 w-72 text-lg text-gray-500 font-light">
                  Fundada em 1968
                </li>
                <li className="mt-6 w-72 text-lg text-gray-500 font-light">
                  Representação em 84 países
                </li>
                <li className="mt-6 w-72 text-lg text-gray-500 font-light">
                  Assento de observado na WIPO (World Intellectual Property
                  Organization), ONU e Unicef.
                </li>
              </ul>
              <p className="mt-6 w-72 text-lg text-gray-500 font-light">
                Sede em Genebra - Suiça. Oferece chancela para 27 eventos de
                inovação em diversos países.
              </p>
              <p className="mt-6 w-72 text-lg text-gray-500 font-light">
                Possui um espaço institucional na sede da Google em São
                Francisco - USA.
              </p>
            </AboutInfoCard>
            <AboutInfoCard src={abipirLogo} alt="startups-global-link-logo">
              <ul className="list-disc ml-10">
                <li className="mt-6 w-72 text-lg text-gray-500 font-light">
                  Associação Brasil Internacional dos Inventores, Cientistas e
                  Empreendedores Inovadores
                </li>
                <li className="mt-6 w-72 text-lg text-gray-500 font-light">
                  Fundada em 2010
                </li>
                <li className="mt-6 w-72 text-lg text-gray-500 font-light">
                  Representante da IFIA na América Latina
                </li>
                <li className="mt-6 w-72 text-lg text-gray-500 font-light">
                  Organizou 13 edições do InnovaCities
                </li>
                <li className="mt-6 w-72 text-lg text-gray-500 font-light">
                  Já representou instituições de PDI, Acadêmicas, Pesquisadores,
                  Inventores e Startups em mais de 60 eventos internacionais nos
                  5 continentes
                </li>
              </ul>
              <p className="mt-6 w-72 text-lg text-gray-500 font-light">
                Sede no Espírito Santo - Brasil
              </p>
            </AboutInfoCard>
          </div>
        </div>
      </Container>
    </section>
  );
}
