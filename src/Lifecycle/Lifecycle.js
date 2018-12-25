import React, {Component} from 'react';

class Lifecycle extends Component {

	constructor(props) {
		super(props);
		console.log('constructor');
	}

	myRef = null;

	state = {
		number: 0,
		color: null,
	};

	componentDidMount() {
		console.log('componentDidMount');
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('componentDidUpdate', prevProps, prevState);
		if (snapshot) console.log('업데이트 되기 직전 색상: ', snapshot);
	}

	componentWillUnmount() {
		console.log('componentWillUnmount');
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		console.log('getDerivedStateFromProps');
		if (nextProps.color !== prevState.color) return { color: nextProps.color };
		return null;
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('getSnapshotBeforeUpdate');
		if (prevProps.color !== this.props.color) return this.myRef.style.color;
		return null;
	}

	handleClick = () => { this.setState({ number: this.state.number + 1 }); };

	shouldComponentUpdate(nextProps, nextState) {
		console.log('shouldComponentUpdate', nextProps, nextState);
		return nextState.number % 10 !== 4; //숫자의 마지막 자리가 4면 리렌더링하지 않음
	}

	render() { console.log('render');

		const style = { color: this.props.color };

		return (
			<div>
				<h1 style={style} ref={ref => this.myRef=ref}>
					{this.state.number}
				</h1>
				<p>color: {this.state.color}</p>
				<button onClick={this.handleClick}> ADD </button>
			</div>
		);
	}
}

export default Lifecycle;