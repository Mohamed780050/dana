"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CategoryItemState } from "@/interfaces/interface";
import { ReactNode, useActionState, useState } from "react";
import { addCategoryItem } from "../actions/menuaction";
import UploadItemImage from "./UploadItemImage";
import { useTranslations } from "next-intl";

export default function CategoryModalCreation({
  children,
  Category_id,
}: {
  children: ReactNode;
  Category_id: string;
}) {
  const initialState: CategoryItemState = { message: null, errors: {} };
  const addCategoryWithId = addCategoryItem.bind(null, Category_id);
  const [state, action, isPending] = useActionState(
    addCategoryWithId,
    initialState,
  );
  const [imgURL, setImgURL] = useState("");
  const [uploading, setUploading] = useState(false);
  const [imageName, setImageName] = useState("");
  const [isError, setIsError] = useState(false);
  const t = useTranslations("Menu");
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form action={action}>
          <DialogHeader></DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name">{t("Name")}</Label>
              <Input disabled={isPending || uploading} id="name" name="name" />
              {state.errors?.category_name &&
                state.errors.category_name.map((text, index) => (
                  <p key={index} className="mt-2 text-sm text-red-500">
                    {text}
                  </p>
                ))}
            </div>
            <div className="grid gap-3">
              <Label htmlFor="price">{t("Price")}</Label>
              <Input
                disabled={isPending || uploading}
                type="number"
                id="price"
                name="price"
              />
              {state.errors?.price &&
                state.errors.price.map((text, index) => (
                  <p
                    key={`price-${index}`}
                    className="mt-2 text-sm text-red-500"
                  >
                    {text}
                  </p>
                ))}
            </div>
            <div className="grid gap-3">
              <Label htmlFor="description">{t("Description")}</Label>
              <Textarea
                disabled={isPending || uploading}
                id="description"
                name="description"
              />
              {state.errors?.description &&
                state.errors.description.map((text, index) => (
                  <p
                    key={`description-${index}`}
                    className="mt-2 text-sm text-red-500"
                  >
                    {text}
                  </p>
                ))}
            </div>
            <div className="grid gap-3">
              <Label htmlFor="image">{t("Image")}</Label>
              <div className="flex items-center justify-between gap-3">
                <UploadItemImage
                  uploading={uploading}
                  setUploading={setUploading}
                  setImgURL={setImgURL}
                  setImageName={setImageName}
                  isPending={isPending}
                  setIsError={setIsError}
                />
                {imageName}
                {isError && <p className="text-red-500">{t("TooBig")}</p>}
                <Input
                  className="hidden"
                  disabled={isPending}
                  value={imgURL}
                  id="image"
                  name="image"
                />
              </div>
              {state.errors?.image &&
                state.errors.image.map((text, index) => (
                  <p
                    key={`image-${index}`}
                    className="mt-2 text-sm text-red-500"
                  >
                    {text}
                  </p>
                ))}
            </div>
          </div>
          <DialogFooter className="mt-4">
            <DialogClose asChild>
              <Button disabled={isPending || uploading} variant="outline">
                {t("Cancel")}
              </Button>
            </DialogClose>
            <Button
              type="submit"
              className="bg-emerald-500 hover:bg-emerald-600"
              disabled={isPending || uploading}
            >
              {isPending ? t("Creating") : t("Create")}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
