import { useEffect, useState } from 'react';
import { getUser, loadSave, type UserData } from '../../database/db';
import SaveSVG from '../../assets/images/icons/save.svg';
import './SavePage.scss';

export type SaveType = {
  id: string | number;
  description?: string;
  data?: UserData;
};

function SavePage() {
  const [saves, setSaves] = useState<SaveType[]>([]);

  const handleCreate = async () => {
    const description = prompt('Enter description (optional)') ?? undefined;
    if (!description) {
      return;
    }

    const id = new Date().getTime();
    const currentData = await getUser();

    const newList = [
      ...JSON.parse(localStorage.getItem('save_list') ?? '[]'),
      {
        id,
        description,
        data: currentData,
      },
    ];

    localStorage.setItem('save_list', JSON.stringify(newList));
    setSaves((prev) => {
      return [...prev, { id, description }];
    });
  };
  const handleLoad = async (saveId: string | number) => {
    if (confirm('Are you sure you want to restore (load) this save file?')) {
      if (
        confirm(
          'Restoring this save file will "Overwrite" the current save, are you sure?',
        )
      ) {
        const saves = JSON.parse(
          localStorage.getItem('save_list') ?? '[]',
        ) as SaveType[];

        const targetSave = saves.find((e) => {
          return e.id === saveId;
        });

        await loadSave(targetSave);

        alert('Save file has been loaded successfully!');
      }
    }
  };

  useEffect(() => {
    const result = JSON.parse(
      localStorage.getItem('save_list') ?? '[]',
    ) as SaveType[];

    setSaves(
      result.map(({ id, description }) => {
        return { id, description };
      }),
    );
  }, []);

  return (
    <div className="SavePage">
      <div className="card dashed" onClick={handleCreate}>
        Create a New Save
      </div>
      <hr />

      {!saves.length ? (
        <p>No save has been created yet!</p>
      ) : (
        <>
          {saves.map((e) => {
            return (
              <div
                key={e.id}
                className="card save"
                onClick={() => {
                  handleLoad(e.id);
                }}
              >
                <p>
                  {new Date(parseInt(String(e.id))).toLocaleString('en-US')}
                </p>
                <p className="description">{e.description}</p>
                <img src={SaveSVG} alt="load" />
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}

export default SavePage;
