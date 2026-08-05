import { Icon } from "../components/Icon";
import { focusData } from "../data/services";

export function FocusTicker() {
  return (
    <div className="ticker">
      <div className="ticker-inner">
        <div className="ticker-label">Focus areas</div>
        <div className="ticker-items">
          {focusData.map((focus) => (
            <span className="ticker-chip" key={focus.label}>
              <Icon name={focus.icon} size={14} />
              {focus.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}