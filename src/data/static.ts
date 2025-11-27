import { StatCardProps } from "@/interfaces/interface";
import {
  DollarSign,
  Eye,
  LayoutDashboard,
  Package,
  QrCode,
  ShoppingBag,
  Store,
  TableProperties,
  UtensilsCrossed,
  HardHat
} from "lucide-react";

export const navItems = [
  { id: "dashboard" as const, label: "Dashboard", icon: LayoutDashboard },
  { id: "orders" as const, label: "Orders", icon: ShoppingBag },
  { id: "menu" as const, label: "Menu", icon: UtensilsCrossed },
  // { id: "tables" as const, label: "Tables", icon: TableProperties },
  { id: "restaurant" as const, label: "Restaurant", icon: Store },
  { id: "employees" as const, label: "Employees", icon: HardHat },
  { id: "qrcode" as const, label: "QR Code", icon: QrCode },
];
export const statCardsData: Omit<StatCardProps, "value">[] = [
  {
    title: "Total Orders",
    icon: ShoppingBag,
    trend: "+12% from last month",
    trendUp: true,
  },
  {
    title: "Sales Volume",
    icon: DollarSign,
    trend: "+8% from last month",
    trendUp: true,
  },
  { title: "Menu Items", icon: Package },
  { title: "Views", icon: Eye, trend: "+3% from last month", trendUp: true },
];
