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
  customer_name: string;
  customer_phone: number;
  total_amount: number;
  status: "Pending" | "Processing" | "Completed" | "Canceled";
  payment_status: "Paid" | "unPaid";
  created_at: string;
}
