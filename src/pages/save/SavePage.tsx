import { useEffect, useState } from 'react';
import { getUser, type UserData } from '../../database/db';
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
              <div className="card save" key={e.id}>
                <p>
                  {new Date(parseInt(String(e.id))).toLocaleString('en-US')}
                </p>
                <p className="description">{e.description}</p>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}

export default SavePage;
