import { LucideIcon } from "lucide-react";

export interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: string;
  trendUp?: boolean;
}
export interface OrderItemInterface {
  id?: string;
  name: string;
  price: number;
  quantity: number;
}
//   items          orderItems[]
//   orgId          String        @unique
export interface NewOrdersInterface {
  id: string;
  userId: string;
  customer_name: string;
  customer_phone: string;
  total_amount: number;
  status: "Pending" | "Processing" | "Completed" | "Cancelled";
  payment_status: "Paid" | "unPaid";
  tableNumber: number | null;
  ordersItems?: OrderItemInterface[];
  location: "inSite" | "Delivery";
  address: string | null;
  orgId: string;
  created_at: Date | string;
  updatedAt: Date;
}
export interface OrderInterface {
  id: string;
  userId: string;
  customer_name: string;
  customer_phone: string;
  total_amount: number;
  status: "Pending" | "Processing" | "Completed" | "Cancelled";
  payment_status: "Paid" | "unPaid";
  tableNumber: number | null;
  location: string | null;
  created_at: Date | string;
  updatedAt: Date;
}

export interface OrderState {
  errors?: {
    id?: string[];
    userId?: string[];
    customer_name?: string[];
    customer_phone?: string[];
    total_amount?: string[];
    status?: string[];
    payment_status?: string[];
    tableNumber?: string[];
    address?: string[];
  };
  message?: string | null;
}

export interface MenuCategoryState {
  errors?: {
    category_name?: string[];
  };
  message?: string | null;
}
export interface CategoryItemState {
  errors?: {
    category_name?: string[];
    price?: string[];
    description?: string[];
    image?: string[];
  };
  message?: string | null;
}

export interface DetailsState {
  errors?: {
    name?: string[];
    phone?: string[];
    description?: string[];
    address?: string[];
    currency?: string[];
    wa_phone?: string[];
  };
  message?: string | null;
}

export interface SocialState {
  errors?: {
    facebook?: string[];
    instagram?: string[];
    linkedIn?: string[];
  };
  message?: string | null;
}

export enum Currency {
  USD = "USD",
  EUR = "EUR",
  EGP = "EGP",
  // …add whatever currencies you support
}

export interface CartState {
  errors?: {
    orders?: string[];
    customer_name?: string[];
    customer_phone?: string[];
    total_amount?: string[];
    status?: string[];
    payment_status?: string[];
    phone?: string[];
    tableNumber?: string[];
    address?: string[];
  };
  message?: string | null;
  success: boolean | null;
}

export interface employees {
  id: string;
  name: string;
  email: string;
  role: string;
  createdAt: string;
}
export interface UserState {
  errors?: {
    email?: string[];
    password?: string[];
    firstName?: string[];
    lastName?: string[];
    role?: string[];
  };
  message?: string | null;
}
