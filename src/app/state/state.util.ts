import { HttpParams } from '@angular/common/http';
import { Item } from '../models/app.model';

export const sortByDate = (items: Item[]): Item[] => {
  return items.sort(
    (a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
  );
};

export function toHttpParams(obj: { [key: string]: any }): HttpParams {
  let params = new HttpParams();
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const val = obj[key];
      if (val !== null && val !== undefined && val !== '') {
        params = params.append(key, val.toString());
      }
    }
  }
  return params;
}
