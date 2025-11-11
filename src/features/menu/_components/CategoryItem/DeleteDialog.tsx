"use client";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useItemModalDeleting } from "@/hooks/useItemModal";
import { deleteMenuItem } from "@/lib/menus";
import { ReactNode, useActionState } from "react";

export default function DeleteDialog({
  children,
  itemId,
}: {
  children: ReactNode;
  itemId: string;
}) {
  const deleteMenuWithId = deleteMenuItem.bind(null, itemId);
  const [state, action, isPending] = useActionState(deleteMenuWithId, null);
  const { isOpen, onClose, onOpenChange } = useItemModalDeleting();
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
