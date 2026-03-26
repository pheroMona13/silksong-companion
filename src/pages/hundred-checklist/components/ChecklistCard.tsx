import type { ChecklistType } from '../../../data/checklists';
import IconHelp from '../../../assets/images/icons/help.svg';
import './ChecklistCard.scss';

export type ChecklistCardProps = {
  item: ChecklistType;
  selectable?: boolean;
  isSelected?: boolean;
  onToggle?: (id: string) => void;
};

function ChecklistCard({
  item,
  isSelected,
  selectable,
  onToggle,
}: ChecklistCardProps) {
  const handleActionClick = () => {
    const searchPhrase = 'hollow knight silksong ' + item.name;

    // switch (action) {
    //   case 'info':
    //     searchPhrase += boss.name;
    //     break;

    //   case 'location':
    //     searchPhrase += boss.name + ' where to find';
    //     break;

    //   case 'defeat':
    //     searchPhrase += boss.name + ' how to defeat';
    //     break;
    // }

    window
      .open(
        'https://www.google.com/search?q=' + encodeURIComponent(searchPhrase),
        '_blank',
      )
      ?.focus();
  };

  return (
    <label
      className={`checklist_card_wrapper ${selectable ? 'selectable' : ''} ${isSelected ? 'selected' : ''}`}
    >
      {selectable ? (
        <div className="checkbox">
          <input
            type="checkbox"
            checked={isSelected}
            onChange={() => onToggle?.(item.id)}
          />
        </div>
      ) : null}
      <div className="checklist_card">
        <div className="head">
          <div className="title">{item.name}</div>
          <div className="meta">
            <img src={IconHelp} alt="search" onClick={handleActionClick} />
          </div>
        </div>
        <div className="description">
          <div className="text">
            <p>
              <b>{item.location}</b>
            </p>
            <p>{item.where_to_find}</p>
          </div>
          <div className="image">
            <img src={item.image} alt="related image" />
          </div>
        </div>
      </div>
    </label>
  );
}

export default ChecklistCard;
