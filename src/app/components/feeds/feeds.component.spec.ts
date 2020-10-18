import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AppComponent } from '../../app.component';
import { INITIAL_FEEDS } from '../../state/state.config';

import { FeedsComponent } from './feeds.component';

@Component({})
class FakeappComponent {
  addFeed = false;
}

describe('FeedsComponent', () => {
  let component: FeedsComponent;
  let fixture: ComponentFixture<FeedsComponent>;
  let element: HTMLElement;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeedsComponent],
      providers: [
        provideMockStore(),
        {
          provide: AppComponent,
          useClass: FakeappComponent,
        },
      ],
    }).compileComponents();
    store = TestBed.inject(MockStore);
    store.setState({ feeds: INITIAL_FEEDS });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedsComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should list out feeds', () => {
    const feeds = element.querySelectorAll('.overflow-ellipsis');
    expect(feeds.length).toEqual(2);
  });
});
