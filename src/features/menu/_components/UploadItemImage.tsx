"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  uploadToCloudinaryItemImage,
  uploadToCloudinaryLogoRestaurant,
} from "@/lib/cloudinary";

export default function UploadItemImage({
  setImgURL,
}: {
  setImgURL: (v: string) => void;
}) {
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
      const url = await uploadToCloudinaryItemImage(base64data);
      setImgURL(url);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <Button
        type="button"
        className="cursor-pointer bg-emerald-500 hover:bg-emerald-600"
        onClick={handleClick}
      >
        Upload your Logo
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
