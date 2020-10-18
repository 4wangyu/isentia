import { Injectable } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Observable, of } from 'rxjs';
import { Feed, Item } from '../../models/app.model';
import { FeedsService } from '../../services/feeds.service';
import { INITIAL_FEEDS } from '../../state/state.config';

import { AddFeedComponent } from './add-feed.component';

describe('AddFeedComponent', () => {
  let component: AddFeedComponent;
  let fixture: ComponentFixture<AddFeedComponent>;
  let element: HTMLElement;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddFeedComponent],
      providers: [
        {
          provide: FeedsService,
          useClass: FakeFeedsService,
        },
        provideMockStore(),
      ],
    }).compileComponents();
    store = TestBed.inject(MockStore);
    store.setState({ feeds: INITIAL_FEEDS });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFeedComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should show error when getting feeds fails', () => {
    component.hasErr = true;
    fixture.detectChanges();
    const errEl = element.querySelector('.error');
    expect(errEl).toBeTruthy();
  });

  it('should list out followed feeds', () => {
    const feeds = element.querySelectorAll('.followed-feed');
    expect(feeds.length).toEqual(2);
  });

  it('should call getFeed when pressing enter on input', () => {
    spyOn(component, 'getFeed');
    const inputEl = element.querySelector('input');
    const e = new KeyboardEvent('keyup', {
      key: 'Enter',
    });
    inputEl.dispatchEvent(e);
    expect(component.getFeed).toHaveBeenCalled();
  });
});

@Injectable()
class FakeFeedsService {
  getFeeds(rss_url: string): Observable<{ feed: Feed; items: Item[] }> {
    return of({
      feed: {
        title: 'BBC News - Home',
        url: 'http://feeds.bbci.co.uk/news/rss.xml',
        items: [],
      },
      items: [
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
    });
  }
}
