import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { AddFeedComponent } from './components/add-feed/add-feed.component';
import { ContentsComponent } from './components/contents/contents.component';
import { FeedsComponent } from './components/feeds/feeds.component';
import { LoaderComponent } from './components/loader/loader.component';
import { EffectsModule } from '@ngrx/effects';
import { feedsReducer } from './state/state.reducer';
import { StorageEffects } from './state/storage.effects';

@NgModule({
  declarations: [
    AppComponent,
    FeedsComponent,
    ContentsComponent,
    AddFeedComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    StoreModule.forRoot({ feeds: feedsReducer }),
    EffectsModule.forRoot([StorageEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
