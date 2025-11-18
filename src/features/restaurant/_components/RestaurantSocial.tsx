import { getRestaurantDetails } from "@/lib/restaurant";
import RestaurantWorkingTimes from "./RestaurantWorkingTimes";

export default async function RestaurantSocial() {
  const details = await getRestaurantDetails();
  return (
    <RestaurantWorkingTimes
      facebook={details?.facebook || ""}
      instagram={details?.instagram || ""}
      linkedIn={details?.linkedIn || ""}
    />
  );
}
