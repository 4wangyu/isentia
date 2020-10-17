import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.scss'],
})
export class ContentsComponent implements OnInit {
  contents = Array(20).fill({
    title:
      'AFL finals 2020 live updates: Wasteful Geelong Cats take the early edge against Brisbane Lions in preliminary final',
    feed: 'Sydney Morning Herald - Latest News',
    time: '22 minutes ago',
    content: 'more info...',
  });

  constructor() {}

  ngOnInit(): void {}
}
