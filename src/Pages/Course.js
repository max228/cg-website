import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import injectSheet from 'react-jss';
import logo from '../img/logo.svg';
import avatar from '../img/avatar.svg'
import logo1 from '../img/1.svg'
import logo2 from '../img/2.svg'
import logo3 from '../img/3.svg'
import logo4 from '../img/4.svg'
import logo5 from '../img/5.svg'
import logo6 from '../img/6.svg'
import logopython from '../img/logopython.svg';
import '../index.css';
import Button, { Navigation } from './Comps/Button';
var styles = {
  back: {
    width: "100vw",
    minHeight: "100vw",
    position: "absolute",
    background: "#263238",
    zIndex: 0
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
    borderTop: '2px solid white',
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
  selection: {
    width: 'calc(100% - 3.33vw)',
    padding: '1.66vw',
    borderTop: '2px solid white',
    borderBottom: '2px solid white',
    animationName: 'bottomAnimationNav',
    animationDuration: '2s',
    position: 'relative',
    top: '13.33vw',
    left: 0,
  },
  '@keyframes bottomAnimationNav': {
    "0%": {
      width: 0,
      paddingLeft: '0',
      paddingRight: '0',
    },
    "30%": {
      paddingLeft: '0',
      paddingRight: '0',
      width: 0
    },
    "100%": {
      paddingLeft: '1.66vw',
      paddingRight: '1.66vw',
      width: 'calc(100% - 3.33vw)'
    }
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
  rightBorder: {
    animationName: 'startVertical',
    animationDuration: '2s',
    position: 'absolute',
    top: 0,
    right: 0,
    width: '5vw',
    height: '100%',
    border: '2px solid transparent',
    borderLeft: '2px solid white',
  },
  tileCont: {
    width: '73.33vw',
    position: 'relative',
    left: '21.66vw',
    top: '5vw',
    display: 'flex',
    justifyContent: "center",
    zIndex: 20,
  },
  tile: {
    animationName: 'startTile',
    animationDuration: '1s',
    width: '20vw',
    height: '38.33vw',
    border: '2px solid white',
    margin: '0.83vw',
    marginBottom: '1.66vw',
    marginTop: '0',
    cursor: 'pointer',
  },
  logoTile: {
    background: props => props.color,
    width: '20vw',
    height: '20vw',
    borderTop: '2px solid white',
    borderBottom: '2px solid white',
    display: 'flex',
    animationName: 'logoHor',
    animationDuration: '2s',
  },
  logoTreat: {
    animationName: 'startCG',
    animationDuration: '2s',
    width: '100%',
  },
  paragraph: {
    animationName: 'startCG',
    animationDuration: '2s',
    overflowY: 'hidden',
    marginLeft: '0.83vw',
    marginRight: '0.83vw',
    height: '9vw',
    "&:hover": {
      overflowY: 'auto',
    }
  },
  '@keyframes startTile': {
    from: {
      height: 0
    },
    to: {
      height: '38.33vw'
    }
  },
  '@keyframes logoHor': {
    "0%": {
      width: 0,
    },
    "30%": {
      width: 0,
    },
    '100%': {
      width: '100%',
    }
  },
  bottomBorder: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '5vw',
    borderTop: '2px solid white',
    animationName: 'bottomAnimation',
    animationDuration: '2s',
  },
  '@keyframes bottomAnimation': {
    from: {
      width: 0,
    },
    to: {
      width: '100%'
    }
  },
  'keyframes startAnim': {
    '0%': { opacity: 0},
    '66%': { opacity: 0},
    '100%': { opacity: 1},
  }
}

class Course extends Component {
  state = {
    ready: false,
    direction: 'normal',
    index: 0,
  }
  componentDidMount() {
    this.setState({ready: true})
  }
  handleClick(url) {
    this.props.history.push(url);
  }
  handleIndex(index) {
    this.setState({index: index})
  }
  render() {
    return(
      <div className={this.props.classes.back}>
      <div className={this.state.ready ? this.props.classes.bottomBorder : {}}>
      </div>
        <div className={this.state.ready ? this.props.classes.navigation: {}}>
          <div className={this.state.ready ? this.props.classes.nav : {}}>
            <Navigation text={'ГЛАВНАЯ'} onClick={this.handleClick.bind(this, '/')}/>
            <Navigation text={'STEAM'} disabled/>
            <Navigation text={'О НАС'} onClick={this.handleClick.bind(this, '/about')}/>
            <Navigation text={'СВЯЗАТЬСЯ'} onClick={this.handleClick.bind(this, '/contact')}/>
          </div>
          <div className={this.state.ready ? this.props.classes.selection : {}}>
            <div style={{animationName: 'startCG', animationDuration: '2s', width: '12.3vw'}}>
            <h3>Выберите возраст ребенка</h3>
            <Button text="12 И СТАРШЕ" filled={this.state.index === 0} color="#263238" margin="1.66vw" onClick={this.handleIndex.bind(this, 0)}/>
            <Button text="МЛАДШЕ 12" filled={this.state.index === 1} margin="1.66vw" color="#263238" onClick={this.handleIndex.bind(this, 1)}/>
            </div>
          </div>
          <div style={{border: '2px solid transparent'}} className={this.state.ready ? this.props.classes.selection : {}}>
            <div style={{animationName: 'startCG', animationDuration: '2s', width: '12.3vw'}}>
              <h3>{'6 ступеней STEAM'}</h3>
              <p>Каждый курс длится 1-2 месяца, в течении которых, ваш ребенок успевает пройти одно из 6 направлений. Занятия по каждому направлению будут длится по 2 часа два раза в неделю.</p>
            </div>
          </div>
        </div>
        <div className={this.state.ready ? this.props.classes.helperBox : {}}>
          <div className={this.state.ready ? this.props.classes.logoBox : {}}>
            <img src={logo} className={this.props.classes.logo}/>
            </div>
        </div>
        <div className={this.state.ready ? this.props.classes.tileCont : {}}>
        <Tiles onClick={this.handleClick.bind(this, '/course/basics')} title={this.state.index === 1 ? "Основы программирования" : "Основы JavaScript"} logo={this.state.index===1 ? logopython : logo1} paragraph={this.props.course0[this.state.index]}/>
        <Tiles onClick={this.handleClick.bind(this, '/course/webdev')} color="#E57373" step='2 ступень' logo={logo2} title="Web Разработка" paragraph={this.props.course1[this.state.index]}/>
        <Tiles onClick={this.handleClick.bind(this, '/course/android')} step='3 ступень' logo={logo3} title="Android Разработка" color="#00ACC1" paragraph={this.props.course2[this.state.index]}/>
        </div>
        <div className={this.state.ready ? this.props.classes.tileCont : {}}>
        <Tiles onClick={this.handleClick.bind(this, '/course/gamedev')} step='4 ступень' logo={logo4} title="Разработка игр" paragraph={this.props.course3[this.state.index]}/>
        <Tiles onClick={this.handleClick.bind(this, '/course/design')} color="#E57373" step='5 ступень' logo={logo5} title="Графический дизайн" paragraph={this.props.course4[this.state.index]}/>
        <Tiles onClick={this.handleClick.bind(this, '/course/engineering')} step='6 ступень' logo={logo6} title="Инженерия" color="#00ACC1" paragraph={this.props.course5[this.state.index]}/>
        </div>
        <div className={this.state.ready ? this.props.classes.rightBorder : {}}>

        </div>
        <div style={{position: 'absolute', bottom: '1.33vw', right: '12vw', animationName: 'startCG', animationDuration: '1s'}}>
          <p>{"Made by Max Ive Design & Dev"}</p>
        </div>
      </div>
    )
  }
}

Course.defaultProps = {
  course0: [
    "Изучим основы программирования на языке JavaScript и создадим свою консольную игру.",
    "Обучимся  основам программирования с помощью игры Minecraft, создавая новые функции игры на одном из самых востребованных языков программирования Python.",
  ],
  course1: [
    "Научимся создавать свой собственный сайт с нуля. Изучим базу HTML/CSS и фреймворк Bootstrap, в результате создав свой сайт.",
    "Изучим основы по html, css и создадим свой собственный сайт"
  ],
  course2: [
    "Будем строить макеты приложения  и сделаем свое собственное приложение на популярной интегрированной среде разработки от компании Google Android Studio.",
    "Работая со средой App Inventor, создадим свое приложение для операционной системы Android."
  ],
  course3: [
    "На курсе научимся создавать свои игры на игровом движке Unity. Познакомимся с технологией и процессом разработки игр. В результате ученик создаст свою 2D игру, где персонажем будет сам ученик.",
    "Создадим свои игры с помощью визуального языка программирования Scratch.",
  ],
  course4: [
    "На данном курсе научимся правильно компоновать и создавать макеты в Adobe Illustrator, изучим основы колористики и пропорций и познакомимся со стилями веб-иллюстрации. В результате ученик научится работать в графических редакторах Photoshop и Adobe Illustrator, подготовит полноценный дизайн-проект и узнает, как создавать дизайн сайтов, постеры, открытки, баннеры и многое другое.",
    "Познакомимся со сторителлингом, где научимся создавать свои истории. Научимся визуализировать свои идеи на бумаге, которые будут переведены в цифровой формат и дорисованы в графическом редакторе"
  ],
  course5: [
    "На курсе научимся создавать свои игры на игровом движке Unity. Познакомимся с технологией и процессом разработки игр. В результате ученик создаст свою 2D игру, где персонажем будет сам ученик.",
    "На курсе инженерного мышления осваиваем базовые физические явления и свойства. В конце курса делаем свой проект: машинка на радиоуправлении."
  ],

}

class Tile extends Component {
  render() {
    return(
      <div className={this.props.classes.tile} onClick={this.props.onClick}>
        <div style={{animationName: 'startCG',
        animationDuration: '2s', minHeight: '7.16vw'}}>
        <h3 style={{margin: '0.83vw', fontWeight: '300'}}>{this.props.step}</h3>
        <h6 style={{marginRight: '5vw'}}>{this.props.title}</h6>
        </div>
        <div className={this.props.classes.logoTile}>
          <div style={{width: '8vw', height: '8vw', display: 'flex', margin: 'auto',}}>
          <img className={this.props.classes.logoTreat} src={this.props.logo}/>
          </div>
        </div>
        <div className={this.props.classes.paragraph}>
        <p>
          {this.props.paragraph}
        </p>
        </div>
      </div>
    )
  }
}
Tile.defaultProps = {
  color: '#455A64',
  title: 'Основы JavaScript',
  step: '1 ступень',
  logo: logo1,
  paragraph: "Изучим основы программирования на языке JavaScript и создадим свою консольную игру."
}

export const Tiles = injectSheet(styles)(Tile);

export default injectSheet(styles)(Course);
