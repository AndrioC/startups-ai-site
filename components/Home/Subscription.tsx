import Image from "next/image";

import subsImage01 from "@/assets/img/subs-img01.svg";
import subsImage02 from "@/assets/img/subs-img02.svg";
import subsImage03 from "@/assets/img/subs-img03.svg";

import Button from "./Button";
import Container from "./Container";

export default function Subscription() {
  return (
    <section id="Subscription" className="py-20 sm:py-32 lg:pb-32 xl:pb-36">
      <Container className="-mt-20">
        <div className="w-full flex flex-col items-center">
          <h2
            className="text-3xl md:text-5xl lg:text-6xl font-bold"
            style={{ color: "#2594EA" }}
          >
            INSCRIÇÃO
          </h2>
          <div className="flex flex-col items-center">
            <p className="mt-6 w-96 md:w-3/6 text-lg md:text-2xl lg:text-2xl text-gray-500 gap-7 font-light">
              Startups se inscrevem e passam por um processo de análise pela
              Coordenação do Programa quando à diversos pontos de elegibilidade
              para inclusão na "Jornada SGL" tais como, encontrarem-se no
              estágio de operação ou tração, com um produto físico ou digital já
              sendo comercializado e com tração recorrente entre outros citados
              anteriormente.
            </p>
            <p className="mt-6 w-96 md:w-3/6 text-lg md:text-2xl lg:text-2xl text-gray-500 gap-7 font-light">
              As Startups qualificadas passarão a integrar o plano "Free" que
              lhes darão o direito de exibirem os seus dados na plataforma e
              receberem um "Certificado de Membro Júnior" e daí continuarão a
              sua jornada.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-10 gap-10">
          <Image
            src={subsImage01}
            alt="subs-image-01"
            className="w-64 lg:w-96"
          />

          <div className="flex flex-col justify-center items-center gap-10 lg:flex-row">
            <div className="flex flex-col justify-center items-center">
              <Image
                src={subsImage02}
                alt="subs-image-02"
                className="w-64 lg:w-72"
              />
              <Button variant="solid" color="blue" className="mt-10">
                Inscrição para Startups
              </Button>
            </div>

            <div className="flex flex-col justify-center items-center">
              <Image
                src={subsImage03}
                alt="subs-image-03"
                className="w-72 lg:w-72"
              />
              <Button variant="solid" color="blue" className="mt-10">
                Inscrição para Experts
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
