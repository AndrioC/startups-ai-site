import Container from "@/components/Site/Home/Container";
import CardStartup from "@/components/Site/Startups/CardStartup";

export default function StartupsPage() {
  return (
    <main>
      <Container>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 place-items-center">
          <CardStartup />
          <CardStartup />
          <CardStartup />
          <CardStartup />
        </div>
      </Container>
    </main>
  );
}
