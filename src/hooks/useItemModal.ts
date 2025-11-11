import { create } from "zustand";

interface itemModalInterface {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useItemModal = create<itemModalInterface>((set) => ({
  isOpen: false,
  onOpen: () => {
    set({ isOpen: true });
  },
  onClose: () => {
    set({ isOpen: false });
  },
}));
