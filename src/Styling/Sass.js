import React from 'react';
import styles from './Sass.scss';
import classNamesBind from 'classnames/bind';

const st = classNamesBind.bind(styles);

const Sass = () => {
	const isBlue = true;

	return (
		<div className={st('box', { blue: isBlue })}>
			<div className={st('box-inside')}></div>
		</div>
	);
};

export default Sass;