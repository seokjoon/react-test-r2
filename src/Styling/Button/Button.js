import React from 'react';
import styles from './Button.scss';
import classNames from 'classnames/bind';

const st = classNames.bind(styles);

const Button = ({children, ...rest}) => {
	return (
		<div className={st('button')} {...rest}>
			{children}
		</div>
	);
};

export default Button;