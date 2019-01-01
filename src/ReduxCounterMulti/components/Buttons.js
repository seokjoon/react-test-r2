import React from 'react';
import PropTypes from 'prop-types';
import cssButtons from './Buttons.module.css';

const Buttons = ({ onCreate, onRemove }) => {
	return (
		<div className={cssButtons.Buttons}>
			<div className={[cssButtons.btn, cssButtons.add].join(' ')} onClick={onCreate}>ADD</div>
			<div className={[cssButtons.btn, cssButtons.remove].join(' ')} onClick={onRemove}>DELETE</div>
		</div>
	);
};

Buttons.propTypes = {
	onCreate: PropTypes.func,
	onRemove: PropTypes.func,
};

Buttons.defaultProps = {
	onCreate: () => console.warn('onCreate not defined'),
	onRemove: () => console.warn('onRemove not defined'),
};

export default Buttons;