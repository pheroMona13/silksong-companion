const groupBy = <T>({ input, keys }: { input?: T[]; keys: (keyof T)[] }) => {
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

const tools = {
  groupBy,
};

export default tools;
