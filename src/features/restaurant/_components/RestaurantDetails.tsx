import { getRestaurantDetails } from "@/lib/restaurant";
import RestaurantForm from "./RestaurantForm";

export default async function RestaurantDetails() {
  const details = await getRestaurantDetails();
  return (
    <div className="mt-2 rounded-2xl bg-white p-8">
      <RestaurantForm
        name={details?.name ? details.name : ""}
        phone={details?.phone ? details.phone : ""}
        description={details?.description ? details.description : ""}
        currency={details?.currency ? details.currency : "USD"}
        address={details?.address ? details.address : ""}
        wa_phone={details?.wa_phone ? details.wa_phone : ""}
      />
    </div>
  );
}
