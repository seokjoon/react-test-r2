import React, {Component} from 'react';
import RefComScroll from './RefComScroll';

class RefCom extends Component {
	render() {
		return (
			<div>
				<RefComScroll ref={(ref) => this.scrollBox=ref} />
				<button onClick={() => this.scrollBox.scrollToBottom()}>toBottom</button>
			</div>
		);
	}
}

export default RefCom;