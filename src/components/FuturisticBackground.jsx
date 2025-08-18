export default function FuturisticBackground() {
  return (
    <div style={{
      position: "fixed",
      width: "100vw",
      height: "100vh",
      zIndex: -1,
      top: 0,
      left: 0,
      background: "linear-gradient(120deg, #202c47 0%, #00e0ff 100%)",
      animation: "gradientMove 15s ease infinite"
    }} />
  );
}
