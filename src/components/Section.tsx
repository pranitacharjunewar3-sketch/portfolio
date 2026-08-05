import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
  align?: "left" | "center";
}

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = "",
  align = "left",
}: SectionProps) {
  return (
    <section className={`section ${className}`} id={id}>
      <div className="wrap">
        <Reveal>
          <div className={`section-header ${align === "center" ? "centered" : ""}`}>
            <span className="eyebrow">{eyebrow}</span>
            <h2 className="display-lg">{title}</h2>
            {intro && <p className="section-intro">{intro}</p>}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}