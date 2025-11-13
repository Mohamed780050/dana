import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RestaurantDetails from "./RestaurantDetails";
import RestaurantWorkingTimes from "./RestaurantWorkingTimes";
import { Clock, Store } from "lucide-react";
import { Suspense } from "react";
export default function RestaurantTabs() {
  return (
    <div className="flex w-full flex-col gap-6">
      <Tabs defaultValue="restaurant_details" className="w-full">
        <TabsList>
          <TabsTrigger value="restaurant_details">
            <Store className="h-5 w-5" />
            Restaurant Details
          </TabsTrigger>
          <TabsTrigger value="restaurant_working">
            <Clock className="h-5 w-5" />
            Restaurant Working
          </TabsTrigger>
        </TabsList>
        <TabsContent value="restaurant_details">
          <Suspense fallback={<div>loading</div>}>
            <RestaurantDetails />
          </Suspense>
        </TabsContent>
        <TabsContent value="restaurant_working">
          <RestaurantWorkingTimes />
        </TabsContent>
      </Tabs>
    </div>
  );
}
