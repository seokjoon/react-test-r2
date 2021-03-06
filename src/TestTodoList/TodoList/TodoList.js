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
					done={todo.done}
					key={todo.id}
					onRemove={() => onRemove(todo.id)}
					onToggle={() => onToggle(todo.id)}
				>
					{todo.text}
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