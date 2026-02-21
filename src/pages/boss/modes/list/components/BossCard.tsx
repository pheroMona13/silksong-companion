import { useState } from "react";
import type { BossType } from "../../../../../data/bosses";
import HelpIconSVG from "../../../../../assets/images/icons/help.svg";
import NotListedLocationIconSVG from "../../../../../assets/images/icons/not_listed_location.svg";
import ContractorsIconSVG from "../../../../../assets/images/icons/contractors.svg";
import "./BossCard.scss";

export type BossCardProps = {
  boss: BossType;
  selectable?: boolean;
  isSelected?: boolean;
  onToggle?: (bossId: string) => void;
};

function BossCard({ boss, isSelected, selectable, onToggle }: BossCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleCardClick = () => {
    if (!selectable) {
      setIsOpen((prev) => !prev);
    }
  };
  const handleActionClick = (action: "info" | "location" | "defeat") => {
    let searchPhrase = "hollow knight silksong ";

    switch (action) {
      case "info":
        searchPhrase += boss.name;
        break;

      case "location":
        searchPhrase += boss.name + " where to find";
        break;

      case "defeat":
        searchPhrase += boss.name + " how to defeat";
        break;
    }

    window
      .open(
        "https://www.google.com/search?q=" + encodeURIComponent(searchPhrase),
        "_blank",
      )
      ?.focus();
  };

  return (
    <label
      className={`boss_card_wrapper ${selectable ? "selectable" : ""} ${isSelected ? "selected" : ""} ${isOpen ? "open" : ""}`}
    >
      {selectable ? (
        <div className="checkbox">
          <input
            type="checkbox"
            checked={isSelected}
            onChange={() => onToggle?.(boss.id)}
          />
        </div>
      ) : null}
      <div className="boss_card" onClick={handleCardClick}>
        <div className="head">
          <div className="title">{boss.name}</div>
          <div className="meta">
            {boss.act} | {boss.type}
          </div>
        </div>
        <div className="description">
          <p>
            <b>{boss.location}</b>
          </p>
          <p>{boss.where_to_find}</p>
        </div>
      </div>

      {/* Expandable Section */}
      {!selectable && (
        <div className="expandable">
          <div className="expandable_inner">
            <div className="action" onClick={() => handleActionClick("info")}>
              <img src={HelpIconSVG} alt="info" />
              <div>boss info</div>
            </div>
            <div
              className="action"
              onClick={() => handleActionClick("location")}
            >
              <img src={NotListedLocationIconSVG} alt="location" />
              <div>where to find</div>
            </div>
            <div className="action" onClick={() => handleActionClick("defeat")}>
              <img src={ContractorsIconSVG} alt="how to defeat" />
              <div>how to defeat</div>
            </div>
          </div>
        </div>
      )}
    </label>
  );
}

export default BossCard;
