import Image from "next/image";
import { useTranslations } from "next-intl";

interface PricingCardProps {
  plan_name: string;
  premium: boolean;
  price: string;
  img?: string;
  link: string;
  features: string[];
}

export default function PricingCard({
  plan_name,
  premium,
  price,
  img,
  link,
  features,
}: PricingCardProps) {
  const t = useTranslations("Plans");
  return (
    <div
      className={`h-[580px] lg:h-[700px] w-[250px] ${premium ? "dark" : ""}`}
    >
      <div className="relative flex flex-col h-full p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-900 shadow shadow-slate-950/5">
        {premium && (
          <div className="absolute top-0 left-0 ml-6 -mt-4">
            <div className="inline-flex items-center text-xs font-semibold py-1.5 px-3 bg-emerald-500 text-white rounded-full shadow-sm shadow-slate-950/5">
              {t("plan-best-option-text")}
            </div>
          </div>
        )}
        <div className="mb-5">
          <div className="relative flex flex-col items-center  h-[165px] mb-5">
            <Image src={img!} alt="plan-image" width={120} height={120} />
            <div className="absolute bottom-0 text-slate-900 dark:text-slate-200 font-semibold mb-1 uppercase mt-3">
              {plan_name}
            </div>
          </div>
          <div
            className={`border-t border-gray-${
              premium ? 50 : 200
            } border-solid my-2`}
          ></div>
          <div className="flex flex-col h-[270px] lg:h-[390px]">
            <div className="flex flex-col items-center">
              <div className="inline-flex items-baseline mb-2">
                <span className="text-slate-900 dark:text-slate-200 font-bold text-lg lg:text-4xl">
                  {price}
                </span>
                <span className="text-slate-500 font-medium text-xs lg:text-base">
                  /{t("plan-month-text")}
                </span>
              </div>
            </div>
            <div className="text-slate-900 dark:text-slate-200 font-medium mb-3 text-sm lg:text-base">
              {t("plan-feature-title")}:
            </div>
            <ul className="text-slate-600 dark:text-slate-400 space-y-3 grow text-xs lg:text-sm">
              {features.map((feature, index) => {
                return (
                  <li key={index} className="flex">
                    <svg
                      className="w-2 h-2 fill-indigo-500 mr-3 mt-1 shrink-0 lg:w-3 lg:h-3"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="6" cy="6" r="5" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <a
            className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 mt-10 text-xs lg:text-sm"
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            {t("plan-purchase-button-text")}
          </a>
        </div>
      </div>
    </div>
  );
}
