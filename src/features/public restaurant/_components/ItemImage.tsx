import { ImageIcon } from "lucide-react";
import Image from "next/image";

export default function ItemImage({
  url,
  alt,
}: {
  url?: string | null;
  alt?: string;
}) {
  return (
    <>
      {url ? (
        <div className="relative block aspect-video overflow-hidden rounded-t-xl bg-slate-200">
          <Image
            src={url}
            alt={alt || "Item"}
            fill
            className=" object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      ) : (
        <div className="flex aspect-video items-center justify-center rounded-t-lg bg-slate-200">
          <ImageIcon className="h-8 w-8 text-slate-400" />
        </div>
      )}
    </>
  );
}
