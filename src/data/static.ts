import {
  LayoutDashboard,
  QrCode,
  ShoppingBag,
  Store,
  TableProperties,
  UtensilsCrossed,
} from "lucide-react";

export const navItems = [
  { id: "dashboard" as const, label: "Dashboard", icon: LayoutDashboard },
  { id: "orders" as const, label: "Orders", icon: ShoppingBag },
  { id: "menu" as const, label: "Menu", icon: UtensilsCrossed },
  { id: "tables" as const, label: "Tables", icon: TableProperties },
  { id: "restaurant" as const, label: "Restaurant", icon: Store },
  { id: "qrcode" as const, label: "QR Code", icon: QrCode },
];
