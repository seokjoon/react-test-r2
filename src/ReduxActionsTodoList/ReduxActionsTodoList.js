import React, {Component} from 'react';
import PageTemplate from "./components/PageTemplate";
import TodoInputContainer from "./containers/TodoInputContainer";
import TodoListContainer from "./containers/TodoListContainer";

class ReduxActionsTodoList extends Component {
	render() {
		return (
			<PageTemplate>
				<TodoInputContainer/>
				<TodoListContainer/>
			</PageTemplate>
		);
	}
}

export default ReduxActionsTodoList;