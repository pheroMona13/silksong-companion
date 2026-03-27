import type { FleaType } from '../../../data/fleas';
import IconHelp from '../../../assets/images/icons/help.svg';
import FleaPNG from '../../../assets/images/sprites/flea.png';
import './FleaCard.scss';

export type FleaCardProps = {
  flea: FleaType;
  selectable?: boolean;
  isSelected?: boolean;
  onToggle?: (id: string) => void;
};

function FleaCard({ flea, isSelected, selectable, onToggle }: FleaCardProps) {
  const handleActionClick = () => {
    const searchPhrase = `hollow knight silksong fleas ${flea.location}`;

    return console.log(searchPhrase); // prevent help action till its parent calling bug get fixed
    window
      .open(
        'https://www.google.com/search?q=' + encodeURIComponent(searchPhrase),
        '_blank',
      )
      ?.focus();
  };

  return (
    <label
      className={`flea_card_wrapper ${selectable ? 'selectable' : ''} ${isSelected ? 'selected' : ''}`}
    >
      {selectable ? (
        <div className="checkbox">
          <input
            type="checkbox"
            checked={isSelected}
            onChange={() => onToggle?.(flea.id)}
          />
        </div>
      ) : null}
      <div className="flea_card">
        <div className="head">
          <div className="title">{flea.name}</div>
          <div className="meta">
            <img src={IconHelp} alt="search" onClick={handleActionClick} />
          </div>
        </div>
        <div className="description">
          <div className="text">
            <p>
              <b>{flea.location}</b>
            </p>
            <p>{flea.where_to_find}</p>
          </div>
          <div className="image">
            <img src={FleaPNG} alt="flea" />
          </div>
        </div>
      </div>
    </label>
  );
}

export default FleaCard;
