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
import { deleteCategory } from "@/lib/menus";
import { ReactNode, useActionState, useState } from "react";

export default function CategoryDeletingModal({
  children,
  CategoryId,
}: {
  children: ReactNode;
  CategoryId: string;
}) {
  const deleteCategoryWithId = deleteCategory.bind(null, CategoryId);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [state, action, isPending] = useActionState(deleteCategoryWithId, null);
  const [open,setIsOpen]= useState(false);
  return (
    <AlertDialog open={open} onOpenChange={setIsOpen} defaultOpen={false}>
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
              onClick={() => setIsOpen(false)}
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
