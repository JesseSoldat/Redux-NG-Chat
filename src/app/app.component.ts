import { Component, Inject } from '@angular/core';
import { Store } from 'redux';
import { AppStore } from './app.store';
import { AppState } from './reducers';
import ChatExampleData  from './ChatExampleData';
import { FromNowPipe } from './pipes/FromNowPipe';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
	constructor(@Inject(AppStore) private store: Store<AppState>) {
		ChatExampleData(store);
	}
}
