import 'gsap/CSSPlugin';

import * as React from 'react';
import { Link } from 'gatsby';
import TimelineLite from 'gsap/TimelineLite';
import classnames from 'classnames';

import { ArrowRight, ArrowSubmit, Cross } from '../icons/Icons';

import s from './UenoButton.scss';

export class UenoButton extends React.Component<any, any> {
  // static propTypes = {
  //   to: PropTypes.oneOfType([
  //     PropTypes.string,
  //     PropTypes.shape({
  //       pathname: PropTypes.string,
  //       state: PropTypes.object,
  //     }),
  //   ]),
  //   href: PropTypes.string,
  //   onClick: PropTypes.func,
  //   arrow: PropTypes.bool,
  //   arrowBack: PropTypes.bool,
  //   children: PropTypes.node,
  //   className: PropTypes.string,
  //   white: PropTypes.bool,
  //   noAnimation: PropTypes.bool,
  //   isDiv: PropTypes.bool,
  //   disabled: PropTypes.bool,
  //   submit: PropTypes.bool,
  //   semiBold: PropTypes.bool,
  //   hasCross: PropTypes.bool,
  //   ariaLabel: PropTypes.string,
  // };

  static defaultProps = {
    onClick: null,
    arrow: true,
  };
  hostEl: any;
  timer: any;

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  onMouseEnter = ({ force = false } = {}) => {
    if (this.props.noAnimation && !force) {
      return;
    }

    const t = new TimelineLite();
    const ease = 'Power4.easeInOut';
    const el = this.hostEl;
    const hover = el.querySelector(`.${s.button__overlay}`);
    const arrow = el.querySelector('svg[data-type=arrow]');
    const text = el.querySelector(`.${s.button__text}`);
    const duration = 0.8;

    this.timer = setTimeout(() => {
      t.fromTo(hover, duration, { x: '-103%' }, { x: '-30%', ease })
        .fromTo(arrow, duration, { x: '0' }, { x: '-15px', ease }, '-=0.8')
        .fromTo(text, duration, { x: '0' }, { x: '20px', ease }, '-=0.8');
    }, 40);
  };

  onFocus = () => {
    // finish the 'slide ' animation for click/focus
    this.onMouseLeave();

    // delay workaround for 'tab' focusing
    // we set the 'enter' animation if we're not transitioning away
    this.timer = setTimeout(() => {
      this.onMouseEnter();
    }, 600); // UIStore.PAGE_TRANSITION_TIME
  };

  onMouseLeave = ({ force = false } = {}) => {
    if (this.props.noAnimation && !force) {
      return;
    }
    if (this.timer) {
      clearTimeout(this.timer);
    }

    const t = new TimelineLite();
    const ease = 'Power4.easeInOut';
    const el = this.hostEl;
    const hover = el.querySelector(`.${s.button__overlay}`);
    const arrow = el.querySelector('svg[data-type=arrow]');
    const text = el.querySelector(`.${s.button__text}`);
    const duration = 0.8;

    t.to(hover, duration, { x: '103%', ease })
      .to(arrow, duration, { x: '0', ease }, '-=0.8')
      .to(text, duration, { x: '0', ease }, '-=0.8');
  };

  renderContent() {
    const { submit, arrowBack, children, hasCross } = this.props;

    const cross = hasCross ? (
      <Cross className={s.button__cross} />
    ) : (
      <ArrowRight
        className={classnames(s.button__arrowRight, {
          [s.arrowBack]: arrowBack,
        })}
      />
    );

    const icon = submit ? (
      <ArrowSubmit className={s.button__arrowSubmit} />
    ) : (
      cross
    );

    return (
      <span
        className={s.button__flex}
        ref={(el: any) => {
          this.hostEl = el;
        }}
      >
        {icon}

        <span key="text" className={s.button__content}>
          <span className={s.button__overlay} />
          <span className={s.button__text}>{children}</span>
        </span>
      </span>
    );
  }

  render() {
    const {
      to,
      arrow,
      arrowBack, // eslint-disable-line
      className,
      white,
      isDiv,
      submit,
      noAnimation, // eslint-disable-line
      hasCross, // eslint-disable-line
      semiBold,
      ariaLabel,
      ...rest
    } = this.props;

    // Some flags
    const isLink = typeof to !== 'undefined';
    const isExternal = this.props.href;

    // Common attributes and event handlers
    const common = {
      ...rest,
      className: classnames(s.button, className, {
        [s.arrow]: arrow,
        [s.white]: white,
        [s.submit]: submit,
        [s.semiBold]: semiBold,
      }),
      onMouseEnter: this.onMouseEnter,
      onMouseLeave: this.onMouseLeave,
      onFocus: this.onFocus,
      onBlur: this.onMouseLeave,
    };

    if (isDiv) {
      return <div {...common as any}>{this.renderContent()}</div>;
    }

    if (isExternal) {
      // http, https, //, mailto, etc.
      return (
        <a
          href={to}
          target="_blank"
          rel="noopener noreferrer"
          {...common as any}
        >
          {this.renderContent()}
        </a>
      );
    }

    if (isLink) {
      // Everything else
      return (
        <Link to={to} aria-label={ariaLabel} {...common as any}>
          {this.renderContent()}
        </Link>
      );
    }

    // Default
    return (
      <button aria-label={ariaLabel} {...common as any}>
        {this.renderContent()}
      </button>
    );
  }
}
