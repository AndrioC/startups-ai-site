import Image from "next/image";

import portfImage01 from "@/assets/img/portf-img01.svg";
import portfImage02 from "@/assets/img/portf-img02.svg";
import portfImage03 from "@/assets/img/portf-img03.svg";
import portfImage04 from "@/assets/img/portf-img04.svg";

import Container from "./Container";
import ExtraLogos from "./ExtraLogos";

export default function Portfolio() {
  return (
    <section id="Portfolio" className="py-20 sm:py-32 lg:pb-32 xl:pb-36">
      <Container className="-mt-20">
        <div className="w-full flex flex-col items-center">
          <h2
            className="text-3xl md:text-5xl lg:text-6xl font-bold"
            style={{ color: "#2594EA" }}
          >
            PORTFOLIO
          </h2>
          <div className="flex flex-col items-center">
            <p className="mt-6 w-96 md:w-3/6 text-lg md:text-2xl lg:text-2xl text-gray-500 gap-7 font-light">
              O Programa de Aceleração Startups Global Link é uma oportunidade
              única para startups de todo o mundo se conectarem com outras
              startups, investidores e clientes, colaborarem e alcançarem o
              sucesso juntas.
            </p>
            <p className="mt-6 w-96 md:w-3/6 text-lg md:text-2xl lg:text-2xl text-gray-500 gap-7 font-light">
              Entre para a nossa Comunidade e mude o seu destino e o mundo por
              meio da inovação das startups.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center mt-10 gap-5">
          <Image
            src={portfImage01}
            alt="port-image-01"
            className="hidden lg:block"
          />

          <div className="flex flex-col">
            <Image
              src={portfImage02}
              alt="port-image-02"
              className="hidden lg:block"
            />

            <Image
              src={portfImage03}
              alt="port-image-03"
              className="hidden lg:block"
            />
          </div>

          <Image
            src={portfImage04}
            alt="port-image-04"
            className="w-96 lg:w-auto"
          />
        </div>
      </Container>
      <ExtraLogos />
    </section>
  );
}
