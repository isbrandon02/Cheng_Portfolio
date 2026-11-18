"use client";

import { useEffect, useState } from "react";
import type { PortfolioSectionId } from "@/data/portfolio";
import { portfolioSections } from "@/data/portfolio";
import PortfolioContent from "./PortfolioContent";
import Sidebar from "./Sidebar";

export default function PortfolioLayout() {
  const [activeSection, setActiveSection] = useState<PortfolioSectionId>("about");

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(".portfolio-section");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const section = portfolioSections.find(({ id }) => id === entry.target.id);
          if (section) setActiveSection(section.id);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio-layout">
      <Sidebar activeSection={activeSection} onNavigate={setActiveSection} />
      <main className="portfolio-main" id="main-content">
        <PortfolioContent />
      </main>
    </div>
  );
}
