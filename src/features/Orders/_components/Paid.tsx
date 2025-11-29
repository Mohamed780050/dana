"use client";
import { Button } from "@/components/ui/button";
import { makeItPaid } from "@/lib/orders";
import { useState } from "react";

export default function Paid({ id }: { id: string }) {
  const [loading, setLoading] = useState(false);
  return (
    <Button
      disabled={loading}
      className="cursor-pointer bg-emerald-500 hover:bg-emerald-600"
      onClick={async () => {
        try {
          setLoading(true);
          await makeItPaid(id);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      }}
    >
      Paid
    </Button>
  );
}
