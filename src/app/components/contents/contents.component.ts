import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Item } from '../../app.model';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.scss'],
})
export class ContentsComponent implements OnInit {
  contents$: Observable<Item[]>;

  constructor(store: Store<{ contents: Item[] }>) {
    this.contents$ = store.select('contents');
  }

  ngOnInit(): void {}
}
