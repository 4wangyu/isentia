import { createAction, props } from '@ngrx/store';
import { Feed, Item } from '../models/app.model';

export const feedsUpdate = createAction(
  '[Feeds] Update',
  props<{ newFeeds: Feed[] }>()
);

export const feedsInit = createAction(
  '[Feeds] Init',
  props<{ feeds: Feed[] }>()
);

export const contentsUpdate = createAction(
  '[Contents] Update',
  props<{ contents: Item[] }>()
);

export const contentsPoll = createAction(
  '[Contents] Poll',
  props<{ feeds: Feed[] }>()
);

export const contentsLoaded = createAction('[Contents] Loaded');
