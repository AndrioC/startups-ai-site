import Image from "next/image";
import { useLocale } from "next-intl";

import { teamList } from "@/app/(site)/data";
import aboutUsTopImage from "@/assets/img/about-us-top-image.svg";
import TeamCard from "@/components/site/about/team-card";

import Section from "../../../../components/site/home/section";

export default function PlansPage() {
  const lang = useLocale();

  const data = teamList.map((value) => ({
    ...value,
    position: lang === "en" ? value.position_en : value.position_pt,
  }));
  return (
    <main>
      <div className="flex flex-col items-center mt-10">
        <div className="flex flex-col w-[400px] lg:w-[1200px]">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl lg:text-4xl uppercase text-gray-700">
              SOBRE NÓS
            </h1>
            <span className="mt-5 text-gray-500 text-center lg:text-center text-sm lg:text-lg w-[300px] lg:w-full">
              Bem vindo(a) à Startups Global Link: Plataforma de Negócios para
              Startups com IA.
            </span>
          </div>
          <div className="flex items-center justify-between mt-10 flex-col lg:flex-row">
            <p className="w-full lg:w-[600px] text-xs lg:text-base leading-8 lg:leading-8 text-gray-500">
              Somos uma Startup Brasileira criada por empreendedores com
              competências, experiências e conhecimentos complementares 100%
              centrados nos nossos clientes e focados em cumprir o nosso
              propósito e realizar entregas com qualidade, agilidade,
              transparência e segurança.{" "}
            </p>
            <Image
              src={aboutUsTopImage}
              alt="about-us-top-image"
              className="w-[230px] h-[230px] lg:w-[500px] lg:h-[500px]"
            />
          </div>
          <div className="flex flex-col items-center justify-between mt-10 gap-14">
            <Section>
              <div>
                <h3 className="text-gray-700 font-semibold text-xs lg:text-base">
                  Nossa Missão
                </h3>
                <p className="text-gray-500 leading-8 lg:leading-8 text-xs lg:text-base">
                  Nosso propósito é ajudar as Startups a aumentarem suas taxas
                  de sobrevivência e sucesso ampliando sua networking nacional e
                  internacional gerando novos negócios e parcerias de valor e
                  aumentando a sua lucratividade.
                </p>
              </div>
            </Section>
            <Section>
              <div>
                <h3 className="text-gray-700 font-semibold text-xs lg:text-base">
                  Como operacionalizamos:
                </h3>
                <p className="text-gray-500 leading-8 lg:leading-8 text-xs lg:text-base">
                  A nossa plataforma conta com recursos avançados de
                  inteligência artificial que permite que nós trabalhemos com a
                  inteligência de dados e, por meio do business matchmaking
                  (conexões sinérgicas de negócios) realizado pelo nosso
                  exclusivo e poderoso Software associado à networking
                  internacional, possamos oferecer à sua Startup diversas
                  soluções para promover o crescimento sustentável e a
                  escalabilidade.
                </p>
              </div>
            </Section>
            <Section>
              <div className="mb-10">
                <h3 className="text-gray-700 font-semibold text-xs lg:text-base">
                  O que nos diferencia dos players do mercado de Startups:
                </h3>
                <div className="flex flex-col gap-10 text-xs lg:text-base">
                  <p className="text-gray-500 leading-8 lg:leading-8">
                    Não se trata somente a tecnologia de ponta de inteligência
                    artificial que nos diferencia mas principalmente a nossa
                    networking internacional visto que somos a Startup a deter
                    os direitos de exclusividade sobre o Programa de aceleração
                    e conexões internacionais da IFIA-ABIPIR, fato que nos
                    credencia como quem terá mais facilidade em
                    internacionalizar o seu negócio ou conectar sua Startup com
                    relevantes parceiros Brasileiros.
                  </p>
                  <p className="text-gray-500 leading-8 lg:leading-8 text-xs lg:text-base">
                    A IFIA (International Federation of Inventor's Association)
                    é a maior instituição do mundo localizada em Genebra na
                    Suíça e encontra-se representada em mais de 70 países
                    (www.ifia.com).
                  </p>
                  <p className="text-gray-500 leading-8 lg:leading-8 text-xs lg:text-base">
                    Outra diferença diz respeito ao fato de sermos a única
                    Startup a utilizar nossa plataforma para executar um
                    programa de conexão para Startups em forma de fluxo contínuo
                    e não no formato de ciclos como nos programas de aceleração,
                    ou seja, estaremos trabalhando arduamente para buscar as
                    melhores soluções para a sua Startup alcançar os objetivos
                    24 horas por dia, 7 dias por semana e 365 dias por ano. Não
                    somos concorrentes dos programas de aceleração mas um
                    estágio posterior a estes.
                  </p>
                  <p className="text-gray-500 leading-8 lg:leading-8 text-xs lg:text-base">
                    Nos posicionamos no mercado não como um concorrente aos
                    excelentes programas de aceleração como aqueles oferecidos
                    pelos nossos parceiros institucionais Hub Inovativa ou
                    Founders Institute, mas como uma etapa posterior a ser
                    seguidas pelas Startups graduadas.
                  </p>
                </div>
              </div>
            </Section>
          </div>
        </div>
        <Section>
          <div className="flex flex-col items-center gap-10 mb-10 w-[400px] lg:w-full">
            <h1 className="text-4xl uppercase text-gray-700">Nosso time</h1>
            <div className="container grid grid-cols-2 lg:grid-cols-3 lg:place-items-center lg:gap-y-8 gap-x-20 lg:gap-x-14">
              {data.map((value) => (
                <TeamCard
                  key={value.id}
                  name={value.name}
                  linkedin={value.linkedin}
                  position={value.position}
                  photo={value.photo}
                />
              ))}
            </div>
          </div>
        </Section>
      </div>
    </main>
  );
}
