import React, {Component} from 'react';
import PageTemplate from "./PageTemplate";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const initialTodos = new Array(3).fill(0).map((foo, index) => (
	{ done: false, id: index,	text: `schedule ${index}`, }
));

class TestTodoList extends Component {

	state = {
		input: '',
		todos: initialTodos,
	};

	id = 1;
	getId = () => {
		return ++this.id;
	};

	handleChange = (e) => {
		const { value } = e.target;
		this.setState({ input: value });
	};

	handleInsert = () => {
		const { input, todos } = this.state;

		const newTodo = {
			done: false,
			id: this.getId(),
			text: input,
		};

		this.setState({
			input: '',
			todos: [...todos, newTodo],
		});
	};

	handleRemove = (id) => {
		const { todos } = this.state;
		const index = todos.findIndex(todo => todo.id === id);
		this.setState({
			todos: [
				...todos.slice(0, index),
				...todos.slice(index + 1, todos.length),
			],
		});
	};

	handleToggle = (id) => {
		const { todos } = this.state;
		const index = todos.findIndex(todo => todo.id === id);
		const toggled = {
			...todos[index],
			done: !todos[index].done,
		};

		this.setState({
			todos: [
				...todos.slice(0, index),
				toggled,
				...todos.slice(index + 1, todos.length)
			],
		});
	};

	render() {
		const { input, todos } = this.state;
		const { handleChange, handleInsert, handleRemove, handleToggle } = this;

		return (
			<div>
				<PageTemplate>
					<TodoInput onChange={handleChange} onInsert={handleInsert} value={input} />
					<TodoList todos={todos} onToggle={handleToggle} onRemove={handleRemove} />
				</PageTemplate>
			</div>
		);
	}
}

export default TestTodoList;