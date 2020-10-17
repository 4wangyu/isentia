import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { Feed } from '../app.model';
import { feedsUpdate } from './state.actions';
import { FEEDS_STORAGE_KEY } from './state.config';

@Injectable()
export class StorageEffects {
  saveFeeds$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(feedsUpdate),
        tap((action) => {
          const savedFeeds = (JSON.parse(
            localStorage.getItem(FEEDS_STORAGE_KEY)
          ) ?? []) as Feed[];
          const strippedFeeds = action.newFeeds.map((f) => {
            return { ...f, items: [] };
          });
          localStorage.setItem(
            FEEDS_STORAGE_KEY,
            JSON.stringify([...savedFeeds, ...strippedFeeds])
          );
        })
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions) {}
}
