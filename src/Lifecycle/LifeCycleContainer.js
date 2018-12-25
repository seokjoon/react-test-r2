import React, {Component} from 'react';
import Lifecycle from "./Lifecycle";

function getRandomColor() {
	return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class LifeCycleContainer extends Component {

	state = {
		color: '#000000'
	};

	handleClick = () => {
		this.setState({
			color: getRandomColor()
		});
	};

	render() {
		return (
			<div>
				<button onClick={this.handleClick}>랜덤 색상</button>
				<Lifecycle color={this.state.color}/>
			</div>
		);
	}
}

export default LifeCycleContainer;