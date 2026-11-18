"use client";

import { useState } from "react";
import type { PortfolioSectionId } from "@/data/portfolio";
import PortfolioContent from "./PortfolioContent";
import Sidebar from "./Sidebar";

export default function PortfolioLayout() {
  const [activeSection, setActiveSection] = useState<PortfolioSectionId>("about");

  return (
    <div className="portfolio-layout">
      <Sidebar activeSection={activeSection} onNavigate={setActiveSection} />
      <main className="portfolio-main" id="main-content">
        <PortfolioContent />
      </main>
    </div>
  );
}
