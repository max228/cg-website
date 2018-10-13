import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import injectSheet from 'react-jss';
import logo from '../img/logo.svg';
import avatar from '../img/avatar.svg'
import logo1 from '../img/ilimLogo.svg';
import logo2 from '../img/B12Logo.svg';
import logo3 from '../img/collibricon.svg';
import logo4 from '../img/HighLogo.svg';
import logo5 from '../img/logo5.svg';
import logo6 from '../img/logo6.svg';
import logo7 from '../img/logo7.svg';
import '../index.css';
import Button, { Navigation } from './Comps/Button';
var styles = {
  back: {
    width: "100vw",
    height: "100vh",
    minHeight: '56vw',
    position: "absolute",
    background: "#263238",
    zIndex: 0
  },
  horizontalLineboxStart: {
      composes: '$fadeOut',
      animationName: 'startHorizontal',
      animationDuration: '2s',
      width: '100vw',
      height: "calc(100% - 10vw)",
      position: 'absolute',
      top: '5vw',
      borderTop: '2px solid white',
      borderBottom: '2px solid white',
      zIndex: 20,
  },
  '@keyframes startHorizontal': {
    from: {width: 0},
    to: {width: '100vw'}
  },
  helperBox: {
    composes: '$fadeOut',
    width: "21.6vw",
    height: "8.3vw",
    position: 'absolute',
    top: "5vw",
    border: '2px solid transparent',
    borderBottom: '2px solid white',
    zIndex: 30,
    animationName: 'startHelper',
    animationDuration: '1s',
  },
  '@keyframes startHelper': {
    from: { width: 0 },
    to: { width: '21.6vw' }
  },
  logoBox: {
    composes: '$fadeOut',
    animationName: 'startLogo',
    animationDuration: '2s',
    width: "16.6vw",
    height: "8.3vw",
    position: 'relative',
    left: '5vw',
    background: "#00ACC1",
    textAlign: 'center',
    display: 'flex',
    zIndex: 20,
  },
  '@keyframes startLogo': {
    '0%': { width: 0},
    '30%': {width: 0},
    '100%': {width: "16.6vw"}
  },
  logo: {
    composes: '$fadeOut',
    width: "10vw",
    margin: "auto",
    animationName: 'startCG',
    animationDuration: '2s',
  },
  '@keyframes startCG': {
    '0%': {opacity: '0'},
    '66%': {opacity: '0'},
    '100%': {opacity: '1'}
  },
  '@keyframes startVertical': {
    from: {height: 0},
    to: {height: '100%'}
  },
  navigation: {
    composes: '$fadeOut',
    animationName: 'startVertical',
    animationDuration: '2s',
    width: "16.6vw",
    height: "100%",
    position: 'absolute',
    left: '5vw',
    borderLeftStyle: 'solid',
    borderRightStyle: 'solid',
    borderColor: 'white',
    borderWidth: '2px',
  },
  navigationRight: {
    composes: '$fadeOut',
    animationName: 'startVertical',
    animationDuration: '2s',
    width: "36.5vw",
    height: "100%",
    position: 'absolute',
    right: '5vw',
    borderLeftStyle: 'solid',
    borderRightStyle: 'solid',
    borderColor: 'white',
    borderWidth: '2px',
    zIndex: 20,
  },
  partner: {
    position: 'relative',
    top: '17vw',
    left: '3.33vw',
    animationName: 'startCG',
    animationDuration: '2s',
    width: 'calc(100% - 6.66vw)',
    display: 'block',
  },
  '@keyframes startRed': {
    '0%': { width: 0},
    '30%': {width: 0,},
    '100%': {width: '100%'}
  },
  about: {
    composes: '$fadeOut',
    animationName: 'startCG',
    animationDuration: '2s',
    position: 'relative',
    height: '10.83vw',
    margin: '5vw',
    top: 'calc(5vw + 2px)',
    width: "calc(100% - 10vw)",
  },
  mainType: {
    composes: '$fadeOut',
    animationName: 'startCG',
    animationDuration: '2s',
    position: 'relative',
    left: '24.99vw',
    top: '3.33vw',
    width: '30vw',
  },
  buttonBox: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around'
  },
  main: {
    width: '100%',
    height: '40vh',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
  },
  mainImg: {
    width: '60%',
  },
  nav: {
    position: 'relative',
    top: '13.5vw',
    margin: '1.66vw',
    width: '13.3vw',
    zIndex: 30
  },
  fadeOut: {
    animationDirection: 'normal',
  },
  sanjar: {
    marginTop: '2.5vw',
    width: '20vw',
    height: '5.83vw',
    display: 'flex',
  },
  avatar: {
    width: '5.83vw',
    marginRight: '2.5vw'
  }
}

class About extends Component {
  state = {
    ready: false,
    direction: 'normal'
  }
  componentDidMount() {
    this.setState({ready: true})
  }
  handleClick(url) {
    this.props.history.push(url);
  }
  render() {
    return(
      <div className={this.props.classes.back}>
        <div className={this.state.ready ? this.props.classes.navigationRight : {}}>
          <div className={this.props.classes.partner}>
            <h3>Наши партнеры, друзья и коллеги:</h3>
            <div style={{width: '100%', display: 'flex', justifyContent: 'space-around', marginTop: '1vw'}}>
              <img src={logo1} style={{width: '8vw'}}/>
              <img src={logo2} style={{width: '8vw'}}/>
              <img src={logo3} style={{width: '8vw'}}/>
            </div>
            <div style={{width: '100%', display: 'flex', justifyContent: 'space-around', marginTop: '1vw'}}>
            <img src={logo4} style={{width: '8vw'}}/>
            <img src={logo6} style={{width: '8vw'}}/>
            </div>
            <div style={{width: '100%', display: 'flex', justifyContent: 'space-around', marginTop: '1vw'}}>
            <img src={logo5} style={{width: '8vw'}}/>
            <img src={logo7} style={{width: '8vw'}}/>
            </div>
          </div>
        </div>
        <div className={this.state.ready ? this.props.classes.horizontalLineboxStart : {}}>
          <div className={this.state.ready ? this.props.classes.mainType : {}}>
            <div style={{width: '60vw'}}>
            <h1 style={{backgroundColor: '#263238', marginBottom: '1.66vw'}}>CodeGeneration</h1>
            </div>
            <h3>Школа программирования CodeGeneration</h3>
            <p style={{marginBottom: '1.66vw'}}>Мы успели обучить более 500 человек 5-19 лет навыкам программирования и инженерному мышлению.</p>
            <h3>Наша миссия</h3>
            <p>В Кыргызстане создаются инновации и экспортируются по миру. Мы достигаем этой цели, обучая детей навыкам программирования дизайну, инженерному мышлению, вдохновляя их на безграничное созидание.</p>
            <p style={{marginBottom: '1.66vw'}}>CodeGeneration - это лучшая школа программирования и инженерии. Более 500 детей и подростков прошли обучение у нас. Смешав креатив, hardware и software, мы вырастим новое мотивированное поколение, любящее созидать и открытое для новых идей.</p>
            <div className={this.props.classes.sanjar}>
              <img className={this.props.classes.avatar} src={avatar}/>
              <div style={{width: '11.66vw'}}>
                <h3>Санжар Маматов</h3>
                <p>Создатель школы программирования CodeGeneration</p>
              </div>
            </div>
          </div>
        </div>
        <div className={this.state.ready ? this.props.classes.navigation: {}}>
          <div className={this.state.ready ? this.props.classes.nav : {}}>
            <Navigation text={'ГЛАВНАЯ'} onClick={this.handleClick.bind(this, '/')}/>
            <Navigation text={'STEAM'} onClick={this.handleClick.bind(this, '/course')}/>
            <Navigation text={'Основы программирования'} nested onClick={this.handleClick.bind(this, '/course/basics')}/>
            <Navigation text={'Web-Разработка'} nested onClick={this.handleClick.bind(this, '/course/webdev')}/>
            <Navigation text={'Android-Разработка'} nested onClick={this.handleClick.bind(this, '/course/android')}/>
            <Navigation text={'Разработка игр'} nested onClick={this.handleClick.bind(this, '/course/gamedev')}/>
            <Navigation text={'Графический дизайн'} nested onClick={this.handleClick.bind(this, '/course/design')}/>
            <Navigation text={'Инженерия'} nested onClick={this.handleClick.bind(this, '/course/engineering')}/>
            <Navigation text={'О НАС'} disabled/>
            <Navigation text={'СВЯЗАТЬСЯ'} onClick={this.handleClick.bind(this, '/contact')}/>
          </div>
        </div>
        <div className={this.state.ready ? this.props.classes.helperBox : {}}>
          <div className={this.state.ready ? this.props.classes.logoBox : {}}>
            <img src={logo} className={this.props.classes.logo}/>
            </div>
        </div>
        <div style={{position: 'absolute', bottom: '1.33vw', right: '12vw', animationName: 'startCG', animationDuration: '1s'}}>
          <p>{"Made by Max Ive Design & Dev"}</p>
        </div>
      </div>
    )
  }
}

export default injectSheet(styles)(About);
