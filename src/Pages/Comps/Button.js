import React, {Component} from 'react';
import injectSheet from 'react-jss';
import '../../index.css';
import { isMobile } from 'react-device-detect';

var styles;



styles = {
  fadeOut: {
    animationDirection: (props) => props.direction,
  },
  outlined: {
    composes: '&fadeOut',
    border: '2px solid white',
    background: 'transparent',
    cursor: "pointer",
    paddingLeft: '1.5vw',
    paddingRight: '1.5vw',
    paddingTop: '0.6vw',
    paddingBottom: '0.6vw',
    borderRadius: '1.5vw',
    marginTop: props => props.margin,
    transition: 'background ease 0.4s, color ease 0.4s',
    '&:focus': {
      outline: 0
    },
    '&:hover': {
      transition: 'background ease 0.4s, color ease 0.4s',
      background: 'white',
      color: props => props.color,
      '&:disabled': {
        pointerEvents:'none'
      }
    }
  },
  filled: {
    composes: '&fadeOut',
    border: '2px solid white',
    background: 'white',
    paddingLeft: '1.5vw',
    paddingRight: '1.5vw',
    paddingTop: '0.6vw',
    paddingBottom: '0.6vw',
    borderRadius: '1.5vw',
    color: props => props.color,
    marginTop: props => props.margin,
    transition: 'background ease 0.4s, color ease 0.4s',
    '&:hover': {
      transition: 'background ease 0.4s, color ease 0.4s',
      background: 'transparent',
      color: 'white',
    },
    '&:disabled': {
      pointerEvents:'none'
    }
  },
  nav: {
    composes: '&fadeOut',
    animationName: 'fadeIn',
    animationDuration: '2s',
    background: 'transparent',
    border: 'transparent',
    marginBottom: '1.66vw',
    display: "block",
    '&:disabled': {
      opacity: '0.4',
      animationName: 'fadeInDis',
      animationDuration: '2s',
    },
  },
  nested: {
    composes: '$fadeOut',
    animationName: 'fadeInNested',
    animationDuration: '2s',
    background: 'transparent',
    border: 'transparent',
    marginBottom: '1.66vw',
    marginLeft: '0.833vw',
    opacity: '0.8',
    textAlign: 'left',
    display: "block",
    '&:disabled': {
      opacity: '0.4',
      animationName: 'fadeInDis',
      animationDuration: '2s',
    },
  },
  '@keyframes fadeIn': {
    from: {
      opacity: 0,
      transform: 'translate3d(0, -50%, 0)',
    },
    to: {
      opacity: 1,
      transform: "translate3d(0, 0, 0)",
    }
  },
  '@keyframes fadeInNested': {
    from: {
      opacity: 0,
      transform: 'translate3d(0, -50%, 0)',
    },
    to: {
      opacity: 0.8,
      transform: "translate3d(0, 0, 0)",
    }
  },
  '@keyframes fadeInDis': {
    from: {
      opacity: 0,
      transform: 'translate3d(0, -50%, 0)',
    },
    to: {
      opacity: 0.4,
      transform: "translate3d(0, 0, 0)",
    }
  },
  indicator: {
    marginTop: '6px',
    width: '6px',
    height: '6px',
    border: '2px solid white',
    borderRadius: '50%',
    background: props => props.filled ? 'white' : 'transparent',
    cursor: 'pointer',
  }
}


class Button extends Component {

  render() {
    return(
      <button disabled={this.props.disabled} className={this.props.filled ? this.props.classes.filled : this.props.classes.outlined} onClick={this.props.onClick}>{this.props.text}</button>
    )
  }
}

Button.defaultProps = {
  color: '#00ACC1',
  margin: 0,
  disabled: false
};

export default injectSheet(styles)(Button);

class Indicator extends Component {
  render() {
    return(
      <div className={this.props.classes.indicator} onClick={this.props.onClick}></div>
    )
  }
}

Indicator.defaultProps = {
  filled: false
}

export const Indi = injectSheet(styles)(Indicator)

class Nav extends Component {
  render() {
    return(
      <button className={this.props.nested ? this.props.classes.nested : this.props.classes.nav} disabled={this.props.disabled} onClick={this.props.onClick}>{this.props.text}</button>
    )
  }
}

Nav.defaultProps = {
  direction: 'normal',
}

export const Navigation = injectSheet(styles)(Nav);
