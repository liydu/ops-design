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

  it('should render children', () => {
    const children = <div>Button Children</div>;
    const wrapper = shallowWithContext(
      <Button>{children}</Button>
    );
    assert.ok(wrapper.contains(children), 'should contain children');
  });

  it('should render a disabled button when disabled={true}', () => {
    const wrapper = shallowWithContext(
      <Button disabled>Button</Button>
    );
    assert.ok(wrapper.text(), 'Button', 'should say button');
    assert.ok(wrapper.is('button[disabled]'), 'should be a disabled button element');

    // Should not be clickable
    let clicked = false;
    wrapper.setProps({
      onClick: () => {
        clicked = true;
        return clicked;
      },
    });
    wrapper.simulate('click');
    assert.strictEqual(clicked, false, 'should not trigger the click');
  });

  it('should render a dummy link button when href is provided and disabled={true}', () => {
    const wrapper = shallowWithContext(
      <Button href="http://bing.com" disabled>Button</Button>
    );
    assert.ok(wrapper.text(), 'Button', 'should say button');
    assert.notOk(wrapper.is('a'), 'should not match an <a> element');
    assert.notOk(wrapper.is('button'), 'should not be a button element');
    // A dummy link is just plain text
    assert.notOk(wrapper.is('[href]'), 'should not have href attribute');
  });

  it('should be styelabe');
  it('should overrides a default style');

  it('should set the button type', () => {
    const wrapper = shallowWithContext(
      <Button type="submit">Button</Button>
    );
    assert.ok(wrapper.text(), 'Button', 'should say button');
    assert.ok(wrapper.is('button[type="submit"]'), 'should have the type attribute');
    // Set button type as reset
    wrapper.setProps({ type: 'reset' });
    assert.ok(wrapper.is('button[type="reset"]'), 'should have the type attribute');
  });

  it('should pass through other html attributes', () => {
    const wrapper = shallowWithContext(
      <Button name="hello">Button</Button>
    );

    assert.ok(wrapper.is('button[name="hello"]'), 'should have the name attribute');
  });
});
