import { Component, OnInit } from '@angular/core';
import { Message } from '../models';

@Component({
	selector: 'chat-message',
	inputs: ['message'],
	templateUrl: './ChatMessage.html'
})

export default class ChatMessage implements OnInit {
	message: Message;
	incoming: boolean;

	ngOnInit(): void {
		this.incoming = !this.message.author.isClient;
	}
}