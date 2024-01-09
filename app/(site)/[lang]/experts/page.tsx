import CardExpert from "@/components/Site/Experts/CardExpert";
import Container from "@/components/Site/Home/Container";

export default function ExpertPage() {
  return (
    <main>
      <Container>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 place-items-center mb-10">
          <CardExpert />
          <CardExpert />
          <CardExpert />
          <CardExpert />
        </div>
      </Container>
    </main>
  );
}
