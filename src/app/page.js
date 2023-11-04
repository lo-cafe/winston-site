import Hero from "~/components/indexPage/Hero";
import Themes from "~/components/indexPage/Themes";
import MicroInteractions from "~/components/indexPage/MicroInteractions";
import Stats from "~/components/indexPage/Stats";
import LoCafe from "~/components/indexPage/LoCafe";

export default function Home() {
  return (
    <>
      <Hero />
      <MicroInteractions />
      <Themes />
      <Stats />
      <LoCafe />
    </>
  );
}
