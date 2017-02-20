import { Action } from 'redux';
import { Thread, Message } from '../models';
import { createSelector } from 'reselect';

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
