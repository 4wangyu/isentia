import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from, of } from 'rxjs';
import { catchError, map, mergeMap, reduce, switchMap } from 'rxjs/operators';
import { Feed, Item } from '../app.model';
import { contentsPoll, contentsUpdate } from './state.actions';

const RSS_TO_JSON = 'https://api.rss2json.com/v1/api.json?rss_url=';

@Injectable()
export class HttpEffects {
  pollContents$ = createEffect(() =>
    this.actions$.pipe(
      ofType(contentsPoll),
      switchMap((action) => {
        return from(action.feeds).pipe(
          mergeMap((feed) => {
            return this.http
              .get<{ feed: Feed; items: Item[] }>(RSS_TO_JSON + feed.url)
              .pipe(
                map(({ feed, items }) =>
                  items.map((item) => {
                    return { ...item, channel: feed.title };
                  })
                ),
                catchError((err) => {
                  console.error(err);
                  return of([] as Item[]);
                })
              );
          }),
          reduce((prev: Item[], curr: Item[]) => prev.concat(curr)),
          map((items) => {
            return items.sort(
              (a, b) =>
                new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
            );
          }),
          map((contents) => contentsUpdate({ contents }))
        );
      })
    )
  );

  constructor(private actions$: Actions, private http: HttpClient) {}
}
