import React from 'react';

const RefreshPanel = ({ onChange, buttonlabel, className }) => (
	<div  className={className}>
		<button onClick={onChange}>{buttonlabel}</button>
	</div>
);

export default RefreshPanel;