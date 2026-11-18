import { experiences, hackathonPlaceholders, projectPlaceholders } from "@/data/portfolio";

function SectionHeading({ number, label, id }: { number: string; label: string; id: string }) {
  return (
    <div className="section-heading">
      <span className="section-number">{number}</span>
      <h2 id={id}>{label}</h2>
    </div>
  );
}

export default function PortfolioContent() {
  return (
    <div className="content-inner">
      <section className="about-section portfolio-section" id="about" aria-labelledby="about-title">
        <div className="hero-labels">
          <div className="hero-meta"><span>PORTFOLIO</span><span>DUKE UNIVERSITY</span></div>
          <p className="section-number hero-number">01 / ABOUT</p>
        </div>
        <h1 id="about-title">Hi,<br />I'm Brandon<br /></h1>
        <div className="hero-bottom">
          <p className="hero-intro">Software Engineer</p>
          <p className="hero-prompt">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></p>
        </div>
      </section>

      <section className="portfolio-section detail-section" id="experience" aria-labelledby="experience-title">
        <SectionHeading id="experience-title" number="02" label="Experience" />
        <p className="section-intro">A record of places, people, and problems that shaped the work.</p>
        <div className="experience-list">
          {experiences.map((experience, index) => (
            <article className="experience-entry" key={experience.company}>
              <span className="entry-index">0{index + 1}</span>
              <div className="entry-main">
                <h3>{experience.company}</h3>
                <p>{experience.role}</p>
                <span className="entry-tech">{experience.technologies}</span>
              </div>
              <span className="entry-date">{experience.date}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-section detail-section" id="hackathons" aria-labelledby="hackathons-title">
        <SectionHeading id="hackathons-title" number="03" label="Hackathons" />
        <p className="section-intro">Selected builds and moments from collaborative sprints.</p>
        <div className="editorial-list">
          {hackathonPlaceholders.map((entry, index) => (
            <article className="editorial-entry" key={entry}>
              <span className="entry-index">0{index + 1}</span>
              <div>
                <h3>{entry}</h3>
                <p>Event details and project highlights to be added.</p>
              </div>
              <span className="entry-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-section detail-section projects-section" id="projects" aria-labelledby="projects-title">
        <SectionHeading id="projects-title" number="04" label="Projects" />
        <p className="section-intro">A selection of things made with care and curiosity.</p>
        <div className="editorial-list">
          {projectPlaceholders.map((entry, index) => (
            <article className="editorial-entry project-entry" key={entry}>
              <span className="entry-index">0{index + 1}</span>
              <div>
                <h3>{entry}</h3>
                <p>Project overview, role, and technology details to be added.</p>
              </div>
              <span className="entry-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
