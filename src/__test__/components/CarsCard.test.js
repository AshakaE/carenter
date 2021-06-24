import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import CarsCard from '../../components/CarsCard';

describe('CarsCard', () => {
  it('renders correctly', () => {
    const id = 1;
    const name = 'test';
    const model = 'test';
    const year = 2021;
    const imageUrl = 'test';
    const tree = renderer
      .create(
        <BrowserRouter>
          <CarsCard
            item={{
              name,
              model,
              imageUrl,
              id,
              year,
            }}
          />
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
