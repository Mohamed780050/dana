import { getRestaurantDetails } from "@/lib/restaurant";
import NotFound from "./NotFound";
import QRCodeComponent from "./QRCodeComponent";

export default async function FindingQRCode() {
  const findQRCode = await getRestaurantDetails();
  return (
    <div className="space-y-6">
      {findQRCode?.id ? (
        <QRCodeComponent restaurantId={findQRCode.id} />
      ) : (
        <NotFound />
      )}
    </div>
  );
}
