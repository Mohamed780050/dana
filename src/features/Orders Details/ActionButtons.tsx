"use client";
import { Button } from "@/components/ui/button";
import { makeItCompleted, makeItDelivered, makeItPaid } from "@/lib/orders";
import { Check, CheckCircle, Package } from "lucide-react";
import { useState } from "react";

export default function ActionButtons({
  payment_status,
  status,
  orderId,
  isDelivered,
  location,
}: {
  payment_status: string;
  status: string;
  orderId: string;
  location: string;
  isDelivered: boolean | null;
}) {
  const [loading, setLoading] = useState(false);

  return (
    <div className="mt-6 grid grid-cols-1 gap-3 border-t border-emerald-400/30 pt-6 sm:grid-cols-2">
      <Button
        onClick={async () => {
          try {
            setLoading(true);
            await makeItPaid(orderId);
          } catch (error) {
            console.log(error);
          } finally {
            setLoading(false);
          }
        }}
        disabled={payment_status === "Paid" || loading}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-white/20 px-4 py-3 font-semibold text-white transition-colors hover:bg-white/30 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <Check className="h-5 w-5" />
        {payment_status === "Paid" ? "Already Paid" : "Mark as Paid"}
      </Button>
      <Button
        onClick={async () => {
          try {
            setLoading(true);
            await makeItCompleted(orderId);
          } catch (error) {
            console.log(error);
          } finally {
            setLoading(false);
          }
        }}
        disabled={status === "Completed" || loading}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-white/20 px-4 py-3 font-semibold text-white transition-colors hover:bg-white/30 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <CheckCircle className="h-5 w-5" />
        {status === "Completed" ? "Already Completed" : "Mark as Completed"}
      </Button>
      <Button
        onClick={async () => {
          try {
            setLoading(true);
            await makeItDelivered(orderId);
          } catch (error) {
            console.log(error);
          } finally {
            setLoading(false);
          }
        }}
        disabled={isDelivered || loading}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-white/20 px-4 py-3 font-semibold text-white transition-colors hover:bg-white/30 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <Package className="h-5 w-5" />
        {isDelivered ? "Already Delivered" : "Mark as Delivered"}
      </Button>
    </div>
  );
}
