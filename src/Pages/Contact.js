import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import injectSheet from 'react-jss';
import logo from '../img/logo.svg';
import DG from '2gis-maps';
import '../index.css';
import Button, { Navigation } from './Comps/Button';
var styles = {
  back: {
    width: "100vw",
    height: "56vw",
    minHeight: '100vh',
    position: "absolute",
    background: '#00ACC1',
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
  },
  gis: {
    position: "absolute",
    bottom: '5vw',
    left: '0',
    width: '36.5vw',
    borderTop: '2px solid white',
    height: '24.6vw',
    animationName: 'startCG',
    animationDuration: '3s',
  }
}

class Contact extends Component {
  state = {
    ready: false,
    direction: 'normal',
    done: false,
    error: false,
    name: '',
    number: '',
    email: '',
  }
  componentDidMount() {
    this.setState({ready: true});
    let map = DG.map('gis', {
      center: [42.872190037012714, 74.58697557449342],
      zoom: 18
    });

    DG.popup([42.872190037012714, 74.58697557449342])
    .setLatLng([42.872190037012714, 74.58697557449342])
    .setContent("kek")
    .openOn(map)
  }
  handleClick(url) {
    this.props.history.push(url);
  }
  handleSubmit() {
    if (!this.state.name || !this.state.number || !this.state.email) {
      this.setState({error: true})
    }
    else {
      this.setState({done: true, error: false})
      fetch('https://api.telegram.org/bot638544435:AAEQRJw6o7EvZaFPBysG_gqGNxnuZtscwfo/sendMessage?chat_id=-307498063&text='+'Автообновление: '+this.state.name+'.\n Номер телефона: '+this.state.number+'\n Мыло: '+this.state.email)
      console.log("works");
    }
  }
  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
    console.log(event.target.value);
  }
  render() {
    return(
      <div className={this.props.classes.back}>
        <div className={this.state.ready ? this.props.classes.navigationRight : {}}>
          <div className={this.props.classes.gis} id="gis">
          </div>
          <div className={this.props.classes.partner}>
            <h3>Контактная информация</h3>
            <div style={{display: "flex", width: '100%', justifyContent: 'space-between', marginTop: '1vw'}}>
              <h4>Телефон</h4>
              <h4>+996550984747</h4>
            </div>
            <div style={{display: "flex", width: '100%', justifyContent: 'space-between', marginTop: '1vw'}}>
              <h4>Электронный адресс</h4>
              <h4>{"mamatovcg@gmail.com"}</h4>
            </div>
            <div style={{display: "flex", width: '100%', justifyContent: 'space-between', marginTop: '1vw'}}>
              <h4>Адрес</h4>
              <h4>Табышалиева 29, Ololohaus Manas</h4>
            </div>
          </div>
        </div>
        <div className={this.state.ready ? this.props.classes.horizontalLineboxStart : {}}>
          <div className={this.state.ready ? this.props.classes.mainType : {}}>
            <div style={{width: '60vw'}}>
            <h1 style={{backgroundColor: '#00ACC1', marginBottom: '1.66vw'}}>Контакты и запись</h1>
            </div>
            <h3>Оставить заявку</h3>
            <p style={{marginBottom: '1.66vw'}}>Если у вас остались к нам вопросы, либо вы хотите записаться, заполните поля и оставьте заявку, мы обязательно вам позвоним.</p>
            <div>
            <input disabled = {this.state.done} name="name" type="text" placeholder="Имя и фамилия" value={this.state.name} onChange={this.handleChange.bind(this)}/>
            <input disabled = {this.state.done} name="number" type="text" placeholder="Номер телефона" value={this.state.number} onChange={this.handleChange.bind(this)}/>
            <input disabled = {this.state.done} name="email" type="email" placeholder="Электронный адресс" value={this.state.email} onChange={this.handleChange.bind(this)}/>
            </div>
            <Button disabled = {this.state.done} filled text={this.state.done ? "СПАСИБО!" : "ЗАПИСАТЬСЯ"} onClick={this.handleSubmit.bind(this)}/>
            <p>{this.state.error ? "Пожалуйста заполните все поля или исправьте ошибки" : ""}</p>
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
            <Navigation text={'О НАС'} onClick={this.handleClick.bind(this, '/about')}/>
            <Navigation text={'СВЯЗАТЬСЯ'} disabled/>
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

export default injectSheet(styles)(Contact);
