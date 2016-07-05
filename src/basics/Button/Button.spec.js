/* eslint-env mocha */
import React from 'react';
import { shallow } from 'enzyme';
import { assert } from 'chai';
import Button from './Button';
import getTheme from '../../themes/getTheme';

describe('Spec of <Button />', () => {
  const theme = getTheme();
  const shallowWithContext = (node) => shallow(node, { context: { theme }});

  it('should render a button', () => {
    const wrapper = shallowWithContext(
      <Button>Button</Button>
    );
    assert.ok(wrapper.text(), 'Button', 'should say button.');
    assert.ok(wrapper.is('button'), 'should match a button element.');
  });

  it('should render a link when href is provided', () => {
    const wrapper = shallowWithContext(
      <Button href="http://bing.com">Button</Button>
    );
    assert.ok(wrapper.text(), 'Button', 'should say button.');
    assert.ok(wrapper.is('a'), 'should match a <a> element.');
  });
  it('should render any container element');
  it('should render children');
  it('should render a disabled button when disabled={true}');
  it('should render a dummy link button when href is provided and disabled={true}');
  it('could be styelabe');
  it('could overrides a default style');
  it('could pass through other html attributes');
});
