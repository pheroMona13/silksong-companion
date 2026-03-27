import { useEffect, useMemo, useState } from 'react';
import tools from '../../utils/tools';
import { fleas } from '../../data/fleas';
import { useFoundMemoryLockets } from '../../hooks/useFoundMemoryLockets';
import { memoryLockets } from '../../data/memoryLockets';
import MemoryLocketCard from './components/MemoryLocketCard';
import PermDataSettingSVG from '../../assets/images/icons/perm_data_setting.svg';
import CheckBoxSVG from '../../assets/images/icons/check_box.svg';
import './MemoryLocketPage.scss';

function MemoryLocketPage() {
  const { foundMemoryLockets, toggleMemoryLocket } = useFoundMemoryLockets();

  const [locations, setLocations] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string>('All');

  // generate filtered items
  const filteredList = useMemo(() => {
    return memoryLockets.filter((e) => {
      return selectedLocation === 'All' || e.location === selectedLocation;
    });
  }, [selectedLocation]);

  // generate list of locations based on data
  useEffect(() => {
    setLocations([
      'All',
      ...tools
        .groupBy({ input: fleas, keys: ['location'] })
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
    <div className="MemoryLocketPage">
      <div className="checked-count">
        {selectedLocation !== 'All' ? (
          <>
            {selectedLocation}
            <img src={PermDataSettingSVG} alt="applied filter" />
          </>
        ) : (
          <>
            [{foundMemoryLockets.length}/{fleas.length}]
            <img src={CheckBoxSVG} alt="checked count" />
          </>
        )}
      </div>

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

      <div className="list">
        {filteredList.map((memoryLocket) => (
          <MemoryLocketCard
            key={memoryLocket.id}
            memoryLocket={memoryLocket}
            isSelected={foundMemoryLockets.includes(memoryLocket.id)}
            onToggle={toggleMemoryLocket}
            selectable
          />
        ))}

        {filteredList.length === 0 && (
          <div className="no_results">
            There are no fleas in this filtered location.
          </div>
        )}
      </div>
    </div>
  );
}

export default MemoryLocketPage;
