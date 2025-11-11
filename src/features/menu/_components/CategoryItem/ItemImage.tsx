import { ImageIcon } from "lucide-react";
import Image from "next/image";

export default function ItemImage({
  url,
  name,
}: {
  url: string | null;
  name: string;
}) {
  return (
    <>
      {url ? (
        <Image
          width={50}
          height={50}
          src={url}
          alt={name}
          className="rounded-lg object-cover"
        />
      ) : (
        <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-slate-200">
          <ImageIcon className="h-8 w-8 text-slate-400" />
        </div>
      )}
    </>
  );
}
