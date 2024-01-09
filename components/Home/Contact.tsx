import Image from "next/image";
import { useTranslations } from "next-intl";

import contactImage from "@/assets/img/contact-image.svg";

import Button from "./Button";
import Container from "./Container";

export default function Contact() {
  const t = useTranslations("Home");
  return (
    <section id="Contact" className="py-20 sm:py-32 lg:pb-32 xl:pb-36">
      <Container className="-mt-20">
        <div className="w-full flex flex-col items-center gap-10">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold">
              {t("contact-us-title-first")}-
              <span style={{ color: "#2594EA" }}>
                {t("contact-us-title-second")}
              </span>
            </h2>
            <p className="text-gray-500 font-light">
              {t("contact-us-first-sub-title")}
            </p>
            <p className="text-gray-500 font-light">
              {t("contact-us-second-sub-title")}
            </p>
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-10 lg:flex-row">
            <div>
              <Image
                src={contactImage}
                alt="contact-image"
                className="w-72 lg:w-full"
              />
            </div>
            <div className="w-4/5 p-6 lg:w-2/5">
              <form>
                <div className="mb-4">
                  <input
                    className="w-full px-3 py-2 border rounded bg-white border-gray-300 focus:outline-none focus:border-blue-500"
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder={t("contact-us-name-placeholder")}
                    required
                  />
                </div>

                <div className="mb-4">
                  <input
                    className="w-full px-3 py-2 border rounded bg-white border-gray-300 focus:outline-none focus:border-blue-500"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="E-mail"
                    required
                  />
                </div>

                <div className="mb-4">
                  <textarea
                    className="w-full px-3 py-2 border rounded bg-white border-gray-300 h-40 resize-none focus:outline-none focus:border-blue-500"
                    id="message"
                    name="message"
                    placeholder={t("contact-us-message-placeholder")}
                    required
                  />
                </div>

                <Button
                  variant="solid"
                  color="blue"
                  className="w-full"
                  type="submit"
                >
                  {t("contact-us-button-text")}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
