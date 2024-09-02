import { SectionWelcome } from "@/presentation/components/home/sections/SectionWelcome";
import { SectionExplore } from "@/presentation/components/home/sections/SectionExplore";
import { SectionProducts } from "@/presentation/components/home/sections/SectionProducts";

export const Home = () => {
  return (
    <>
      <SectionWelcome/>
      <SectionExplore/>
      <SectionProducts/>
    </>
  );
};
