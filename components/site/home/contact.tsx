"use client";

import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { toast } from "sonner";

import { sendEmailFromContact } from "@/actions/send-email-from-contact";
import contactImage from "@/assets/img/contact-image.svg";

import Button from "./button";
import Container from "./container";

export default function Contact() {
  const t = useTranslations("Home");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    setLoading(true);
    e.preventDefault();

    try {
      await sendEmailFromContact(name, email, message);
      toast(t("contact-email-sent-message"));
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Erro ao enviar e-mail:", error);
      toast(t("contact-email-error-message"));
    } finally {
      setLoading(false);
    }
  };

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
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <input
                    className="w-full px-3 py-2 border rounded bg-white border-gray-300 focus:outline-none focus:border-blue-500"
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail"
                    required
                  />
                </div>

                <div className="mb-4">
                  <textarea
                    className="w-full px-3 py-2 border rounded bg-white border-gray-300 h-40 resize-none focus:outline-none focus:border-blue-500"
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t("contact-us-message-placeholder")}
                    required
                  />
                </div>

                <Button
                  variant="solid"
                  color="blue"
                  className="w-full"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <FaSpinner className="animate-spin mr-2" />{" "}
                      {t("contact-email-sending-text")}
                    </div>
                  ) : (
                    t("contact-us-button-text")
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
