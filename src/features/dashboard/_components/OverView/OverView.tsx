import OrderOverview from "./OrderOverview";
import SalesOverview from "./SalesOverview";

export default function OverView() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <OrderOverview />
      <SalesOverview />
    </div>
  );
}
