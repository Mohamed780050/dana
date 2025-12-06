import { statCardsData } from "@/data/static";
import StatCard from "./StatCard";
import { getCardsStatus } from "@/lib/dashboard";
import { getTranslations } from "next-intl/server";

export default async function StatusCards() {
  const data = await getCardsStatus();
  const t = await getTranslations("Dashboard.Cards");
  return (
    <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {statCardsData.map((item, index) => {
        return (
          <StatCard
            key={index}
            title={t(item.title)}
            icon={item.icon}
            value={data[index]}
          />
        );
      })}
    </ul>
  );
}
