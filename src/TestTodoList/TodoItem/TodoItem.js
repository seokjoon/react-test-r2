import React, {Component} from 'react';
import styles from './TodoItem.scss';
import classNames from 'classnames/bind';

const st = classNames.bind(styles);

class TodoItem extends Component {
	render() {

		const {done, children, onToggle, onRemove} = this.props;

		return (
			<div className={st('todo-item')} onClick={onToggle}>
				<input className={st('tick')} type="checkbox" checked={done} readOnly />
				<div className={st('text', {done})}>{children}</div>
				<div className={st('delete')} onClick={(e) => {
					onRemove();
					e.stopPropagation();
				}}>[DELETE]</div>
			</div>
		);
	}
}

export default TodoItem;