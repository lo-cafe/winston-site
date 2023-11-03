import Container from "~/components/Container";
import Hero from "~/components/indexPage/Hero";
import Themes from "~/components/indexPage/Themes";

export default function Home() {
  return (
    <Container>
      <Hero />
      <Themes />
      <Hero />
    </Container>
  );
}
