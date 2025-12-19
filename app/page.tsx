import QuantitySlider from "@/components/QuantitySlider";

export default function Home() {
  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: 24 }}>
      <h1 style={{ fontSize: 32, fontWeight: "bold" }}>
        Compre Tix de Magic Online com segurança
      </h1>

      <p style={{ marginTop: 12 }}>
        Event Tickets entregues digitalmente em até 15 minutos.
      </p>

      <div style={{ marginTop: 32 }}>
        <QuantitySlider />
      </div>

      <p style={{ marginTop: 24, fontSize: 14, color: "#666" }}>
        ⚠️ A trade será aberta somente pelas contas{" "}
        <b>TIXBRASIL1</b> ou <b>TIXBRASIL2</b>. Não aceite trades de outras contas.
      </p>
    </main>
  );
}
