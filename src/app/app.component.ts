import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Feed } from './app.model';
import { contentsPoll, feedsInit, feedsUpdate } from './state/state.actions';
import { FEEDS_STORAGE_KEY, INITIAL_FEEDS } from './state/state.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  addFeed = false;

  constructor(private store: Store<{ feeds: Feed[] }>) {}

  ngOnInit(): void {
    this.initFeeds();
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
