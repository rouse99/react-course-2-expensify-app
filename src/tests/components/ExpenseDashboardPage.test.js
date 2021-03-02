import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashBoardPage from '../../components/ExpenseDashboardPage';

test('should render ExpenseDashboardPage correctly', () => {
    const wrapper = shallow(<ExpenseDashBoardPage />);
    expect(wrapper).toMatchSnapshot();
});