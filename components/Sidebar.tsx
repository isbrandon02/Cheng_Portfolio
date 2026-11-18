import { portfolioSections, type PortfolioSectionId } from "@/data/portfolio";

type SidebarProps = {
  activeSection: PortfolioSectionId;
  onNavigate: (section: PortfolioSectionId) => void;
};

export default function Sidebar({ activeSection, onNavigate }: SidebarProps) {
  return (
    <aside className="sidebar">
      <a className="sidebar-brand" href="#about" onClick={() => onNavigate("about")}>
        <span className="sidebar-name">Brandon Cheng.</span>
        <span className="sidebar-role">SOFTWARE ENGINEER</span>
      </a>

      <div className="sidebar-rule" />

      <nav aria-label="Main navigation" className="sidebar-nav">
        {portfolioSections.map((section) => (
          <a
            aria-current={activeSection === section.id ? "location" : undefined}
            className={`sidebar-link${activeSection === section.id ? " is-active" : ""}`}
            href={`#${section.id}`}
            key={section.id}
            onClick={() => onNavigate(section.id)}
          >
            <span className="sidebar-link-indicator" aria-hidden="true" />
            <span>{section.label}</span>
          </a>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <nav className="sidebar-socials" aria-label="Social links">
          <a href="https://github.com/">GitHub</a>
          <a href="https://www.linkedin.com/">LinkedIn</a>
          <a href="#resume">Resume</a>
        </nav>
        <span className="sidebar-university">DUKE UNIVERSITY</span>
      </div>
    </aside>
  );
}
