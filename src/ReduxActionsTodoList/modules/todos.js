import { Map, List } from 'immutable';
import { handleActions, createAction } from 'redux-actions';

const INSERT = 'todos/INSERT';
const REMOVE = 'todos/REMOVE';
const TOGGLE = 'todos/TOGGLE';

export const insert = createAction(INSERT);
export const remove = createAction(REMOVE);
export const toggle = createAction(TOGGLE);

const initialState  = List([
	Map({
		done: true,
		id: 0,
		text: 'learning react',
	}),
	Map({
		done: false,
		id: 1,
		text: 'component styling',
	}),
]);

export default handleActions({
	[INSERT]: (state, action) => {
		const { done, id, text } = action.payload;
		return state.push(Map({
			done,
			id,
			text,
		}));
	},
	[REMOVE]: (state, action) => {
		const { payload: index } = action;
		return state.delete(index);
	},
	[TOGGLE]: (state, action) => {
		const { payload: index } = action;
		return state.updateIn([index, 'done'], done => !done);
	},
}, initialState);