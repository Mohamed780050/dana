import PageTitle from "@/components/PageTitle";
import { Plus } from "lucide-react";

export const dynamic = "force-dynamic";
export default function page() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <PageTitle
          title="Tables"
          description="Manage your restaurant tables and seating."
        />
        <button
          // onClick={() => setIsModalOpen(true)}
          className="flex cursor-pointer items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-emerald-700"
        >
          <Plus className="h-5 w-5" />
          Create Table
        </button>
      </div>
    </div>
  );
}
