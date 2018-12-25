import React, {Component, Fragment} from 'react';

/**
 * https://reactjs.org/docs/events.html
 */
class EventHandling extends Component {

	state = {
		msg: '',
		username: '',
	};

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value })
	};

	handleClick = () => { console.log(this.state.msg + ':' + this.state.username);
		this.setState({ msg: '', username: '' });
	};

	handleKeyPress = (e) => {
		if(e.key === 'Enter')  this.handleClick();
	};

	render() {

		const test1 = (
			<div>
				<input type="text" name="msg" placeholder="msg" value={this.state.msg} onChange={this.handleChange} /><br/>
				<input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.handleChange} onKeyPress={this.handleKeyPress} /><br/>
				<button onClick={this.handleClick}>reset</button><br/>
			</div>
		);

		return (
			<Fragment>
				{ test1 }
			</Fragment>
		);
	}
}

export default EventHandling;