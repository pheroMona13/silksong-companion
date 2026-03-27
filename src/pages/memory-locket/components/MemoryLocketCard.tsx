import type { MemoryLocketType } from '../../../data/memoryLockets';
import IconHelp from '../../../assets/images/icons/help.svg';
import MemoryLocketPNG from '../../../assets/images/sprites/memory-locket.png';
import './MemoryLocketCard.scss';

export type MemoryLocketCardProps = {
  memoryLocket: MemoryLocketType;
  selectable?: boolean;
  isSelected?: boolean;
  onToggle?: (id: string) => void;
};

function MemoryLocketCard({
  memoryLocket,
  isSelected,
  selectable,
  onToggle,
}: MemoryLocketCardProps) {
  const handleActionClick = () => {
    const searchPhrase = `hollow knight silksong memory lockets ${memoryLocket.location}`;

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
      className={`memory_locket_card_wrapper ${selectable ? 'selectable' : ''} ${isSelected ? 'selected' : ''}`}
    >
      {selectable ? (
        <div className="checkbox">
          <input
            type="checkbox"
            checked={isSelected}
            onChange={() => onToggle?.(memoryLocket.id)}
          />
        </div>
      ) : null}
      <div className="memory_locket_card">
        <div className="head">
          <div className="title">{memoryLocket.name}</div>
          <div className="meta">
            <img src={IconHelp} alt="search" onClick={handleActionClick} />
          </div>
        </div>
        <div className="description">
          <div className="text">
            <p>
              <b>{memoryLocket.location}</b>
            </p>
            <p>{memoryLocket.where_to_find}</p>
          </div>
          <div className="image">
            <img src={MemoryLocketPNG} alt="memory locket" />
          </div>
        </div>
      </div>
    </label>
  );
}

export default MemoryLocketCard;
