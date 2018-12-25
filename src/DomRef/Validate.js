import React, {Component} from 'react';

class Validate extends Component {

	state = {
		clicked: false,
		password: '',
		validated: false,
	};

	handleChange = (e) => {
		this.setState({
			password: e.target.value,
		});
	};

	handleButtonClick = () => {
		this.setState({
			clicked: true,
			validated: this.state.password === '000',
		});
		this.input.focus();
	};

	render() {

		const styleFailure = { backgroundColor: 'lightcoral', };
		const styleNone = {};
		const styleSuccess = { backgroundColor : 'lightgreen', };

		return (
			<div>
				<input
					onChange={this.handleChange}
					style={(this.state.clicked) ? ((this.state.validated) ? styleSuccess : styleFailure) : styleNone}
					ref={(ref) => this.input=ref}
					type="password"
					value={this.state.password}
				/>
				<button onClick={this.handleButtonClick}>validate</button>
			</div>
		);
	}
}

export default Validate;