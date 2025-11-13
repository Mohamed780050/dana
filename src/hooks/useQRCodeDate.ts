import { create } from "zustand";

type QRCodeTypes = {
  fgColor: string;
  bgColor: string;
  size: number;
  level: "L" | "M" | "Q" | "H";
  menuURL: string;
};

type QRCodeStore = QRCodeTypes & {
  setFgColor: (fgColor: string) => void;
  setBgColor: (bgColor: string) => void;
  setSize: (size: number) => void;
  setLevel: (level: "L" | "M" | "Q" | "H") => void;
  setMenuURL: (menuURL: string) => void;
};

export const useQRCode = create<QRCodeStore>((set) => ({
  fgColor: "#000000",
  bgColor: "#FFFFFF",
  size: 250,
  level: "M",
  menuURL: "",

  // setters
  setFgColor: (fgColor) => set({ fgColor }),
  setBgColor: (bgColor) => set({ bgColor }),
  setSize: (size) => set({ size }),
  setLevel: (level) => set({ level }),
  setMenuURL: (menuURL) => set({ menuURL }),
}));
