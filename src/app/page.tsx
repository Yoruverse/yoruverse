"use client";
import { Navigation, Project, About, Support } from "@/components";

export default function Home() {
  return (
    <main className="scroll-smooth antialiased">
      <Navigation />
      <Project />
      <About />
      <Support />
    </main>
  );
};