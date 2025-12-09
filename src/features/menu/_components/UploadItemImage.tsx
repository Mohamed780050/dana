"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { uploadToCloudinaryItemImage } from "@/lib/cloudinary";
import { useTranslations } from "next-intl";

export default function UploadItemImage({
  setImgURL,
  setUploading,
  setImageName,
  setIsError,
  uploading,
  isPending,
}: {
  setImgURL: (v: string) => void;
  setImageName: (v: string) => void;
  setUploading: (v: boolean) => void;
  setIsError: (v: boolean) => void;
  uploading: boolean;
  isPending: boolean;
}) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    // Trigger the hidden file input when button is clicked
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUploading(true);
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = async () => {
      try {
        const base64data = reader.result as string;
        const image = await uploadToCloudinaryItemImage(base64data);
        setImgURL(image.url);
        setImageName(image.name);
        setIsError(false);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setUploading(false);
      }
    };
    reader.readAsDataURL(file);
  };

  const t = useTranslations("Menu");
  return (
    <div>
      <Button
        disabled={uploading || isPending}
        type="button"
        className="cursor-pointer bg-emerald-500 hover:bg-emerald-600"
        onClick={handleClick}
      >
        {uploading ? t("Uploading") : t("UploadYourLogo")}
      </Button>

      {/* Hidden file input */}
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
    </div>
  );
}
