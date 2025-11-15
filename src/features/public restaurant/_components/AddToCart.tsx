import { ShoppingCart } from "lucide-react";

export default function AddToCart() {
  return (
    <button
      //   onClick={() => addToCart(item)}
      className="group mt-4 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-emerald-600 py-2 font-semibold text-white transition-all hover:bg-emerald-700"
    >
      <ShoppingCart className="h-4 w-4 transition-transform group-hover:scale-110" />
      Add to Cart
    </button>
  );
}
