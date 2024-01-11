import { useLocale } from "next-intl";

import { expertsList } from "@/app/(site)/data";
import CardExpert from "@/components/Site/Experts/CardExpert";
import Container from "@/components/Site/Home/Container";

export default function ExpertPage() {
  const lang = useLocale();

  const data = expertsList.map((value) => ({
    ...value,
    description: lang === "en" ? value.description_en : value.description_pt,
    languages: lang === "en" ? value.languages_en : value.languages_pt,
    work_field:
      lang === "en"
        ? convertFieldToArray(value.work_field_en)
        : convertFieldToArray(value.work_field_pt),
    country: lang === "en" ? value.country_en : value.country_pt,
  }));

  return (
    <main>
      <Container>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 place-items-center mb-10">
          {data.map((value) => (
            <CardExpert
              key={value.id}
              name={value.name}
              last_name={value.last_name}
              linkedin={value.linkedin}
              description={value.description}
              languages={value.languages}
              work_field={value.work_field}
              country={value.country}
              photo={value.photo}
              flag={value.flag}
            />
          ))}
        </div>
      </Container>
    </main>
  );
}

const convertFieldToArray = (field: string) => {
  return field.split(", ").map((value) => value.trim());
};
