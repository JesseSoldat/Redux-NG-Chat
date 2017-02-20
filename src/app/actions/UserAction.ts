import { Action, ActionCreator } from 'redux';
import { User } from '../models';

export const SET_CURRENT_USER = '[User] Set Current';
export interface SetCurrentUserAction extends Action {
	user: User;
}