import RestaurantDetails from "./RestaurantDetails";

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
    wa_phone: string;
  };
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <RestaurantDetails
        name={restaurant.name}
        description={restaurant.description}
        address={restaurant.address}
        phone={restaurant.phone}
        wa_phone={restaurant.wa_phone}
      />
    </div>
  );
}
