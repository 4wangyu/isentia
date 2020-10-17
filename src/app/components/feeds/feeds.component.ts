import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Feed } from '../../app.model';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss'],
})
export class FeedsComponent implements OnInit {
  feeds$: Observable<Feed[]>;

  constructor(store: Store<{ feeds: Feed[] }>) {
    this.feeds$ = store.select('feeds');
  }

  ngOnInit(): void {}
}
