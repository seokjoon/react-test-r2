import React, {Fragment} from 'react';

const ComFunc = ({foo = 'bar'}) => {
	return (
		<Fragment>{foo}</Fragment>
	);
};

/* const ComFunc = ({foo = 'bar'}) => (
	<Fragment>{foo}</Fragment>
); */

export default ComFunc;
