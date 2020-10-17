import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss'],
})
export class FeedsComponent implements OnInit {
  feeds = Array(10).fill({
    title: 'South China Morning Post',
    unread: 10,
  });

  constructor() {}

  ngOnInit(): void {}
}
