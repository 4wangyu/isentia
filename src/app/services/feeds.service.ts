import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Feed, Item } from '../models/app.model';
import { toHttpParams } from '../state/state.util';

const RSS_TO_JSON = 'https://api.rss2json.com/v1/api.json';
const api_key = 'o224jyrvczf3ljwhob2ve4hwyb2vzftxpoggr1ke';

@Injectable({
  providedIn: 'root',
})
export class FeedsService {
  constructor(private http: HttpClient) {}

  getFeeds(rss_url: string): Observable<{ feed: Feed; items: Item[] }> {
    const params = toHttpParams({
      rss_url,
      api_key,
    });
    return this.http
      .get<{ feed: Feed; items: Item[] }>(RSS_TO_JSON, {
        params,
      })
      .pipe(
        map(({ feed, items }) => ({
          feed,
          items: items.map((item) => {
            return { ...item, channel: feed.title };
          }),
        }))
      );
  }
}
