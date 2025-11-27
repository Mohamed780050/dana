import { db } from "@/lib/db";
import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import RestaurantContent from "./RestaurantContent";
import Cart from "./Cart/Cart";
import { AllTabContent } from "./AllTabContent";
import { getRestaurantDetails } from "@/lib/restaurant";

export default async function RestaurantMenu({ userId }: { userId: string }) {
  const menus = await db.menu.findMany({ where: { userId } });
  //   const menuItems = await db.menuItem.findMany({where:{}})
  const details = await getRestaurantDetails();
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 py-12">
        <Cart userId={userId} />
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
          <Tabs defaultValue="all" className="w-full">
            <div className="overflow-x-auto border-b border-slate-200 bg-slate-50 p-4">
              <TabsList className="flex min-w-max gap-3">
                <TabsTrigger
                  value="all"
                  className="rounded-xl border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-700 transition-all hover:bg-slate-100 data-[state=active]:scale-105 data-[state=active]:bg-emerald-600 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-emerald-600/30"
                >
                  All
                </TabsTrigger>
                {menus.map((item) => (
                  <TabsTrigger
                    key={item.id}
                    value={item.name}
                    className="rounded-xl border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-700 transition-all hover:bg-slate-100 data-[state=active]:scale-105 data-[state=active]:bg-emerald-600 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-emerald-600/30"
                  >
                    {item.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            <div className="p-8">
              <AllTabContent
                currency={details?.currency || "USD"}
                value="all"
              />
              {menus.map((item) => (
                <RestaurantContent
                currency={details?.currency || "USD"}

                  value={item.name}
                  key={item.id}
                  id={item.id}
                />
              ))}
            </div>
          </Tabs>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
          {/* <div className="p-8">
          {filteredItems.length === 0 ? (
            <div className="py-16 text-center">
              <Utensils className="mx-auto mb-4 h-16 w-16 text-slate-300" />
              <p className="text-xl font-medium text-slate-600">
                No items available
              </p>
              <p className="mt-2 text-sm text-slate-500">
                Check back later for delicious options!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="group overflow-hidden rounded-xl border border-slate-200 bg-slate-50 transition-all duration-300 hover:border-emerald-300 hover:shadow-xl"
                >
                  {item.image_url && (
                    <div className="aspect-video overflow-hidden bg-slate-200">
                      <img
                        src={item.image_url}
                        alt={item.name}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  )}

                  <div className="space-y-3 p-5">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-xl leading-tight font-bold text-slate-900">
                        {item.name}
                      </h3>
                      <div className="rounded-lg bg-emerald-100 px-3 py-1 text-lg font-bold whitespace-nowrap text-emerald-700">
                        {restaurant.currency === "USD" && "$"}
                        {restaurant.currency === "EUR" && "€"}
                        {restaurant.currency === "GBP" && "£"}
                        {restaurant.currency === "JPY" && "¥"}
                        {!["USD", "EUR", "GBP", "JPY"].includes(
                          restaurant.currency,
                        ) && restaurant.currency + " "}
                        {Number(item.price).toFixed(2)}
                      </div>
                    </div>

                    {item.description && (
                      <p className="line-clamp-2 text-sm leading-relaxed text-slate-600">
                        {item.description}
                      </p>
                    )}

                    <div className="border-t border-slate-200 pt-2">
                      <span className="text-xs font-semibold tracking-wide text-emerald-600 uppercase">
                        {getCategoryName(item.category_id)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div> */}
        </div>
      </div>
    </>
  );
}

{
  /* <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
          <div className="border-b border-slate-200 bg-slate-50 p-4 overflow-x-auto">
            <div className="flex gap-3 min-w-max">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 scale-105'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                All Items
              </button>

              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                    selectedCategory === category.id
                      ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 scale-105'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          <div className="p-8">
            {filteredItems.length === 0 ? (
              <div className="text-center py-16">
                <Utensils className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <p className="text-xl text-slate-600 font-medium">No items available</p>
                <p className="text-sm text-slate-500 mt-2">Check back later for delicious options!</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-emerald-300 transition-all duration-300 group"
                  >
                    {item.image_url && (
                      <div className="aspect-video bg-slate-200 overflow-hidden">
                        <img
                          src={item.image_url}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    )}

                    <div className="p-5 space-y-3">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-xl font-bold text-slate-900 leading-tight">
                          {item.name}
                        </h3>
                        <div className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-lg font-bold text-lg whitespace-nowrap">
                          {restaurant.currency === 'USD' && '$'}
                          {restaurant.currency === 'EUR' && '€'}
                          {restaurant.currency === 'GBP' && '£'}
                          {restaurant.currency === 'JPY' && '¥'}
                          {!['USD', 'EUR', 'GBP', 'JPY'].includes(restaurant.currency) && restaurant.currency + ' '}
                          {Number(item.price).toFixed(2)}
                        </div>
                      </div>

                      {item.description && (
                        <p className="text-slate-600 text-sm leading-relaxed line-clamp-2">
                          {item.description}
                        </p>
                      )}

                      <div className="pt-2 border-t border-slate-200">
                        <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wide">
                          {getCategoryName(item.category_id)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div> */
}
