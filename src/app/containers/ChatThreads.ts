import { Inject, Component } from '@angular/core';
import { AppStore } from '../app.store';
import { Store } from 'redux';
import { Thread } from '../models';
import { ThreadActions } from '../actions';

@Component({
	selector: 'chat-threads',
	templateUrl: './ChatThreads.html'
})

export default class ChatThreads {}