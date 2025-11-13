import NotFound from "./NotFound";
import QRCodeComponent from "./QRCodeComponent";

export default async function FindingQRCode() {
  return (
    <div className="space-y-6">{true ? <QRCodeComponent /> : <NotFound />}</div>
  );
}
