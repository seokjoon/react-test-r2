import React, {Component} from 'react';
//import CounterContainer from './CounterContainer';
import Buttons from '../components/Buttons';
import CounterListContainer from './CounterListContainer';
import getRandomColor from '../lib/getRandomColor';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ReduxCounterMulti extends Component {
	render() {

		const { onCreate, onRemove } = this.props;

		return (
			<div className="App">
				<Buttons onCreate={onCreate} onRemove={onRemove} />
				<CounterListContainer/>
			</div>
		);
	}
}

const mapToDispatch = (dispatch) => ({
	onCreate: () => dispatch(actions.create(getRandomColor())),
	onRemove: () => dispatch(actions.remove()),
});

//export default ReduxCounterMulti;
export default connect(null, mapToDispatch)(ReduxCounterMulti);