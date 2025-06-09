import { Head } from "./head";

import { Navbar } from "@/components/navbar";
import FooterComp from "@/components/footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-3">
        {children}
      </main>
      <FooterComp />
    </div>
  );
}
