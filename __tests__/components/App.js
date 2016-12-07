/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../../src/client/components/App';
import stores from '../../src/shared/stores';

describe('App', () => {
  it('renders correctly', () => {
    const component = renderer.create(<App stores={stores} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
