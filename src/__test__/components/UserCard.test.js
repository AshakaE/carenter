import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import UserCard from '../../components/UserCard';

describe('UserCard', () => {
  it('renders correctly', () => {
    const test = 'user';
    const tree = renderer
      .create(
        <BrowserRouter>
          <UserCard
            user={test}
          />
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
