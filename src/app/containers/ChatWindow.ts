import { Inject, Component, ElementRef } from '@angular/core';
import { AppStore } from '../app.store';
import { Store } from 'redux';
import { User, Thread } from '../models';
import { ThreadActions } from '../actions';
import { AppState, getCurrentThread, getCurrentUser } from '../reducers';
import ChatMessage from '../components/ChatMessage';
@Component({
	selector: 'chat-window',
	templateUrl: './ChatWindow.html'
})

export default class ChatWindow {
	currentThread: Thread;
	draftMessage: { text: string };
	currentUser: User;

	constructor(@Inject(AppStore) private store: Store<AppState>,
							private el: ElementRef){
		store.subscribe(() => this.updateState());
		this.updateState();
		this.draftMessage = { text: ''};
	}

	updateState(){
		let state = this.store.getState();
		console.log(state);
		this.currentThread = getCurrentThread(state);
		this.currentUser = getCurrentUser(state);
		this.scrollToBottom();
	}

	scrollToBottom(): void {
		let scrollPane: any = this.el
			.nativeElement.querySelector('.msg-container-base');

		if(scrollPane){
			setTimeout( () => scrollPane.scrollTop = scrollPane.scrollHeight);			
		}
	}
	sendMessage(): void {
		this.store.dispatch(ThreadActions.addMessage(
			this.currentThread,
			{
				author: this.currentUser,
				isRead: true,
				text: this.draftMessage.text
			}
			));
			this.draftMessage = { text: ''};
	}

	onEnter(event: any): void {
		this.sendMessage();
		event.preventDefault();
	}

}