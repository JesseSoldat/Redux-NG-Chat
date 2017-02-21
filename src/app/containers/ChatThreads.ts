import { Inject, Component } from '@angular/core';
import { AppStore } from '../app.store';
import { Store } from 'redux';
import { Thread } from '../models';
import { ThreadActions } from '../actions';
import { AppState, getCurrentThread, getAllThreads } from '../reducers';

import ChatThread from '../components/ChatThread';

@Component({
	selector: 'chat-threads',
	templateUrl: './ChatThreads.html'
})

export default class ChatThreads {
	threads: Thread[];
	currentThreadId: string;

	constructor(@Inject(AppStore) private store: Store<AppState>){
		store.subscribe( () => this.updateState());
		this.updateState();
	}

	updateState(){
		// console.log('hello from ChatThreads');
		let state = this.store.getState();
		console.log(state);

		//store the threads list
		this.threads = getAllThreads(state);
		// We want to mark the current thread as selected,
    // so we store the currentThreadId as a value
    this.currentThreadId = getCurrentThread(state).id;
	}

	handleThreadClicked(thread: Thread){
		this.store.dispatch(ThreadActions.selectThread(thread));
	}
}