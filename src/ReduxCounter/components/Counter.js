import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

const Counter = ({color, number, onDecrement, onIncrement, onSetColor}) => {
	return (
		<div
			className="Counter"
			onClick={onIncrement}
			onContextMenu={(e) => {
				e.preventDefault();
				onDecrement();
			}}
			onDoubleClick={onSetColor}
			style={{backgroundColor: color}}
		>
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
	color: 'black',
	number: 0,
	onDecrement: () => console.warn('onDecrement not defined'),
	onIncrement: () => console.warn('onIncrement not defined'),
	onSetColor: () => console.warn('onSetColor not defined'),
};

export default Counter;
