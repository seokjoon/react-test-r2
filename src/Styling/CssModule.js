import React, {Component, Fragment} from 'react';
import styles from './CssModule.module.css';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';

const st = classNamesBind.bind(styles);

class CssModule extends Component {
	render() {
		return (
			<Fragment>
				<div className={styles.box}></div>
				<div className={[styles.box, styles.bgBlue].join(' ')}></div>
				<div className={classNames(styles.box, styles.bgGreen)}></div>
				<div className={st('box', 'bgYellow')}></div>
				<div className={st('box', { 'bgGray': true })}></div>
			</Fragment>
		);
	}
}

export default CssModule;