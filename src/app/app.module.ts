import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { FeedsComponent } from './components/feeds/feeds.component';
import { ContentsComponent } from './components/contents/contents.component';
import { AddFeedComponent } from './components/add-feed/add-feed.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedsComponent,
    ContentsComponent,
    AddFeedComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
