const navigation = ["About Me", "Experience", "Hackathons", "Projects"];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-name">BRANDON CHENG</div>
      <nav aria-label="Portfolio sections" className="portfolio-nav">
        {navigation.map((item) => <div className="nav-item" key={item}>{item}</div>)}
      </nav>
    </aside>
  );
}
