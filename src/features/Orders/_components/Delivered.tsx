"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Delivered({ id }: { id: string }) {
  const [loading, setLoading] = useState(false);

  return (
    <Button
      className="cursor-pointer bg-emerald-500 hover:bg-emerald-600"
      onClick={async () => {
        try {
          setLoading(true);
          // await makeItPaid(id);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      }}
    >
      Delivered
    </Button>
  );
}
