import React, {Component} from 'react';
import './RefComScroll.css';

class RefComScroll extends Component {

	scrollToBottom = () => {
		//const clientHeight = this.box.clientHeight;
		//const scrollHeight = this.box.scrollHeight;
		const { scrollHeight, clientHeight } = this.box;
		this.box.scrollTop = scrollHeight - clientHeight;
	};

	render() {
		return (
			<div className="scroll" ref={(ref) => {this.box=ref}}>
				<div className="scroll_inner" />
			</div>
		);
	}
}

export default RefComScroll;