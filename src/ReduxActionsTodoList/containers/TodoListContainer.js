import React, {Component} from 'react';
import TodoList from '../components/TodoList';

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import * as todosActions from '../modules/todos';

class TodoListContainer extends Component {

	handleRemove = (id) => {
		const { TodosActions } = this.props;
		TodosActions.remove(id);
	};

	handleToggle = (id) => {
		const { TodosActions } = this.props;
		TodosActions.toggle(id);
	};

	render() {

		const { todos } = this.props;
		const { handleRemove, handleToggle } = this;

		return (
			<TodoList
				todos={todos}
				onRemove={handleRemove}
				onToggle={handleToggle}
			/>
		);
	}
}

export default connect(
	(state) => ({
		todos: state.todos,
	}),
	(dispatch) => ({
		TodosActions: bindActionCreators(todosActions, dispatch)
	}),
)(TodoListContainer);