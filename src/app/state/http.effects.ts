import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from, of } from 'rxjs';
import { catchError, map, mergeMap, reduce, switchMap } from 'rxjs/operators';
import { Item } from '../app.model';
import { FeedsService } from '../services/feeds.service';
import { contentsPoll, contentsUpdate } from './state.actions';

@Injectable()
export class HttpEffects {
  pollContents$ = createEffect(() =>
    this.actions$.pipe(
      ofType(contentsPoll),
      switchMap((action) => {
        return from(action.feeds).pipe(
          mergeMap((feed) => {
            return this.feedsSvc.getFeeds(feed.url).pipe(
              map(({ items }) => items),
              catchError((err) => {
                console.error(err);
                return of([] as Item[]);
              })
            );
          }),
          reduce((prev: Item[], curr: Item[]) => prev.concat(curr)),
          map((contents) => contentsUpdate({ contents }))
        );
      })
    )
  );

  constructor(private actions$: Actions, private feedsSvc: FeedsService) {}
}
