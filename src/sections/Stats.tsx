import { Reveal } from "../components/Reveal";
import { profileData } from "../data/profile";

export function Stats() {
  return (
    <div className="stats-band">
      <div className="stats-inner">
        {profileData.stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 80}>
            <div className="stats-item">
              <div className="stats-value">{stat.value}</div>
              <div className="stats-label">{stat.label}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}