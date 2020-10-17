import { createAction, props } from '@ngrx/store';
import { Feed } from '../app.model';

const feedsUpdate = createAction(
  '[Feeds] Update',
  props<{ newFeeds: Feed[] }>()
);

export default { feedsUpdate };
