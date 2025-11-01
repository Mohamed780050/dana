import { statCardsData } from "@/data/static";
import StatCard from "./StatCard";

export default async function StatusCards() {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statCardsData.map((item, index) => (
        <StatCard
          key={index}
          title={item.title}
          icon={item.icon}
          value={index}
          trend={item.trend}
          trendUp={item.trendUp}
        />
      ))}
    </ul>
  );
}
