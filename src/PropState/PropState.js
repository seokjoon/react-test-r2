import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';


class PropState extends Component {

	/* constructor(props) {
		super(props);
		this.state = { foo: '' };
	} */

	static defaultProps = {
		nameCom: 'PropState',
		numCom: 0,
	};

	static propTypes = {
		nameCom: PropTypes.string,
		numCom: PropTypes.number.isRequired,
	};

	state = {
		cnt: 0,
		item: {},
		items: [],
	};

	render() {

		const { nameCom, numCom } = this.props;
		const { cnt, /* item, items */ } = this.state;

		return (
			<Fragment>
				{ /* <div>
					{ (typeof null !== "undefined") ? this.props.nameCom + this.props.numCom : null }
				</div>
				<div>
					{ this.state.cnt } &nbsp;
					<button onClick={() => { this.setState({ cnt: this.state.cnt + 1 }) }}>ADD</button>
				</div> */ }
				<div>
					{ (typeof null !== "undefined") ? nameCom + numCom : null }
				</div>
				<div>
					{ cnt } &nbsp;
					<button onClick={() => { this.setState({ cnt: cnt + 1 }) }}>ADD</button>
				</div>
			</Fragment>
		);
	}
}

export default PropState;