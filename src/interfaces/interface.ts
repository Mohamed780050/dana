import { LucideIcon } from "lucide-react";

export interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: string;
  trendUp?: boolean;
}

export interface OrderInterface {
  id: string;
  userId: string;
  customer_name: string;
  customer_phone: string;
  total_amount: number;
  created_at: Date | string;
  updatedAt: Date;
  status: "Pending" | "Processing" | "Completed" | "Cancelled";
  payment_status: "Paid" | "unPaid";
}
