import RestaurantDetails from "./RestaurantDetails";
import RestaurantMenu from "./RestaurantMenu";

export default function Restaurant({
  restaurant,
}: {
  restaurant: {
    id: string;
    userId: string;
    phone: string;
    name: string;
    description: string;
    address: string;
    // currency: Currency;
    facebook: string | null;
    instagram: string | null;
    linkedIn: string | null;
    wa_phone: string;
  };
}) {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100">
      <RestaurantDetails
        name={restaurant.name}
        description={restaurant.description}
        address={restaurant.address}
        phone={restaurant.phone}
        wa_phone={restaurant.wa_phone}
        facebook={restaurant.facebook}
        instagram={restaurant.instagram}
        linkedIn={restaurant.linkedIn}
      />
      <RestaurantMenu userId={restaurant.userId} />
    </div>
  );
}
