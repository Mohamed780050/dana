import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RestaurantDetails from "./RestaurantDetails";
import { Store, Network } from "lucide-react";
import { Suspense } from "react";
import RestaurantDetailsSkeleton from "../skeletons/RestaurantDetailsSkeleton";
import RestaurantSocial from "./RestaurantSocial";
import { useTranslations } from "next-intl";
export default function RestaurantTabs() {
  const t = useTranslations("RestaurantSettings");
  return (
    <div className="flex w-full flex-col gap-6">
      <Tabs defaultValue="restaurant_details" className="w-full">
        <TabsList>
          <TabsTrigger value="restaurant_details">
            <Store className="h-5 w-5" />
            {t("RestaurantDetails")}
          </TabsTrigger>
          <TabsTrigger value="restaurant_social_media">
            <Network className="h-5 w-5" />
            {t("RestaurantSocialMedia")}
          </TabsTrigger>
        </TabsList>
        <TabsContent value="restaurant_details">
          <Suspense fallback={<RestaurantDetailsSkeleton />}>
            <RestaurantDetails />
          </Suspense>
        </TabsContent>
        <TabsContent value="restaurant_social_media">
          <RestaurantSocial />
        </TabsContent>
      </Tabs>
    </div>
  );
}
