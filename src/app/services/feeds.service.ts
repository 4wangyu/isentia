import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Feed, Item } from '../app.model';

const RSS_TO_JSON = 'https://api.rss2json.com/v1/api.json?rss_url=';

@Injectable({
  providedIn: 'root',
})
export class FeedsService {
  constructor(private http: HttpClient) {}

  getFeeds(url: string): Observable<{ feed: Feed; items: Item[] }> {
    return this.http.get<{ feed: Feed; items: Item[] }>(RSS_TO_JSON + url).pipe(
      map(({ feed, items }) => ({
        feed,
        items: items.map((item) => {
          return { ...item, channel: feed.title };
        }),
      }))
    );
  }
}
