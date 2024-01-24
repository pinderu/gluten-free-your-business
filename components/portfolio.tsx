"use client";

import React, { useEffect, useRef } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Portfolio() {
  const { ref } = useSectionInView("Portfolio", 0.5);

  return (
    <section ref={ref} id="portfolio" className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>Portfolio</SectionHeading>

      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
