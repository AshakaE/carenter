import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import BookingsCard from '../../components/BookingsCard';

describe('BookingsCard', () => {
  it('renders correctly', () => {
    const id = 1;
    const name = 'test';
    const carModel = 'test';
    const carName = 'test';
    const userName = 'test';
    const price = 1000;
    const carId = 1;
    const date = 'test';
    const tree = renderer
      .create(
        <BrowserRouter>
          <BookingsCard
            item={{
              name,
              carModel,
              carName,
              userName,
              price,
              carId,
              id,
              date,
            }}
          />
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
