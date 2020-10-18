import { Component, forwardRef, Inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppComponent } from '../../app.component';
import { Feed } from '../../app.model';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss'],
})
export class FeedsComponent implements OnInit {
  feeds$: Observable<Feed[]>;

  constructor(
    store: Store<{ feeds: Feed[] }>,
    @Inject(forwardRef(() => AppComponent)) public appComp: AppComponent
  ) {
    this.feeds$ = store.select('feeds');
  }

  ngOnInit(): void {}
}
