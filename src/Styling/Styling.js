import React, {Component, Fragment} from 'react';

import './Styling1.css'; //import style1 from './Styling1.css';

class Styling extends Component {
	render() {

		const style0 = {
			backgroundColor: '#eeeeee',
			border: 'solid 1px #dddddd',
			width: Math.round(Math.random() * 300) + 50,
		};

		return (
			<Fragment>
				<div style={style0}> Styling </div>
				<div className="div1"> Div1 </div> { /* <div className={style1.div1}> Div1 </div> */ }

			</Fragment>

		);
	}
}

export default Styling;