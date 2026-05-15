import Link from "next/link";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <>
      <NavBar />
      <main
        id="main-content"
        className="min-h-screen bg-[#0A0A0B] flex items-center justify-center relative overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-red-grid"
          style={{ backgroundSize: "36px 36px" }}
          aria-hidden="true"
        />
        <div
          className="absolute -top-20 -right-32 w-[400px] h-[400px] bg-[#6B1A2A] rounded-[16px]"
          style={{ transform: "rotate(15deg)", opacity: 0.2 }}
          aria-hidden="true"
        />
        <div className="relative z-10 text-center px-6">
          <p className="font-mono font-black text-[#C8102E] text-[80px] leading-none mb-4">
            404
          </p>
          <h1 className="font-body font-black text-white text-[28px] leading-tight mb-4">
            Page not found.
          </h1>
          <p className="font-body text-white/40 text-[13px] mb-8 max-w-sm mx-auto leading-relaxed">
            This page doesn&apos;t exist — but your portfolio activation strategy
            should. Let&apos;s get you back on track.
          </p>
          <Link href="/" className="btn btn-primary">
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
