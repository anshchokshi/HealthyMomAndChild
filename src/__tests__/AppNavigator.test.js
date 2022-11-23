import React from 'react';
import {create} from 'react-test-renderer'
import { fireEvent, render } from "@testing-library/react-native"
import UserDash from '../screens/UserDash';


describe('User Dash', () => {
  const dash = create(<UserDash />)
  

  it('User Dash is rendered correctly', () => {
    expect(dash.toJSON()).toMatchSnapshot()
    
  });
  it('Navigate to fetal screen', () => {
    const navigate = jest.fn();
    const { getByTestId } = render(<UserDash navigation={{navigate}}/>);
    fireEvent.press(getByTestId('baby-development'));
    expect(navigate).toHaveBeenCalledWith('Fetal Screen');
  });

  it('Navigate to weight gain and blood pressure screen', () => {
    const navigate = jest.fn();
    const { getByTestId } = render(<UserDash navigation={{navigate}}/>);
    fireEvent.press(getByTestId('weight-gain'));
    expect(navigate).toHaveBeenCalledWith('Summary');
  });

  it('Navigate to appointments screen', () => {
    const navigate = jest.fn();
    const { getByTestId } = render(<UserDash navigation={{navigate}}/>);
    fireEvent.press(getByTestId('appointments'));
    expect(navigate).toHaveBeenCalledWith('Appointment');
  });

  it('Navigate to related words screen', () => {
    const navigate = jest.fn();
    const { getByTestId } = render(<UserDash navigation={{navigate}}/>);
    fireEvent.press(getByTestId('related-words'));
    expect(navigate).toHaveBeenCalledWith('related words screen');
  });
});
