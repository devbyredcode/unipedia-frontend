import React from 'react';
import renderer from 'react-test-renderer';
import CButton from '../index';

describe('CButton Unit Testing', () => {
    it('CButton should render a button', () => {
        let component = renderer.create(<CButton/>);
        expect(component).toMatchSnapshot();
    });
});