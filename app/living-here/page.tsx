import type { Metadata } from "next";
import { LivingHereHero } from "@/components/LivingHereHero";
import { WhoLivesHere } from "@/components/WhoLivesHere";
import { InsideTheResidence } from "@/components/InsideTheResidence";
import { QuietByDesign } from "@/components/QuietByDesign";
import { TheWalkDeep } from "@/components/TheWalkDeep";
import { HealthyByStandard } from "@/components/HealthyByStandard";
import { DayExtended } from "@/components/DayExtended";
import { WhatsIncluded } from "@/components/WhatsIncluded";
import { HowResidencyWorks } from "@/components/HowResidencyWorks";
import { LivingHereCTA } from "@/components/LivingHereCTA";

export const metadata: Metadata = {
  title: "Living Here \u2014 Scholar\u2019s Row",
  description:
    "What it means to live at Scholar\u2019s Row \u2014 the residence, the quiet, the walk, and the daily rhythm of a place designed for serious academic work.",
};

export default function LivingHerePage() {
  return (
    <>
      <LivingHereHero />
      <WhoLivesHere />
      <InsideTheResidence />
      <QuietByDesign />
      <TheWalkDeep />
      <HealthyByStandard />
      <DayExtended />
      <WhatsIncluded />
      <HowResidencyWorks />
      <LivingHereCTA />
    </>
  );
}
