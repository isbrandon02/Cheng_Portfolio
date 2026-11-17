import Sidebar from "./Sidebar";

export default function POSLayout() {
  return (
    <main className="pos-shell">
      <Sidebar />
      <section className="center-column" aria-label="Portfolio canvas" />
      <section className="right-column" aria-label="Portfolio details" />
    </main>
  );
}
