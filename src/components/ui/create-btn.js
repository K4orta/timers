import React from 'react';

class CreateBtn extends React.Component {
	render() {
		return (
			<div className='ui-btn' onClick={this._onUse.bind(this)}>+</div>
		);
	}
	_onUse(e) {
		let st = this.props.flux.getStore('timers');
		st.createTimer();
	}
};

export default CreateBtn;