import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Main from './Pages/Main';
import About from './Pages/About';
import Course from './Pages/Course'
import Contact from './Pages/Contact';
import { WebDev, AndroidDev, GameDev, Design, Basics, Engineering} from './Pages/Courses';

class App extends Component {
  componentDidMount() {
    document.title = "CodeGeneration - школа программирования и инженерии";
  }
  render() {
    return (
        <Router>
          <Switch>
            <Route exact path="/course/engineering" component={Engineering}/>
            <Route exact path="/course/gamedev" component={GameDev}/>
            <Route exact path="/course/basics" component={Basics}/>
            <Route exact path="/course/android" component={AndroidDev}/>
            <Route exact path ="/course/webdev" component={WebDev}/>
            <Route exact path="/course/design" component={Design}/>
            <Route exact path ="/" component={Main}/>
            <Route exact path ="/about" component={About}/>
            <Route exact path="/course" component={Course}/>
            <Route exact path="/contact" component={Contact}/>
          </Switch>
        </Router>
    );
  }
}

export default App;
