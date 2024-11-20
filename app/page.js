import Link from "next/link";
import InfoBoxes from "@/components/InfoBoxes";
import HomeProperties from "@/components/HomeProperties";

import GetCountries from "@/config/supabase";

const Homepage = () => {
  return (
    <>
      <InfoBoxes />
      <HomeProperties />
      <GetCountries />
    </>
  );
};

export default Homepage;
