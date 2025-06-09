import { Head } from "./head";

import { Navbar } from "@/components/navbar";
import FooterComp from "@/components/footer";
import SwiperComp from "@/components/swiper";

export default function IndexLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <Navbar />
      <SwiperComp />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
        {children}
      </main>
      <FooterComp />
    </div>
  );
}
