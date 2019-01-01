import React from 'react';
import Counter from './Counter';
import PropTypes from 'prop-types';
import './CounterList.module.css';

const CounterList = ({ counters, onIncrement, onDecrement, onSetColor }) => {

	const counterList = counters.map((counter, i) => (
		<Counter
			key={i}
			index={i}
			{...counter}
			onDecrement={onDecrement}
			onIncrement={onIncrement}
			onSetColor={onSetColor}
		/>
	));

	return (
		<div className="CounterList">
			{counterList}
		</div>
	);
};

CounterList.propTypes = {
	counters: PropTypes.arrayOf(PropTypes.shape({color: PropTypes.string, number: PropTypes.number})),
	onDecrement: PropTypes.func,
	onIncrement: PropTypes.func,
	onSetColor: PropTypes.func,
};

CounterList.defaultProps = {
	counters: [],
};

export default CounterList;