import { useEffect, useMemo, useState } from 'react';
import { checklists } from '../../data/checklists';
import Collapsible from '../../components/collapsible/Collapsible';
import ChecklistCard from './components/ChecklistCard';
import { useCheckedItems } from '../../hooks/useCheckedItems';
import './HundredChecklistPage.scss';

function HundredChecklistPage() {
  const { checkedItems, toggleItem } = useCheckedItems();

  const [locations, setLocations] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string>('All');

  const groupBy = <T,>({ input, keys }: { input?: T[]; keys: (keyof T)[] }) => {
    const result = [];

    if (input) {
      for (const item of input) {
        let isNew = true;
        for (const group of result) {
          let allKeysMatch = true;
          for (const key of keys) {
            if (item[key] !== group[key]) {
              allKeysMatch = false;
              break;
            }
          }
          if (allKeysMatch) {
            isNew = false;
            group.items.push(item);
            break;
          }
        }
        if (isNew) {
          const newItem = { ...item, items: [item] };
          result.push(newItem);
        }
      }
    }

    return result;
  };

  // generate filtered items
  const filteredItems = useMemo(() => {
    return checklists.filter((e) => {
      return selectedLocation === 'All' || e.location === selectedLocation;
    });
  }, [selectedLocation]);

  // generate lists grouped by category
  const maskShards = useMemo(() => {
    return filteredItems.filter((e) => {
      return e.category === 'mask shard';
    });
  }, [filteredItems]);
  const spoolFragments = useMemo(() => {
    return filteredItems.filter((e) => {
      return e.category === 'spool fragment';
    });
  }, [filteredItems]);
  const tools = useMemo(() => {
    return filteredItems.filter((e) => {
      return e.category === 'tool';
    });
  }, [filteredItems]);
  const silkSkills = useMemo(() => {
    return filteredItems.filter((e) => {
      return e.category === 'silk skill';
    });
  }, [filteredItems]);
  const abilities = useMemo(() => {
    return filteredItems.filter((e) => {
      return e.category === 'ability';
    });
  }, [filteredItems]);
  const crests = useMemo(() => {
    return filteredItems.filter((e) => {
      return e.category === 'crest';
    });
  }, [filteredItems]);
  const upgrades = useMemo(() => {
    return filteredItems.filter((e) => {
      return e.category === 'upgrade';
    });
  }, [filteredItems]);
  const progressAndMiscs = useMemo(() => {
    return filteredItems.filter((e) => {
      return e.category === 'progress and misc';
    });
  }, [filteredItems]);

  // generate list of locations based on data
  useEffect(() => {
    setLocations([
      'All',
      ...groupBy({ input: checklists, keys: ['location'] })
        .map((e) => {
          return e.location;
        })
        .sort((a, b) => {
          if (a > b) {
            return 1;
          } else if (a < b) {
            return -1;
          } else {
            return 0;
          }
        }),
    ]);
  }, []);

  return (
    <div className="HundredChecklistPage">
      <div className="toolbar">
        <label>
          <div>Filter by Location</div>
          <select
            name="location"
            value={selectedLocation}
            onChange={(e) => {
              setSelectedLocation(e.target.value);
            }}
          >
            {locations.map((location, index) => {
              return (
                <option key={index} value={location}>
                  {location}
                </option>
              );
            })}
          </select>
        </label>
      </div>

      <Collapsible title="Mask Shards">
        {!maskShards.length ? (
          <p className="empty">
            There are no Mask Shards in this filtered location.
          </p>
        ) : null}

        {maskShards.map((item) => {
          return (
            <ChecklistCard
              key={item.id}
              item={item}
              isSelected={checkedItems.includes(item.id)}
              onToggle={toggleItem}
              selectable
            />
          );
        })}
      </Collapsible>
      <Collapsible title="Spool Fragments">
        {!spoolFragments.length ? (
          <p className="empty">
            There are no Spool Fragments in this filtered location.
          </p>
        ) : null}

        {spoolFragments.map((item) => {
          return (
            <ChecklistCard
              key={item.id}
              item={item}
              isSelected={checkedItems.includes(item.id)}
              onToggle={toggleItem}
              selectable
            />
          );
        })}
      </Collapsible>
      <Collapsible title="Tools">
        {!tools.length ? (
          <p className="empty">There are no Tools in this filtered location.</p>
        ) : null}

        {tools.map((item) => {
          return (
            <ChecklistCard
              key={item.id}
              item={item}
              isSelected={checkedItems.includes(item.id)}
              onToggle={toggleItem}
              selectable
            />
          );
        })}
      </Collapsible>
      <Collapsible title="Silk Skills">
        {!silkSkills.length ? (
          <p className="empty">
            There are no Silk Skills in this filtered location.
          </p>
        ) : null}

        {silkSkills.map((item) => {
          return (
            <ChecklistCard
              key={item.id}
              item={item}
              isSelected={checkedItems.includes(item.id)}
              onToggle={toggleItem}
              selectable
            />
          );
        })}
      </Collapsible>
      <Collapsible title="Abilities">
        {!abilities.length ? (
          <p className="empty">
            There are no Abilities in this filtered location.
          </p>
        ) : null}

        {abilities.map((item) => {
          return (
            <ChecklistCard
              key={item.id}
              item={item}
              isSelected={checkedItems.includes(item.id)}
              onToggle={toggleItem}
              selectable
            />
          );
        })}
      </Collapsible>
      <Collapsible title="Crests">
        {!crests.length ? (
          <p className="empty">
            There are no Crests in this filtered location.
          </p>
        ) : null}

        {crests.map((item) => {
          return (
            <ChecklistCard
              key={item.id}
              item={item}
              isSelected={checkedItems.includes(item.id)}
              onToggle={toggleItem}
              selectable
            />
          );
        })}
      </Collapsible>
      <Collapsible title="Needle and Tool Upgrades">
        {!upgrades.length ? (
          <p className="empty">
            There are no Upgrades in this filtered location.
          </p>
        ) : null}

        {upgrades.map((item) => {
          return (
            <ChecklistCard
              key={item.id}
              item={item}
              isSelected={checkedItems.includes(item.id)}
              onToggle={toggleItem}
              selectable
            />
          );
        })}
      </Collapsible>
      <Collapsible title="Progress and Misc.">
        {!progressAndMiscs.length ? (
          <p className="empty">
            There are no Progress and Misc in this filtered location.
          </p>
        ) : null}

        {progressAndMiscs.map((item) => {
          return (
            <ChecklistCard
              key={item.id}
              item={item}
              isSelected={checkedItems.includes(item.id)}
              onToggle={toggleItem}
              selectable
            />
          );
        })}
      </Collapsible>
    </div>
  );
}

export default HundredChecklistPage;
