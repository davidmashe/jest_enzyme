import React from 'react';

const CoordinatesDisplay = ({ latitude, longitude, className }) => (
	<div className={className}>
		<div>
			{latitude}
		</div>
		<div>
			{longitude}
		</div>
	</div>
);


export default CoordinatesDisplay;