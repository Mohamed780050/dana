"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  uploadToCloudinaryItemImage,
} from "@/lib/cloudinary";

export default function UploadItemImage({
  setImgURL,
  setUploading,
  uploading,
}: {
  setImgURL: (v: string) => void;
  setUploading: (v: boolean) => void;
  uploading: boolean;
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
        const url = await uploadToCloudinaryItemImage(base64data);
        setImgURL(url);
      } catch (error) {
        console.log(error);
      } finally {
        setUploading(false);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <Button
        disabled={uploading}
        type="button"
        className="cursor-pointer bg-emerald-500 hover:bg-emerald-600"
        onClick={handleClick}
      >
        {uploading ? "Uploading" : "Upload your Logo"}
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
