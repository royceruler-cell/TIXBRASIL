"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const PRICE = 4.95;

export default function QuantitySlider() {
  const [qty, setQty] = useState(5);
  const router = useRouter();

  return (
    <div style={{ border: "1px solid #ddd", padding: 16, marginTop: 24 }}>
      <p><b>Quantidade de Tix:</b> {qty}</p>

      <input
        type="range"
        min={5}
        max={200}
        value={qty}
        onChange={(e) => setQty(Number(e.target.value))}
        style={{ width: "100%" }}
      />

      <p>Preço unitário: R$ 4,95</p>
      <p><b>Total:</b> R$ {(qty * PRICE).toFixed(2)}</b></p>

      <button
        onClick={() => router.push(`/checkout?qty=${qty}`)}
        style={{
          marginTop: 12,
          padding: "10px 16px",
          background: "#000",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        Comprar Tix
      </button>
    </div>
  );
}

