import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { createStore, Store, compose, StoreEnhancer } from 'redux';
import { AppStore } from './app.store';

import { AppState, default as reducer } from './reducers';

import { AppComponent } from './app.component';
import ChatNavBar from './containers/ChatNavBar';
import ChatThreads from './containers/ChatThreads';
import ChatThread from './components/ChatThread';



let devtools: StoreEnhancer<AppState> =
  window['devToolsExtension'] ?
  window['devToolsExtension']() : f => f;

let store: Store<AppState> = createStore<AppState>(
  reducer,
  compose(devtools)
);

@NgModule({
  declarations: [
    AppComponent,
    ChatNavBar,
    ChatThreads,
    ChatThread
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    { provide: AppStore, useFactory: () => store }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
