import React from "react";
import { Outlet } from "react-router-dom";
import { useLang } from "@/lib/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileBar from "@/components/StickyMobileBar";

export default function Layout() {
  const { lang } = useLang();
  return (
    <div className={lang === "mr" ? "lang-mr flex min-h-screen flex-col" : "flex min-h-screen flex-col"}>
      <Header />
      <main className="flex-1 pb-16 lg:pb-0">
        <Outlet />
      </main>
      <Footer />
      <StickyMobileBar />
    </div>
  );
}