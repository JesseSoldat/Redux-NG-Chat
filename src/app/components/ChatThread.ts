import { Component, EventEmitter } from '@angular/core';
import { Thread } from '../models';

@Component({
	inputs: ['thread', 'selected'],
	outputs: ['onThreadSelected'],
	selector: 'chat-thread',
	templateUrl: './ChatThread.html'
})

export default class ChatThread {
	thread: Thread;
	selected: boolean;
	onThreadSelected: EventEmitter<Thread>;

	constructor(){
		this.onThreadSelected = new EventEmitter<Thread>();
	}

	clicked(event: any): void {
		this.onThreadSelected.emit(this.thread);
		event.preventDefault();
	}
}