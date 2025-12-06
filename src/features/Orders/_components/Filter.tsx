import { Plus, Filter as FilterIcon } from "lucide-react";
import CreateOrderModal from "./CreateOrderModal";
import FiltersItem from "./FiltersItem";
import { auth } from "@clerk/nextjs/server";
import { getTranslations } from "next-intl/server";

export default async function Filter() {
  const { orgRole } = await auth();
  // if (orgRole === "org:delivery" || orgRole === "org:cashier") return null;
  const t = await getTranslations("Orders.filters");

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FilterIcon className="h-5 w-5 text-slate-600" />
          <h2 className="text-lg font-semibold text-slate-900">{t("title")}</h2>
        </div>
        {orgRole !== "org:delivery" && (
          <CreateOrderModal>
            <button
              // onClick={() => setIsCreateModalOpen(true)}
              className="flex cursor-pointer items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 font-semibold text-white transition-colors hover:bg-emerald-700"
            >
              <Plus className="h-5 w-5" />
              {t("createButton")}
            </button>
          </CreateOrderModal>
        )}
      </div>
      {/* <FiltersItem/> */}
    </div>
  );
}
