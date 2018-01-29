import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main.js';
import React from 'react';
import CoordinatesDisplay from '../coordinates_display/coordinates_display.js';
import GreetingText from '../greeting_text/greeting_text.js';
import RefreshPanel from '../refresh_panel/refresh_panel.js';

configure({ adapter: new Adapter() });

// ONE ---

const tautology = () => {
	expect(1).toEqual(1);
};

describe('tautology', () => {
	test('can one possibly equal one?', tautology);
});

// TWO ---

jest.mock('../coordinates_display/coordinates_display.js', () => {
	return props => <div>Coordinates Display Mock</div>
});	

jest.mock('../greeting_text/greeting_text.js', () => {
	return props => <div>Greeting Text Mock</div>
});	

jest.mock('../refresh_panel/refresh_panel.js', () => {
	return props => <div onClick={props.onChange}>Refresh Panel Mock</div>
});	

global.fetch = jest.fn();

const testClick = () => {

	const wrapper = mount(<Main />);
	console.log(wrapper.debug());
	expect(wrapper.length).toEqual(1);

	fetch.mockReturnValueOnce(Promise.resolve());

	wrapper.childAt(0).childAt(1).simulate('click');
	expect(fetch).toHaveBeenCalledTimes(1);	
};

// THREE ---

describe('components/main', () => {
	test('full render suceeds, and responds to a click', testClick);
});

const testJsonInState = () => {
	const modelJson = { 
		'iss_position': {
			latitude: '20',
			longitude: '20'
		} 
	};

	const wrapper = mount(<Main />);
	wrapper.setState({ error: '', json: modelJson });
	console.log(wrapper.state());
	expect(wrapper.length).toEqual(1);
};

describe('components/main part two', () => {
	test('main handles valid json', testJsonInState);
});