import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import injectSheet from 'react-jss';
import logo from '../img/logo.svg';
import logo2 from '../img/2.svg'
import Button, { Navigation } from './Comps/Button';
import {withRouter} from 'react-router-dom'
var styles = {
  back: {
    width: "100vw",
    minHeight: "56vw",
    height: '100vh',
    position: "absolute",
    background: props => props.color,
    zIndex: -100,
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
      zIndex: 0,
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
    background: props => props.descColor,
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
    zIndex: 20,
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
    zIndex: 10,
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
    position: 'absolute',
    left: '24.99vw',
    top: '8.33vw',
    width: '67vw',
    zIndex: 99,
    background: props => props.color,
  },
  descBox: {
    animationName: 'descStart',
    animationDuration: '2s',
    background: props => props.descColor,
    position: 'absolute',
    left: '21.8vw',
    top: '11vw',
    width: '29.9vw',
    padding: '3.33vw',
    height: '15.66vw',
    borderTop: '2px solid white',
    borderBottom: '2px solid white',
  },
  '@keyframes descStart': {
    '0%': { width: 0, padding: 0},
    '30%': {width: 0, padding: 0},
    '100%': {width: '30vw', padding: '3.33vw'}
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
  gradient: {
    position: 'absolute',
    bottom: '0', left: '0',
    width: '100%',
    height: '30%',
    backgroundImage: props => 'linear-gradient('+props.descColor+'00 , '+props.descColor+'ff)'
  },
  whatBox: {
    animationName: 'startCG', animationDuration: '3s',
    position: 'relative',
    top: '16.2vw',
    left: '0',
    width: 'calc(100% - 6.66vw)',
    paddingLeft: '3.33vw',
    paddingRight: '3.33vw',
    overflowY: 'hidden',
    height: '12vw',
    "&:hover": {
      overflowY: 'auto'
    },
  },
  program: {
    animationName: 'programAnim',
    animationDuration: '2s',
    position: 'absolute',
    bottom: 'calc(5vw - 2px)',
    left: '0',
    height: '13.33vw',
    padding: '3.33vw',
    width: 'calc(100% - 6.66vw)',
    background: props => props.descColor,
    borderTop: '2px solid white',
    overflow: 'hidden',
    zIndex: 100
  },
  '@keyframes programAnim': {
    '0%': { width: 0, padding: 0},
    '30%': {width: 0, padding: 0},
    '100%': {width: 'calc(100% - 6.66vw)', padding: '3.33vw'}
  },
  descBlock: {
    width: '100%', height: '100%', animationName: 'startCG', animationDuration: '3s', overflowY: 'hidden', position: 'relative', zIndex: 200,
    "&:hover": {
      overflowY: 'auto'
    },
  },
  titleBig:
  {
    marginBottom: '0'
  },
  contact: {
    animationName: 'startCG',
    animationDuration: '2s',
    position: 'relative',
    top: '6.66vw',
    width: '29.9vw',
    height: '8.33vw',
    display: 'flex',
  },
  newProgram: {
    animationName: 'startCG', animationDuration: '3s', width: '100%', height: '100%', overflowY: 'hidden',
    "&:hover": {
      overflowY: 'auto'
    },
  }
}

class Template extends Component {
  state = {
    ready: false,
    direction: 'normal'
  }
  componentDidMount() {
    this.setState({ready: true});
    console.log(this.props);
  }
  handleClick(url) {
    this.props.history.push(url);
  }
  render() {
    return(
      <div className={this.props.classes.back}>
      <div className={this.state.ready ? this.props.classes.mainType : {}}>
        <h1 className={this.props.classes.titleBig}>{this.props.title}</h1>
      </div>
      <div className={this.state.ready ? this.props.classes.horizontalLineboxStart : {}}>
        <div className={this.state.ready ? this.props.classes.descBox : {}}>
          <div className={this.state.ready ? this.props.classes.descBlock : {}}>
            <h3>{this.props.descTitle}</h3>
            {this.props.description.map( description =>
              <p>{description}</p>
            )}
          </div>
          <div className={this.props.classes.contact}>
            <div style={{width: '6.33vw', height: '6.33vw'}}>
              <img src={this.props.logo}/>
            </div>
            <div style={{width: '23.33vw', height: '5.33vw', marginLeft: '3.33vw'}}>
              <p style={{marginTop: '0'}}>Если вас заинтересовал этот курс, можете оставить заявку и мы вам перезвоним.</p>
              <Button color={this.props.color} filled text="ЗАПИСАТЬСЯ" onClick={this.handleClick.bind(this, '/contact')}/>
            </div>
          </div>
        </div>
      </div>
        <div className={this.state.ready ? this.props.classes.navigationRight : {}}>
          <div className={this.state.ready ? this.props.classes.whatBox : {}}>
            <h3>{this.props.whatTitle}</h3>
            {this.props.whatDesc.map( what =>
              <p>{what}</p>
            )}
          </div>
          <div className={this.state.ready ? this.props.classes.program : {}}>
            <div className={this.props.classes.newProgram}>
            <h3>Учебная программа:</h3>
            {this.props.program.map( (program,i) =>
              <div id={i} style={{marginTop: '1vw'}}>
                <h4>{"БЛОК "+(i+1)+":"}</h4>
                <p style={{marginTop: '0vw', marginBottom: '1vw'}}>{program}</p>
              </div>
            )}
            </div>
          </div>
        </div>
        <div className={this.state.ready ? this.props.classes.navigation: {}}>
          <div className={this.state.ready ? this.props.classes.nav : {}}>
            <Navigation text={'ГЛАВНАЯ'} onClick={this.handleClick.bind(this, '/')}/>
            <Navigation text={'STEAM'} onClick={this.handleClick.bind(this, '/course')}/>
            <Navigation disabled={this.props.disabled === 1} text={'Основы программирования'} nested onClick={this.handleClick.bind(this, '/course/basics')}/>
            <Navigation disabled={this.props.disabled === 2} text={'Web-Разработка'} nested onClick={this.handleClick.bind(this, '/course/webdev')}/>
            <Navigation disabled={this.props.disabled === 3} text={'Android-Разработка'} nested onClick={this.handleClick.bind(this, '/course/android')}/>
            <Navigation disabled={this.props.disabled === 4} text={'Разработка игр'} nested onClick={this.handleClick.bind(this, '/course/gamedev')}/>
            <Navigation disabled={this.props.disabled === 5} text={'Графический дизайн'} nested onClick={this.handleClick.bind(this, '/course/design')}/>
            <Navigation disabled={this.props.disabled === 6} text={'Инженерия'} nested onClick={this.handleClick.bind(this, '/course/engineering')}/>
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
    )
  }
}

Template.defaultProps = {
  program: ["Разбираемся с html/css создаем одностраничный сайт",
"Учимся программировать на языке JavaScript",
"Делаем наш сайт многофункциональным. Подключение сторонних программ и библиотек",
"API, React.js",
"Подключаем базу данных, делаем наше приложение многопользовательским",
"Финальный проект. Создаем и запускаем свой проект в свет",
],
  logo: logo2,
  title: "Web-Разработка",
  descTitle: 'Профессия будущего',
  description: ['Всемирная сеть насчитывает почти 4 миллиарда пользователей (это больше половины населения Земли) и свыше миллиарда сайтов. Благодаря стремительному развитию информационных технологий появились профессии, о которых 10 лет назад никто даже не думал.','Верхние строчки в рейтингах самых востребованных и высокооплачиваемых IT-специальностей стабильно занимает профессия веб-разработчика.Веб-разработчик – это универсальный специалист, который обеспечивает логику и создание внешнего вида сайта, а также поддерживает сайт, занимается его «изнанкой» и серверной частью.', 'Всемирная сеть насчитывает почти 4 миллиарда пользователей (это больше половины населен'],
  color: '#00ACC1',
  descColor: '#E57373',
  disabled: 2,
  whatTitle: 'На этом курсе ваш ребенок научится:',
  whatDesc: ['- Создавать свои Web-приложения различной сложности', '- Работать с системой контроля версий GitHub', '- Создавать интерфейсы для работы с пользователем', '- Создавать серверную часть приложения']
}
export default withRouter(injectSheet(styles)(Template));
