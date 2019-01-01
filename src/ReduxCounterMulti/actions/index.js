import * as types from './ActionTypes';

export const create = (color) => ({
	color,
	type: types.CREATE,
});

export const decrement = (index) => ({
	index,
	type: types.DECREMENT,
});

export const increment = (index) => ({
	index,
	type: types.INCREMENT,
});

export const remove = () => ({
	type: types.REMOVE,
});

export const setColor = ({index, color}) => ({
	color,
	index,
	type: types.SET_COLOR,
});
