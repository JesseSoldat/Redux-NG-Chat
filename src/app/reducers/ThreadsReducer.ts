import { Action } from 'redux';
import { Thread, Message } from '../models';
import { createSelector } from 'reselect';
import { ThreadActions } from '../actions';

export interface ThreadsEntities {
	[id: string]: Thread;
};

export interface ThreadsState {
	ids: string[];
	entities:  ThreadsEntities;
	currentThreadId?: string;
};

const initialState: ThreadsState = {
	ids: [],
	currentThreadId: null,
	entities: {}
};

export const ThreadsReducer =
	function(state: ThreadsState = initialState, action: Action): ThreadsState {
		switch(action.type){
			case ThreadActions.ADD_THREAD: {
				const thread = (<ThreadActions.AddThreadAction>action).thread;

				if(state.ids.includes(thread.id)){
					return state;
				}

				return {
					ids: [ ...state.ids, thread.id],
					currentThreadId: state.currentThreadId,
					entities: Object.assign({}, state.entities, {[thread.id]: thread})
				};
			}

			case ThreadActions.ADD_MESSAGE: {
				const thread = (<ThreadActions.AddMessageAction>action).thread;
				const message = (<ThreadActions.AddMessageAction>action).message;
				 // special case: if the message being added is in the current thread, then
      	// mark it as read
      	const isRead = message.thread.id === state.currentThreadId ? 
      			true : message.isRead;

      	const newMessage = Object.assign({}, message, { isRead: isRead });
      	// grab the old thraed from entities
      	const oldThread = state.entities[thread.id];
      	// create a new thread which has our newMessage
      	const newThread = Object.assign({}, oldThread, {
      		messages: [...oldThread.messages, newMessage]
      	});

      	return {
      		ids: state.ids, //unchanged
      		currentThreadId: state.currentThreadId, //unchanged
      		entities: Object.assign({}, state.entities, {
      			[thread.id]: newThread
      		})
      	};

			}

			default:
				return state;
		}
	}
