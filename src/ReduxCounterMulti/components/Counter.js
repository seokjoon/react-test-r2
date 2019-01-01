import React from 'react';
import PropTypes from 'prop-types';
import cssCounter from './Counter.module.css';

const Counter = ({ number, color, index, onIncrement, onDecrement, onSetColor }) => {
	return (
		<div
			className={cssCounter.Counter}
			onClick={() => onIncrement(index)}
			onContextMenu={(e) => {
				e.preventDefault();
				onDecrement(index);
			}}
			onDoubleClick={() => onSetColor(index)}
			style={{ backgroundColor: color }}
		>
			{number}
		</div>
	);
};

Counter.propTypes = {
	color: PropTypes.string,
	index: PropTypes.number,
	number: PropTypes.number,
	onDecrement: PropTypes.func,
	onIncrement: PropTypes.func,
	onSetColor: PropTypes.func,
};

Counter.defaultProps = {
	color: 'black',
	index: 0,
	number: 0,
	onIncrement: () => console.warn('onIncrement not defined'),
	onDecrement: () => console.warn('onDecrement not defined'),
	onSetColor: () => console.warn('onSetColor not defined'),
};

export default Counter;

/* const Counter = ({number, color, onIncrement, onDecrement, onSetColor}) => {
	return (
		<div className={cssCounter.Counter} onClick={onIncrement} onContextMenu={(e) => {e.preventDefault(); onDecrement();}} onDoubleClick={onSetColor} style={{background:color}}>
			{number}
		</div>
	);
};

Counter.propTypes = {
	color: PropTypes.string,
	number: PropTypes.number,
	onDecrement: PropTypes.func,
	onIncrement: PropTypes.func,
	onSetColor: PropTypes.func,
};

Counter.defaultProps = {
	number: 0,
	color: 'black',
	onIncrement: () => console.warn('onIncrement not defined'),
	onDecrement: () => console.warn('onDecrement not defined'),
	onSetColor: () => console.warn('onSetColor not defined'),
};

export default Counter; */