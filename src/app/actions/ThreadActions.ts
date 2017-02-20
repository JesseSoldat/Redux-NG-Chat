import { Action, ActionCreator } from 'redux';
import { User, Message, Thread } from '../models';

import { uuid } from '../util/uuid';

export const ADD_THREAD = '[Thread] Add';
export interface AddThreadAction extends Action {
	thread: Thread;
}
export const addThread: ActionCreator<AddThreadAction> =
	(thread) => ({
		type: ADD_THREAD,
		thread: thread
	});