import * as types from './ActionTypes';

export const decrement = () => ({
	type: types.DECREMENT
});

export const increment = () => ({
	type: types.INCREMENT
});

export const setColor = (color) => ({
	color,
	type: types.SET_COLOR,
});
