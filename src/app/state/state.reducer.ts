import { createReducer, on } from '@ngrx/store';
import { contentsUpdate, feedsInit, feedsUpdate } from './state.actions';

export const feedsReducer = createReducer(
  [],
  on(feedsUpdate, (state, { newFeeds }) => [...state, ...newFeeds]),
  on(feedsInit, (state, { feeds }) => feeds)
);

export const contentsReducer = createReducer(
  [],
  on(contentsUpdate, (state, { contents }) => contents)
);
