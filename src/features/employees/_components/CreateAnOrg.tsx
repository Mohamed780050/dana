import { CreateOrganization } from "@clerk/nextjs";
import { HardHat } from "lucide-react";
import { useTranslations } from "next-intl";

export default function CreateAnOrg() {
  const t = useTranslations("Employees");
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-slate-200 bg-white p-12 text-center">
      <HardHat className="mx-auto mb-4 h-16 w-16 text-slate-300" />
      <p className="mb-2 text-slate-600">{t("NoOrgs")}</p>
      <p className="text-sm text-slate-500">{t("NoOrgsDes")}</p>
      <CreateOrganization />
    </div>
  );
}
