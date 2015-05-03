import React from 'react';

class CreateBtn extends React.Component {
	render() {
		return (
			<div className='ui-btn' onClick={this.props.onClick}>+</div>
		);
	}
};

export default CreateBtn;