import PageTitle from "@/components/PageTitle";
import FindingQRCode from "@/features/qrcode/_components/FindingQRCode";

export default function page() {
  return (
    <div className="space-y-6">
      <PageTitle
        title="QR Code Generator"
        description="Generate QR codes for your restaurant menu."
      />
      <FindingQRCode />
    </div>
  );
}
