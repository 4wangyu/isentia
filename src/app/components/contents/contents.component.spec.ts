import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { take } from 'rxjs/operators';

import { ContentsComponent } from './contents.component';

describe('ContentsComponent', () => {
  let component: ContentsComponent;
  let fixture: ComponentFixture<ContentsComponent>;
  let element: HTMLElement;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContentsComponent],
      providers: [provideMockStore()],
    }).compileComponents();
    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentsComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display contents', () => {
    component.contents = fakeItems;
    fixture.detectChanges();
    const els = element.querySelectorAll('details');
    expect(els.length).toEqual(10);
  });

  it('should show load button when got new items', async () => {
    component.hasNew$ = of(true);
    fixture.detectChanges();
    const loadBtn = element.querySelector('button');
    expect(loadBtn).toBeTruthy();
  });
});

const fakeItems = Array(10).fill({
  title: 'Breaking News!!!',
  pubDate: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
  link: 'https://theannoyingsite.com/',
  guid: new Date().toISOString(),
  content: 'More Info......',
  channel: 'Isentia',
});
