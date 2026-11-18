"use client";

import Image from "next/image";
import { useState } from "react";
import { experiences, hackathonEntries, projectEntries } from "@/data/portfolio";

const aboutImages = [
  {
    src: "/hike.jpg",
    alt: "Brandon hiking through a forested mountain landscape",
  },
  {
    src: "/mewtwo.jpg",
    alt: "Brandon smiling at a Mewtwo exhibit",
  },
  {
    src: "/Solo.JPG",
    alt: "Portrait of Brandon outdoors at night",
  },
];

function SectionHeading({ number, label, id }: { number: string; label: string; id: string }) {
  return (
    <div className="section-heading">
      <span className="section-number">{number}</span>
      <h2 id={id}>{label}</h2>
    </div>
  );
}

export default function PortfolioContent() {
  const [openExperience, setOpenExperience] = useState<string | null>(null);

  return (
    <div className="content-inner">
      <section className="about-section portfolio-section" id="about" aria-labelledby="about-title">
        <div className="hero-labels">
          <div className="hero-meta"><span>PORTFOLIO</span></div>
          <p className="section-number hero-number">01 / ABOUT</p>
        </div>
        <h1 id="about-title">Hi,<br />I'm Brandon<span className="hero-signature-dot">.</span></h1>
        <div className="about-images" role="group" aria-label="Photos of Brandon">
          {aboutImages.map((image) => (
            <figure className="about-image" key={image.src}>
              <div className="about-image-frame">
                <Image
                  alt={image.alt}
                  className="about-image-source"
                  fill
                  sizes="(max-width: 760px) 50vw, (max-width: 1100px) 30vw, 28vw"
                  src={image.src}
                />
              </div>
            </figure>
          ))}
        </div>
        <div className="hero-bottom">
          <p className="hero-prompt">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></p>
        </div>
      </section>

      <section className="portfolio-section detail-section" id="experience" aria-labelledby="experience-title">
        <SectionHeading id="experience-title" number="02" label="Experience" />
        <p className="section-intro">A record of places, people, and problems that shaped the work.</p>
        <div className="experience-list">
          {experiences.map((experience, index) => (
            <article className={`experience-entry${openExperience === experience.company ? " is-open" : ""}`} key={experience.company}>
              <button
                aria-controls={`experience-details-${index}`}
                aria-expanded={openExperience === experience.company}
                className="experience-trigger"
                onClick={() => setOpenExperience(openExperience === experience.company ? null : experience.company)}
                type="button"
              >
                <span className="entry-index">0{index + 1}</span>
                <span className="entry-main">
                  <span className="entry-company" role="heading" aria-level={3}>{experience.company}</span>
                  <span className="entry-role">{experience.role}</span>
                  <span className="entry-tech">{experience.technologies}</span>
                </span>
                <span className="entry-date">{experience.date}</span>
                <span className="experience-toggle" aria-hidden="true">{openExperience === experience.company ? "−" : "+"}</span>
              </button>
              <div
                className="experience-details"
                hidden={openExperience !== experience.company}
                id={`experience-details-${index}`}
              >
                <div className="experience-detail-block">
                  <span className="experience-detail-label">CONTRIBUTIONS</span>
                  <ul>
                    {experience.contributions.map((contribution) => <li key={contribution}>{contribution}</li>)}
                  </ul>
                </div>
                <div className="experience-detail-block">
                  <span className="experience-detail-label">IMPACT</span>
                  <p>{experience.impact}</p>
                </div>
                <a className="experience-site-link" href={experience.website} rel="noreferrer" target="_blank">
                  Organization website <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-section detail-section" id="hackathons" aria-labelledby="hackathons-title">
        <SectionHeading id="hackathons-title" number="03" label="Hackathons" />
        <p className="section-intro">Selected builds and moments from collaborative sprints.</p>
        <div className="editorial-list">
          {hackathonEntries.map((entry, index) => (
            <article className="editorial-entry" key={entry.name}>
              <span className="entry-index">0{index + 1}</span>
              <div>
                <h3>{entry.name}</h3>
                <p>{entry.date} · {entry.description}</p>
                <span className="entry-tech">{entry.technologies}</span>
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
          {projectEntries.map((entry, index) => (
            <article className="editorial-entry project-entry" key={entry.name}>
              <span className="entry-index">0{index + 1}</span>
              <div>
                <h3>{entry.name}</h3>
                <p>{entry.date} · {entry.description}</p>
                <span className="entry-tech">{entry.technologies}</span>
              </div>
              <span className="entry-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
