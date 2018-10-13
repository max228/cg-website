import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import injectSheet from 'react-jss';
import logo from '../img/logo.svg';
import '../index.css';
import logo1 from '../img/6.svg';
import logo2 from '../img/2.svg';
import logo3 from '../img/3.svg';
import logo4 from '../img/1.svg';
import { Transition } from 'react-transition-group';
import Button, { Navigation, Indi } from './Comps/Button';
import mainImg from '../img/mainImg.svg';
import {MobileView, BrowserView} from 'react-device-detect';


const styles = {
  back: {
    width: "100vw",
    height: "56vw",
    minHeight: '100vh',
    position: "absolute",
    background: "#00ACC1",
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
    background: "#455A64",
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
  redBox: {
    composes: '$fadeOut',
    animationName: 'startRed',
    animationDuration: '2s',
    position: 'relative',
    top: 'calc(5vw + 2px)',
    width: '100%',
    height: '25.83vw',
    background: '#E57373',
    borderBottom: '2px solid white',
    display: 'block',
    alignContent: 'center',
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
    left: '26.66vw',
    top: '5vw',
    width: '26.66vw',
    height: '80%'
  },
  buttonBox: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around'
  },
  main: {
    position: 'relative',
    bottom: 0,
    width: '100%',
    height: '60%',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
  },
  mainImg: {
    width: '60%',
    margin: 'auto'
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
  buttons: {
    animationName: 'startCG',
    animationDuration: '2s',
    position: 'absolute',
    bottom: '10vw',
    left: '2vw',
    width: '25.83vw',
    height: '3vw',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'left',
  },
  carousel: {
    height: '6vw',
    width: '6vw',
    margin: 'auto',
    paddingTop: '2.33vw',
    animationName: 'startCG',
    animationDuration: '2s',
    display: 'flex',
    justifyContent: 'center'
  }
}

class RedBox extends Component {
  render() {
    return(
      <div>

      <div className={this.props.classes.carousel}>
        <img src={this.props.logoAr[this.props.index]} style={{height: '100%'}}/>
      </div>
      <div style={{paddingLeft: '5vw', paddingRight: '5vw', paddingTop: '2vw', width: '25.83vw', animationName: 'startCG', animationDuration: '2s'}}>
        <h3>{this.props.titleAr[this.props.index]}</h3>
        <p>{this.props.parAr[this.props.index]}</p>
      </div>
      <div className={this.props.classes.buttons}>
        <div style={{marginRight: '5vw'}}>
          <Indi filled={this.props.index === 0} onClick={this.props.handleChange0}/>
          <Indi filled={this.props.index === 1} onClick={this.props.handleChange1}/>
          <Indi filled={this.props.index === 2} onClick={this.props.handleChange2}/>
          <Indi filled={this.props.index === 3} onClick={this.props.handleChange3}/>
        </div>
      </div>
      </div>
    )
  }
};

RedBox.defaultProps = {
  index : 0,
  logoAr : [logo1, logo2, logo3, logo4],
  titleAr : ['Разностороннее развитие', 'Получение качественных знаний по востребованным направлениям', 'Помогаем найти себя', 'Результат'],
  parAr : ['Наш комплекс обучающих курсов поможет вашему ребенку прокачать свое логическое, креативное мышление и в целом развить мозг. Он сможет раскрыть и попрактиковать свои навыки в разных сферах, начиная от программирования и инженерии, заканчивая дизайном и искусством.',
  'С развитием информационных технологий, навыки программирования, инженерного мышления, графического дизайна становятся необходимыми в наше время. Через современные и интерактивные методы обучения, мы дадим вашему ребенку необходимые и качественные знания по востребованным направлениям.',
  ' Наш комплекс обучающих курсов даст вашему ребенку проявить себя во всех сферах, применяя полученные знания и навыки.',
  'В конце каждого курса ваш ребенок сможет создать и защитить свой финальный проект.'],
}

export const RedBoxCar = injectSheet(styles)(RedBox);

class Main extends Component {
  state = {
    ready: false,
    direction: 'normal',
  }
  componentDidMount() {
    this.setState({ready: true})

  }
  handleClick(url) {
    this.props.history.push(url);
  }
  handleChange(index) {
    this.setState({index});
  }
  render() {
    const style = this.props.classes
    return(
      <div>
      <BrowserView>
      <div className={this.props.classes.back}>
        <div className={this.state.ready ? this.props.classes.navigationRight : {}}>
          <div className={this.state.ready ? this.props.classes.redBox : {}}>
            <RedBoxCar index={this.state.index} handleChange0={this.handleChange.bind(this, 0)} handleChange1={this.handleChange.bind(this, 1)} handleChange2={this.handleChange.bind(this, 2)} handleChange3={this.handleChange.bind(this, 3)}/>
          </div>
          <div className={this.state.ready ? this.props.classes.about : {}}>
            <h3>Школа программирования CodeGeneration</h3>
            <p>CodeGeneration - это лучшая школа программирования и инженерии. Более 500 детей и подростков прошли обучение у нас. Смешав креатив, hardware и software, мы вырастим новое мотивированное поколение, любящее созидать и открытое для новых идей.</p>
          </div>
        </div>
        <div className={this.state.ready ? this.props.classes.horizontalLineboxStart : {}}>
          <div className={this.state.ready ? this.props.classes.mainType : {}}>
            <h3 style={{marginLeft: '1vw', opacity: '0.8'}}>Представляем</h3>
            <h1>STEAM</h1>
            <h4 style={{marginLeft: '1vw', marginBottom: '1.66vw'}}>Комплекс направлений школы программирования CodeGeneration, который включает в себя изучение технологий, инженерии, искусства и математики.</h4>
            <div className={this.props.classes.buttonBox}>
              <Button text={"УЗНАЙТЕ БОЛЬШЕ"} onClick={this.handleClick.bind(this, '/course')}/>
              <Button filled text={"ЗАПИСАТЬСЯ"} onClick={this.handleClick.bind(this, '/contact')}/>
            </div>
            <div className={this.state.ready ? this.props.classes.main : {}}>
              <img src={mainImg} className={this.state.ready ? this.props.classes.mainImg: {}}/>
            </div>
          </div>
        </div>
        <div className={this.state.ready ? this.props.classes.navigation: {}}>
          <div className={this.state.ready ? this.props.classes.nav : {}}>
            <Navigation text={'ГЛАВНАЯ'} disabled/>
            <Navigation text={'STEAM'} onClick={this.handleClick.bind(this, '/course')}/>
            <Navigation text={'Основы программирования'} nested onClick={this.handleClick.bind(this, '/course/basics')}/>
            <Navigation text={'Web-Разработка'} nested onClick={this.handleClick.bind(this, '/course/webdev')}/>
            <Navigation text={'Android-Разработка'} nested onClick={this.handleClick.bind(this, '/course/android')}/>
            <Navigation text={'Разработка игр'} nested onClick={this.handleClick.bind(this, '/course/gamedev')}/>
            <Navigation text={'Графический дизайн'} nested onClick={this.handleClick.bind(this, '/course/design')}/>
            <Navigation text={'Инженерия'} nested onClick={this.handleClick.bind(this, '/course/engineering')}/>
            <Navigation text={'О НАС'} onClick={this.handleClick.bind(this, '/about')}/>
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
      </BrowserView>
      <MobileView>
        <div className={style.back}>

        </div>
      </MobileView>
      </div>
    )
  }
}
export default injectSheet(styles)(Main);
