import { Item } from '../app.model';

export const sortByDate = (items: Item[]): Item[] => {
  return items.sort(
    (a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
  );
};
