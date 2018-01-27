import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main.js';
import React from 'react';

configure({ adapter: new Adapter() });

const testBasicMount = () => {

	const wrapper = mount(<Main />);
	console.log(wrapper.debug());

	expect(wrapper.length).toEqual(1);	
}

describe('some shit', () => {
	test('la la', testBasicMount);
});