"use client";

import CartItems from "./CartItems";
import CartOrderSubmission from "./CartOrderSubmission";

export default function CartContent() {
  return (
    <div>
      <CartItems />
      <div className="p-6">
        <CartOrderSubmission />
      </div>
    </div>
  );
}
