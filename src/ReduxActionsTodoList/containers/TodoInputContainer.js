import React, {Component} from 'react';
import TodoInput from "../components/TodoInput";

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import * as inputActions from '../modules/input';
import * as todosActions from '../modules/todos';

class TodoInputContainer extends Component {

	id = 1;
	getId = () => {
		return ++this.id;
	};

	handleChange = (e) => {
		const { value } = e.target;
		const { InputActions } = this.props;
		InputActions.setInput(value);
	};

	handleInsert = () => {
		const { InputActions, TodosActions, value } = this.props;
		const todo = {
			done: false,
			id: this.getId(),
			text: value,
		};
		TodosActions.insert(todo);
		InputActions.setInput('');
	};

	render() {

		const { value } = this.props;
		const { handleChange, handleInsert } = this;

		return (
			<TodoInput
				onChange={handleChange}
				onInsert={handleInsert}
				value={value}
			/>
		);
	}
}

export default connect(
	(state) => ({
		value: state.input.get('value')
	}),
	(dispatch) => ({
		InputActions: bindActionCreators(inputActions, dispatch),
		TodosActions: bindActionCreators(todosActions, dispatch),
	}),
)(TodoInputContainer);