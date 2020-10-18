import { Component, forwardRef, Inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppComponent } from '../../app.component';
import { Feed } from '../../models/app.model';
import { contentsUpdate } from '../../state/state.actions';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss'],
})
export class FeedsComponent implements OnInit {
  feeds$: Observable<Feed[]>;

  constructor(
    private store: Store<{ feeds: Feed[] }>,
    @Inject(forwardRef(() => AppComponent)) public appComp: AppComponent
  ) {
    this.feeds$ = store.select('feeds');
  }

  ngOnInit(): void {}

  testNewFeed(): void {
    this.store.dispatch(
      contentsUpdate({
        contents: [
          {
            title: 'Breaking News!!!',
            pubDate: new Date()
              .toISOString()
              .replace(/T/, ' ')
              .replace(/\..+/, ''),
            link: 'https://theannoyingsite.com/',
            guid: new Date().toISOString(),
            content: 'More Info......',
            channel: 'Isentia',
          },
        ],
      })
    );
  }
}
