"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { uploadToCloudinaryLogoRestaurant } from "@/lib/cloudinary";
import { useTranslations } from "next-intl";

export default function UploadYourLogo() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    // Trigger the hidden file input when button is clicked
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64data = reader.result as string;
      await uploadToCloudinaryLogoRestaurant(base64data);
    };
    reader.readAsDataURL(file);
  };
  const t = useTranslations("RestaurantSettings");
  return (
    <div>
      <Button
        type="button"
        className="cursor-pointer bg-emerald-500 hover:bg-emerald-600"
        onClick={handleClick}
      >
        {t("UploadYourLogo")}
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
