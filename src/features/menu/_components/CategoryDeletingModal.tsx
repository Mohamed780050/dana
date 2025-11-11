"use client";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useCategoryModalDeleting } from "@/hooks/useCategoryDeletingModal";
import { deleteCategory, deleteMenuItem } from "@/lib/menus";
import { ReactNode, useActionState } from "react";

export default function CategoryDeletingModal({
  children,
  CategoryId,
}: {
  children: ReactNode;
  CategoryId: string;
}) {
  const deleteCategoryWithId = deleteCategory.bind(null, CategoryId);
  const [state, action, isPending] = useActionState(deleteCategoryWithId, null);
  const { isOpen, onClose, onOpenChange } = useCategoryModalDeleting();
  return (
    <AlertDialog open={isOpen} onOpenChange={onOpenChange}>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This item will be deleted for every.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <form action={action}>
          <AlertDialogFooter>
            <Button
              type="button"
              variant="outline"
              disabled={isPending}
              onClick={onClose}
            >
              Cancel
            </Button>

            <Button type="submit" variant="destructive" disabled={isPending}>
              {isPending ? "Deleting" : "Delete"}
            </Button>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
}
