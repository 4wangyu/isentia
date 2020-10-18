import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, timer } from 'rxjs';
import { take } from 'rxjs/operators';
import { Feed } from './models/app.model';
import { contentsPoll, feedsInit, feedsUpdate } from './state/state.actions';
import { FEEDS_STORAGE_KEY, INITIAL_FEEDS } from './state/state.config';

const POLLING_INTERVAL = 600000; // 10 mins

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  addFeed = false;

  private sub = new Subscription();

  constructor(private store: Store<{ feeds: Feed[] }>) {}

  ngOnInit(): void {
    this.initFeeds();
    this.sub.add(
      timer(POLLING_INTERVAL, POLLING_INTERVAL).subscribe(async () => {
        const feeds = await this.store
          .select('feeds')
          .pipe(take(1))
          .toPromise();

        this.store.dispatch(contentsPoll({ feeds }));
      })
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  private initFeeds(): void {
    const feeds = JSON.parse(localStorage.getItem(FEEDS_STORAGE_KEY)) as Feed[];

    if (feeds) {
      this.store.dispatch(feedsInit({ feeds }));
    } else {
      this.store.dispatch(feedsUpdate({ newFeeds: INITIAL_FEEDS }));
    }

    this.store.dispatch(contentsPoll({ feeds: feeds ?? INITIAL_FEEDS }));
  }
}
