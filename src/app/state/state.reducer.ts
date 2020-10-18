import { createReducer, on } from '@ngrx/store';
import { Feed, Item } from '../app.model';
import {
  contentsLoaded,
  contentsUpdate,
  feedsInit,
  feedsUpdate,
} from './state.actions';
import { sortByDate } from './state.util';

export const feedsReducer = createReducer(
  [] as Feed[],
  on(feedsUpdate, (state, { newFeeds }) => [...state, ...newFeeds]),
  on(feedsInit, (state, { feeds }) => feeds)
);

export const contentsReducer = createReducer(
  [] as Item[],
  on(contentsUpdate, (state, { contents }) => {
    const ids = new Set(state.map((s) => s.guid));
    const newContents = contents
      .filter((c) => !ids.has(c.guid))
      .map((c) => ({ ...c, new: true }));
    return sortByDate(state.concat(newContents));
  }),
  on(contentsLoaded, (state) => state.map((c) => ({ ...c, new: false })))
);
