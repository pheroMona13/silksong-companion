import { useEffect, useMemo, useState } from 'react';
import tools from '../../utils/tools';
import { collectibles } from '../../data/collectibles';
import PermDataSettingSVG from '../../assets/images/icons/perm_data_setting.svg';
import Checklist from './components/Checklist';
import './CollectiblesPage.scss';

function CollectiblesPage() {
  const [locations, setLocations] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string>('All');

  // generate filtered items
  const filteredList = useMemo(() => {
    return collectibles.filter((e) => {
      return selectedLocation === 'All' || e.location === selectedLocation;
    });
  }, [selectedLocation]);

  // generate list of locations based on data
  useEffect(() => {
    setLocations([
      'All',
      ...tools
        .groupBy({ input: collectibles, keys: ['location'] })
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
        title="Psalm Cylinders"
        category="psalm cylinders"
        filteredList={filteredList}
      />
      <Checklist
        title="Choral Commandments"
        category="choral commandment"
        filteredList={filteredList}
      />
      <Checklist
        title="Bone Scrolls"
        category="bone scroll"
        filteredList={filteredList}
      />
      <Checklist
        title="Weaver Effigies"
        category="weaver effigy"
        filteredList={filteredList}
      />
      <Checklist
        title="Rune Harps"
        category="rune harp"
        filteredList={filteredList}
      />
      <Checklist
        title="Arcane Egg"
        category="arcane egg"
        filteredList={filteredList}
      />
    </div>
  );
}

export default CollectiblesPage;
