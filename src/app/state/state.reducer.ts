import { createReducer, on } from '@ngrx/store';
import { feedsInit, feedsUpdate } from './state.actions';

export const feedsReducer = createReducer(
  [],
  on(feedsUpdate, (state, { newFeeds }) => [...state, ...newFeeds]),
  on(feedsInit, (state, { feeds }) => feeds)
);
