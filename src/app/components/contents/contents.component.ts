import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, shareReplay, skip, take } from 'rxjs/operators';
import { Item } from '../../app.model';
import { contentsLoaded } from '../../state/state.actions';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.scss'],
})
export class ContentsComponent implements OnInit {
  contents$: Observable<Item[]>;
  hasNew$: Observable<boolean>;

  contents: Item[] = [];

  constructor(private store: Store<{ contents: Item[] }>) {
    this.contents$ = store.select('contents').pipe(skip(1), shareReplay(1));
    this.hasNew$ = this.contents$.pipe(
      map((contents) => !!contents.find((c) => c.new))
    );
  }

  ngOnInit(): void {
    this.loadNewFeeds();
  }

  async loadNewFeeds(): Promise<void> {
    const newContents = await this.contents$.pipe(take(1)).toPromise();
    this.contents = newContents;

    // hack: mark items as not new after 2s
    setTimeout(() => {
      this.contents = this.contents.map((c) => ({ ...c, new: false }));
    }, 2000);

    this.store.dispatch(contentsLoaded());
  }
}
