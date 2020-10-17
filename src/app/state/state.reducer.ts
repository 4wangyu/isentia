import { createReducer, on } from '@ngrx/store';
import { Feed } from '../app.model';
import actions from './state.actions';
import { FEEDS_STORAGE_KEY, INITIAL_FEEDS } from './state.config';

const feedsReducer = createReducer(
  (JSON.parse(localStorage.getItem(FEEDS_STORAGE_KEY)) ??
    INITIAL_FEEDS) as Feed[],
  on(actions.feedsUpdate, (state, { newFeeds }) => [...state, ...newFeeds])
);

export default { feedsReducer };
