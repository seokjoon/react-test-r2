import React, {Component} from 'react';

class LoopMap extends Component {

	state = {
		name: '',
		names: ['a', 'b', 'c', 'd'],
	};

	handleChange = (e) => {
		this.setState({ name: e.target.value });
	};

	handleInsert = () => {
		this.setState({
			name: '',
			names: this.state.names.concat(this.state.name),
		});
	};

	handleRemove = (index) => {
		const { names } = this.state;
		this.setState({
			/* names: [
				...names.slice(0, index),
				...names.slice(index + 1, names.length),
			], */
			names: names.filter((item, i) => i !== index)
		});
	};

	render() {
		const nameList = this.state.names.map((name, index) => (
			<li key={index} onDoubleClick={() => this.handleRemove(index)}>{name}</li>
		));

		return (
			<div>
				<input onChange={this.handleChange} value={this.state.name} />
				<button onClick={this.handleInsert}>INSERT</button>
				<ul>{nameList.reverse()}</ul>
			</div>
		);
	}
}

export default LoopMap;