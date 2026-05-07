import { Hero } from "@/components/Hero";
import { DayAtScholarsRow } from "@/components/DayAtScholarsRow";
import { TheResidence } from "@/components/TheResidence";
import { HomepageLocations } from "@/components/HomepageLocations";
import { TheStandard } from "@/components/TheStandard";
import { GetInTouch } from "@/components/GetInTouch";
import { getAllLocations } from "@/lib/content";

export default function HomePage() {
  const locations = getAllLocations();

  return (
    <>
      <Hero />
      <DayAtScholarsRow />
      <TheResidence />
      <HomepageLocations locations={locations} />
      <TheStandard />
      <GetInTouch />
    </>
  );
}
