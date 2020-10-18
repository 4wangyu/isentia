import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { AddFeedComponent } from './components/add-feed/add-feed.component';
import { ContentsComponent } from './components/contents/contents.component';
import { FeedsComponent } from './components/feeds/feeds.component';
import { EffectsModule } from '@ngrx/effects';
import { contentsReducer, feedsReducer } from './state/state.reducer';
import { StorageEffects } from './state/storage.effects';
import { HttpEffects } from './state/http.effects';
import { HttpClientModule } from '@angular/common/http';
import { AutofocusDirective } from './directives/autofocus.directive';

@NgModule({
  declarations: [
    AppComponent,
    FeedsComponent,
    ContentsComponent,
    AddFeedComponent,
    AutofocusDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatIconModule,
    StoreModule.forRoot({ feeds: feedsReducer, contents: contentsReducer }),
    EffectsModule.forRoot([StorageEffects, HttpEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
