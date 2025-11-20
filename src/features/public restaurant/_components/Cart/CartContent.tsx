"use client";

import CartItems from "./CartItems";
import CartOrderSubmission from "./CartOrderSubmission";

export default function CartContent({ userId }: { userId: string }) {
  return (
    <div>
      <CartItems />
      <div className="p-6">
        <CartOrderSubmission userId={userId} />
      </div>
    </div>
  );
}
