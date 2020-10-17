import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { AddFeedComponent } from './components/add-feed/add-feed.component';
import { ContentsComponent } from './components/contents/contents.component';
import { FeedsComponent } from './components/feeds/feeds.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedsComponent,
    ContentsComponent,
    AddFeedComponent,
  ],
  imports: [BrowserModule, StoreModule.forRoot({}, {}), MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
