import { CreateOrganization } from "@clerk/nextjs";
import { HardHat } from "lucide-react";

export default function CreateAnOrg() {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-slate-200 bg-white p-12 text-center">
      <HardHat className="mx-auto mb-4 h-16 w-16 text-slate-300" />
      <p className="mb-2 text-slate-600">No Orgs found</p>
      <p className="text-sm text-slate-500">Please set up your Org first.</p>
      <CreateOrganization />
    </div>
  );
}
