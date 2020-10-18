import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Feed, Item } from '../../models/app.model';
import { FeedsService } from '../../services/feeds.service';
import { contentsUpdate, feedsUpdate } from '../../state/state.actions';

@Component({
  selector: 'app-add-feed',
  templateUrl: './add-feed.component.html',
  styleUrls: ['./add-feed.component.scss'],
})
export class AddFeedComponent implements OnInit {
  feed: { feed: Feed; items: Item[] };
  hasErr: boolean;
  followed$ = this.store
    .select('feeds')
    .pipe(map((feeds) => feeds.some((f) => f.url === this.feed?.feed?.url)));

  constructor(
    private feedsSvc: FeedsService,
    private store: Store<{ feeds: Feed[] }>
  ) {}

  ngOnInit(): void {}

  getFeed(url: string): void {
    this.feedsSvc.getFeeds(url).subscribe(
      (res) => {
        this.hasErr = false;
        this.feed = res;
      },
      (err) => {
        this.feed = null;
        this.hasErr = true;
      }
    );
  }

  addFeed(): void {
    this.store.dispatch(feedsUpdate({ newFeeds: [this.feed.feed] }));
    this.store.dispatch(contentsUpdate({ contents: this.feed.items }));
  }
}
