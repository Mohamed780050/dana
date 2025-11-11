import { create } from "zustand";

interface itemModalDeletingInterface {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onOpenChange: () => void;
}

export const useItemModalDeleting = create<itemModalDeletingInterface>(
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
