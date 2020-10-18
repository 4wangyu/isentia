import { createReducer, on } from '@ngrx/store';
import { Feed, Item } from '../models/app.model';
import {
  contentsLoaded,
  contentsUpdate,
  feedRemove,
  feedsInit,
  feedsUpdate,
} from './state.actions';
import { sortByDate } from './state.util';

export const feedsReducer = createReducer(
  [] as Feed[],
  on(feedsUpdate, (state, { newFeeds }) => [...state, ...newFeeds]),
  on(feedsInit, (state, { feeds }) => feeds),
  on(feedRemove, (state, { feed }) => state.filter((f) => f.url !== feed.url))
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
  on(contentsLoaded, (state) => state.map((c) => ({ ...c, new: false }))),
  on(feedRemove, (state, { feed }) =>
    state.filter((f) => f.channel !== feed.title)
  )
);
