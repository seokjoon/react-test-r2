import React from 'react';
import styles from './PageTemplate.scss';
import classNames from 'classnames/bind';

const st = classNames.bind(styles);

const PageTemplate = ({children}) => {
	return (
		<div className={st('page-template')}>
			<h1>todo list</h1>
			<div className={st('content')}>
				{children}
			</div>
		</div>
	);
};

export default PageTemplate;
