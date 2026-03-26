import { useEffect, useMemo, useState } from 'react';
import { checklists } from '../../data/checklists';
import Checklist from './components/Checklist';
import PermDataSettingSVG from '../../assets/images/icons/perm_data_setting.svg';
import './HundredChecklistPage.scss';

function HundredChecklistPage() {
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
  const filteredList = useMemo(() => {
    return checklists.filter((e) => {
      return selectedLocation === 'All' || e.location === selectedLocation;
    });
  }, [selectedLocation]);

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
      {selectedLocation !== 'All' ? (
        <div className="applied-filter">
          {selectedLocation}
          <img src={PermDataSettingSVG} alt="applied filter" />
        </div>
      ) : null}

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

      <Checklist
        title="Mask Shards"
        category="mask shard"
        filteredList={filteredList}
      />
      <Checklist
        title="Spool Fragments"
        category="spool fragment"
        filteredList={filteredList}
      />
      <Checklist title="Tools" category="tool" filteredList={filteredList} />
      <Checklist
        title="Silk Skills"
        category="silk skill"
        filteredList={filteredList}
      />
      <Checklist
        title="Abilities"
        category="ability"
        filteredList={filteredList}
      />
      <Checklist title="Crests" category="crest" filteredList={filteredList} />
      <Checklist
        title="Needle and Tool Upgrades"
        category="upgrade"
        filteredList={filteredList}
      />
      <Checklist
        title="Progress and Misc."
        category="progress and misc"
        filteredList={filteredList}
      />
    </div>
  );
}

export default HundredChecklistPage;
