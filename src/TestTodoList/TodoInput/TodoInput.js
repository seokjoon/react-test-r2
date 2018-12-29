import React from 'react';
import styles from './TodoInput.scss';
import classNames from 'classnames/bind';

const st = classNames.bind(styles);

const TodoInput = ({value, onChange, onInsert}) => {

	const handleKeyPress = (e) => {
		if(e.key === 'Enter') onInsert();
	};

	return (
		<div className={st('todo-input')}>
			<input onChange={onChange} value={value} onKeyPress={handleKeyPress}/>
			<div className={st('add-button')} onClick={onInsert}>ADD</div>
		</div>
	);
};

export default TodoInput;