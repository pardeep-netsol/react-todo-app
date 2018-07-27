import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import Task from './Task.jsx';
import NavLinks from './navLinks.jsx';
import Home from './Home.jsx';
import About from './about.jsx';
import Contact from './contact.jsx';
import App from './App.jsx';




// ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render((
   <Router history = {browserHistory}>
      <Route path = "/" component = {NavLinks}>
      	<IndexRoute component = {Home} />
      	<Route path = "todo" component = {App} />
      	<Route path = "about" component = {About} />
      	<Route path = "contact" component = {Contact} />
      </Route>
   </Router>
	
), document.getElementById('app'))