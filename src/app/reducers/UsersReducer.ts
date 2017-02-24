import { Action } from 'redux';
import { User } from '../models';
import { createSelector } from 'reselect';
import { UserActions } from '../actions';

export interface UsersState {
	currentUser: User;
};

const initialState: UsersState = {
	currentUser: null
};

export const UsersReducer = 
	function(state: UsersState = initialState, action: Action): UsersState {
		switch(action.type) {
			case UserActions.SET_CURRENT_USER:
			const user: User = (<UserActions.SetCurrentUserAction>action).user;
				return {
					currentUser: user
				};
			default:
				return state;
		}
	};

export const getUsersState = (state): UsersState => state.users;

export const getCurrentUser = createSelector(
	getUsersState,
	(state: UsersState) => state.currentUser );


