import * as UserActions from './UserAction';
import * as ThreadActions from './ThreadActions';

// export here for object imports
export {
	UserActions,
	ThreadActions
};

// export here for injecting the dependencies (e.g. at bootstrap)
export default [
	UserActions,
	ThreadActions
];
