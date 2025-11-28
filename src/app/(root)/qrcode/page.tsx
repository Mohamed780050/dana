import PageTitle from "@/components/PageTitle";
import FindingQRCode from "@/features/qrcode/_components/FindingQRCode";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export const dynamic = "force-dynamic";
export default async function page() {
  const { orgRole } = await auth();
  if (orgRole === "org:delivery" || orgRole === "org:cashier") return redirect("/orders");

  return (
    <div className="space-y-6">
      <PageTitle
        title="QR Code Generator"
        description="Generate QR codes for your restaurant menu."
      />
      <Suspense fallback={<div>loading</div>}>
        <FindingQRCode />
      </Suspense>
    </div>
  );
}
