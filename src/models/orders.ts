import { NewOrdersInterface, OrderItemInterface } from "@/interfaces/interface";
import { db } from "@/lib/db";

// export default class Orders implements NewOrdersInterface {
//   constructor() {
//   }
// }
export default class Orders
  implements Omit<NewOrdersInterface, "id" | "created_at" | "updatedAt">
{
  constructor(
    public userId: string,
    public customer_name: string,
    public customer_phone: string,
    public total_amount: number,
    public status: "Pending" | "Processing" | "Completed" | "Cancelled",
    public payment_status: "Paid" | "unPaid",
    public tableNumber: number | null,
    public location: "inSite" | "Delivery",
    public address: string | null,
    public orgId: string,
    public ordersItems?: OrderItemInterface[],
  ) {
    this.userId = userId;
    this.customer_name = customer_name;
    this.customer_phone = customer_phone;
    this.total_amount = total_amount;
    this.status = status;
    this.payment_status = payment_status;
    this.tableNumber = tableNumber;
    this.location = location;
    this.address = address;
    this.orgId = orgId;
    this.ordersItems = ordersItems;
  }
  async save() {
    // creating order
    let cleanedItems: OrderItemInterface[] = [];
    if (this.ordersItems)
      cleanedItems = this.ordersItems.map((item) => ({
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        // no `id` here
      }));
    await db.orders.create({
      data: {
        userId: this.userId,
        customer_name: this.customer_name,
        customer_phone: this.customer_phone,
        payment_status: this.payment_status,
        status: this.status,
        total_amount: this.total_amount,
        orgId: this.orgId,
        tableNumber: this.tableNumber,
        location: this.location,
        address: this.address,
        orderItems: cleanedItems,
      },
    });
    // updating status
    await db.cardsStatus.update({
      where: { userId: this.userId },
      data: {
        totalOrders: { increment: 1 },
      },
    });

    await db.cardsStatus.update({
      where: { userId: this.userId },
      data: {
        salesVolume: {
          increment: this.total_amount,
        },
      },
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const updateData: any = {};
    if (this.status === "Completed") {
      updateData.completed = { increment: 1 };
    } else if (this.status === "Pending") {
      updateData.pending = { increment: 1 };
    } else if (this.status === "Processing") {
      updateData.processing = { increment: 1 };
    }
    await db.totalOrders.update({
      where: { userId: this.userId },
      data: updateData,
    });

    await db.salesAnalytics.update({
      where: { userId: this.userId },
      data: {
        today: { increment: this.total_amount },
        thisWeek: { increment: this.total_amount },
        thisMonth: { increment: this.total_amount },
      },
    });
  }
}
