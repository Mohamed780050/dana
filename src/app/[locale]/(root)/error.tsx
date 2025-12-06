// app/dashboard/error.tsx
"use client";

import React, { useEffect } from "react";

interface Props {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorComponent({ error, reset }: Props) {
  useEffect(() => {
    // Log to an error-tracking service
    console.error("Route segment error:", error);
  }, [error]);

  return (
    <div
      style={{
        padding: "2rem",
        textAlign: "center",
        color: "#b00020",
      }}
    >
      <h2>Oops — something went wrong.</h2>
      <p style={{ wordBreak: "break-all" }}>
        {error.message || "Unknown error"}
      </p>
      <button
        onClick={() => reset()}
        style={{
          marginTop: "1rem",
          padding: "0.5rem 1rem",
          backgroundColor: "#6200ee",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Try again
      </button>
    </div>
  );
}
