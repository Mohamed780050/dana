import { create } from "zustand";

interface OrderInterface {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface OrdersState {
  orders: OrderInterface[];
  totalPrice: number; // ← derived state
  addOrder: (order: Omit<OrderInterface, "quantity">) => void;
  removeOrder: (id: string) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
}

export const useOrdersStore = create<OrdersState>((set, get) => ({
  orders: [],
  totalPrice: 0,

  addOrder: (order) => {
    set((state) => {
      const existing = state.orders.find((o) => o.id === order.id);

      let newOrders: OrderInterface[];
      if (existing) {
        newOrders = state.orders.map((o) =>
          o.id === order.id ? { ...o, quantity: o.quantity + 1 } : o,
        );
      } else {
        newOrders = [...state.orders, { ...order, quantity: 1 }];
      }

      const newTotal = newOrders.reduce(
        (sum, o) => sum + o.price * o.quantity,
        0,
      );

      return {
        orders: newOrders,
        totalPrice: newTotal,
      };
    });
  },

  removeOrder: (id) => {
    set((state) => {
      const newOrders = state.orders.filter((o) => o.id !== id);
      const newTotal = newOrders.reduce(
        (sum, o) => sum + o.price * o.quantity,
        0,
      );
      return {
        orders: newOrders,
        totalPrice: newTotal,
      };
    });
  },

  increaseQuantity: (id) => {
    set((state) => {
      const newOrders = state.orders.map((o) =>
        o.id === id ? { ...o, quantity: o.quantity + 1 } : o,
      );
      const newTotal = newOrders.reduce(
        (sum, o) => sum + o.price * o.quantity,
        0,
      );
      return { orders: newOrders, totalPrice: newTotal };
    });
  },

  decreaseQuantity: (id) => {
    set((state) => {
      const newOrders = state.orders.map((o) => {
        if (o.id === id) {
          const newQty = o.quantity - 1;
          return { ...o, quantity: newQty >= 1 ? newQty : 1 };
        }
        return o;
      });
      const newTotal = newOrders.reduce(
        (sum, o) => sum + o.price * o.quantity,
        0,
      );
      return { orders: newOrders, totalPrice: newTotal };
    });
  },
}));
