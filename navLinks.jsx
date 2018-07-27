import React from 'react';
import { Link } from 'react-router';

var NavLinks = React.createClass({

	render: function(){
		return (
      <div className="container">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <ul className="nav navbar-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="todo">Todo</Link></li>
              <li><Link to="about">About</Link></li>
              <li><Link to="contact">Contact</Link></li>
            </ul>
          </div>
          {this.props.children}
        </nav>
      </div>
		);
	}
})
export default NavLinks;