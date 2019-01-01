import React, {Component} from 'react';
import TodoItem from "../TodoItem";

class TodoList extends Component {

	shouldComponentUpdate(nextProps, nextState, nextContext) {
		return this.props.todos !== nextProps.todos;
	}

	render() {
		const { todos, onRemove, onToggle } = this.props;
		const todoList = todos.map((todo) => (
				<TodoItem
					done={todo.get('done')}
					key={todo.get('id')}
					onRemove={() => onRemove(todo.get('id'))}
					onToggle={() => onToggle(todo.get('id'))}
				>
					{todo.get('text')}
				</TodoItem>
			),
		);

		return (
			<div>
				{todoList}
			</div>
		);
	}
}

export default TodoList;