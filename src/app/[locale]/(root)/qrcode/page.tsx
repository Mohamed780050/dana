import PageTitle from "@/components/PageTitle";
import FindingQRCode from "@/features/qrcode/_components/FindingQRCode";
import { auth } from "@clerk/nextjs/server";
import { getTranslations } from "next-intl/server";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export const dynamic = "force-dynamic";
export default async function page() {
  const { orgRole } = await auth();
  if (orgRole === undefined) return redirect("/employees");

  if (orgRole === "org:delivery" || orgRole === "org:cashier")
    return redirect("/orders");
  const t = await getTranslations("QRCode");

  return (
    <div className="space-y-6">
      <PageTitle title={t("title")} description={t("description")} />
      <Suspense fallback={<div>loading</div>}>
        <FindingQRCode />
      </Suspense>
    </div>
  );
}
