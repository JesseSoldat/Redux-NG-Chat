import { Inject, Component } from '@angular/core';
import { AppStore } from '../app.store';
import { Store } from 'redux';

import { AppState, getUnreadMessagesCount } from '../reducers';

@Component({
	selector: 'chat-nav-bar',
	templateUrl: './ChatNavBar.html'
})

export default class ChatNavBar {
	unreadMessagesCount: number;

	constructor(@Inject(AppStore) private store: Store<AppState>){
		store.subscribe( () => this.updateState());
		this.updateState();
	}

	updateState(){
		this.unreadMessagesCount = getUnreadMessagesCount(this.store.getState());
		
	}
}