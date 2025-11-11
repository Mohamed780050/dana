import { create } from "zustand";

interface CategoryModalDeletingInterface {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onOpenChange: () => void;
}

export const useCategoryModalDeleting = create<CategoryModalDeletingInterface>(
  (set) => ({
    isOpen: false,
    onOpen: () => {
      set({ isOpen: true });
    },
    onClose: () => {
      set({ isOpen: false });
    },
    onOpenChange: () => {
      set((state) => ({ isOpen: !state.isOpen }));
    },
  }),
);
