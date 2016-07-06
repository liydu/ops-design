import React, { Component, PropTypes } from 'react';

class Button extends Component {
  static propTypes = {
    children: PropTypes.node,
    href: PropTypes.string,
    disabled: PropTypes.bool,
    type: PropTypes.string,
    onClick: PropTypes.func,
  };

  handleClick(ev) {
    if (!this.props.disabled) this.props.onClick(ev);
  }

  render() {
    const { children, href, disabled, type, ...other } = this.props;

    const hasHref = !!href;
    // If it's a disabled link button, return a <span> instead
    // And without other props
    if (hasHref && disabled) {
      return (
        <span {...other}>{children}</span>
      );
    }

    // The element is an <a> if it contains href attribute
    const Element = hasHref ? 'a' : 'button';
    // Assign other html attributes onto it
    const buttonProps = {
      ...other,
      disabled,
      href,
      type,
      onClick: ::this.handleClick,
    };

    return (
      <Element {...buttonProps}>{children}</Element>
    );
  }
}

export default Button;

