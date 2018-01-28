import React from 'react';
import CoordinatesDisplay from '../coordinates_display/coordinates_display.js';
import RefreshPanel from '../refresh_panel/refresh_panel.js';
import GreetingText from '../greeting_text/greeting_text.js';

class Main extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			error: '',
			json: {}
		}

		this.getISS = () => {
			fetch('http://api.open-notify.org/iss-now.json')
			.then(res => res.json())
			.then(json => this.setState({ json }))
			.catch(error => this.setState({ error }));
		};
	}

	render() {

		const { json } = this.state;
		const position = json['iss_position'];
		const latitude = (position) ? `Latitude: ${position.latitude}` : '';
		const longitude = (position) ? `Longitude: ${position.longitude}`: '';

		const displayClass = (latitude && longitude) ? 'lat-long-box' : '';
		const marginBox = 'margin-box';

		return(
			<div>
				<GreetingText 
					className={marginBox}
					text="Hello I Am A Useful View" 
				/>
				<RefreshPanel 
					className={marginBox}
					onChange={this.getISS} 
					buttonlabel="Refresh" 
				/>
				<CoordinatesDisplay 
					latitude={latitude} 
					longitude={longitude} 
					className={displayClass}
				/>
			</div>
		);
	}
}

export default Main