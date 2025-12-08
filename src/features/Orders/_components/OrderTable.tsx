import { OrderInterface } from "@/interfaces/interface";
import OrderTableComponent from "./OrderTableComponent";
import { getAllOrders } from "@/lib/orders";

export default async function OrderTable() {
  const filteredOrders: OrderInterface[] = await getAllOrders();
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
      <div className="overflow-x-auto">
        <OrderTableComponent filteredOrders={filteredOrders} />
      </div>
    </div>
  );
}
export const revalidate = 10;
