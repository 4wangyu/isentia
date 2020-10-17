import { createAction, props } from '@ngrx/store';
import { Feed } from '../app.model';

export const feedsUpdate = createAction(
  '[Feeds] Update',
  props<{ newFeeds: Feed[] }>()
);

export const feedsInit = createAction(
  '[Feeds] Init',
  props<{ feeds: Feed[] }>()
);
