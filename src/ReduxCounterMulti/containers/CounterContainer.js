/*
import * as actions from '../actions';
import { connect } from 'react-redux';
import Counter from "../components/Counter";

export function getRandomColor() {
	const colors = [
		'#495057',
		'#f03e3e',
		'#d6336c',
		'#ae3ec9',
		'#7048e8',
		'#4263eb',
		'#1c7cd6',
		'#1098ad',
		'#0ca678',
		'#37b24d',
		'#74b816',
		'#f59f00',
		'#f76707',
	];
	const random = Math.floor(Math.random() * 13);
	return colors[random];
}

const mapDispatchToProps = (dispatch) => ({
	onDecrement: () => dispatch(actions.decrement()),
	onIncrement: () => dispatch(actions.increment()),
	onSetColor: () => {
		const color = getRandomColor();
		dispatch(actions.setColor(color));
	},
});

const mapStateToProps = (state) => ({
	color: state.colorData.color, //state.color,
	number: state.numberData.number, //state.number,
});

const CounterContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Counter);

export default CounterContainer;
*/
