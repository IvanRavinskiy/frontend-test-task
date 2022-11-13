export type EventType = {
  appointmentId: string;
  date: string;
  id: string;
  name: string;
  resource: string;
};

export const configureData = (events: EventType[]) => {
  const parents = events.filter(obj => {
    let count = 0;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for (const key in obj) {
      count++;
    }
    if (count === 4) {
      return obj;
    }
  });

  const children = events.filter(obj => {
    let count = 0;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for (const key in obj) {
      count++;
    }
    if (count === 5) {
      return obj;
    }
  });

  const parentsSortedByDate = parents.sort((a, b) => {
    return Number(new Date(b.date)) - Number(new Date(a.date));
  });

  const childrenSortedByDate = children.sort((a, b) => {
    return Number(new Date(b.date)) - Number(new Date(a.date));
  });

  let parentsWithChildren = [];
  for (let i = 0; i < parentsSortedByDate.length; i++) {
    let countOfChildren = 0;
    let flag = true;
    for (let j = 0; j < childrenSortedByDate.length; j++) {
      if (
        parentsSortedByDate[i].id === childrenSortedByDate[j].appointmentId &&
        flag
      ) {
        flag = false;
        countOfChildren++;
        parentsWithChildren.push(
          parentsSortedByDate[i],
          childrenSortedByDate[j],
        );
      } else if (
        parentsSortedByDate[i].id === childrenSortedByDate[j].appointmentId &&
        !flag
      ) {
        parentsWithChildren.push(childrenSortedByDate[j]);
        countOfChildren++;
      }
    }
    if (countOfChildren === 0) {
      parentsWithChildren.push(parentsSortedByDate[i]);
    }
  }

  return parentsWithChildren;
};
