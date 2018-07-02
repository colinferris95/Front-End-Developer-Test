import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Home from './home'
import London from './london'
import Newyork from './newyork'
import Losangeles from './losangeles'
import Hongkong from './hongkong'
import Sydney from './sydney'
import * as ReactBootstrap from 'react-bootstrap'

import { Link, Switch, Route, BrowserRouter } from 'react-router-dom'
//default api with key attached for now




//build the app
export class App extends Component {
	

	
	
	
	render() {
		

	
	
	{/*main app navigation*/}
		return (

				
		<div >
			<div>	
		
				{/* Route components are rendered if the path prop matches the current URL */}
			<BrowserRouter>  
				<div >
				
				
				
					<ReactBootstrap.Navbar>
						<ReactBootstrap.Navbar.Header>
							<ReactBootstrap.Navbar.Brand>
								<a href="#home">React-Bootstrap</a>
							</ReactBootstrap.Navbar.Brand>
						</ReactBootstrap.Navbar.Header>
						<ReactBootstrap.Nav>
							<ReactBootstrap.NavItem eventKey={1} href="#">
								Link
							</ReactBootstrap.NavItem>
						<ReactBootstrap.NavItem eventKey={2} href="#">
								Link
						</ReactBootstrap.NavItem>
						<ReactBootstrap.NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
							<ReactBootstrap.MenuItem eventKey={3.1}><Link to="/Front-End-Developer-Test">Home</Link></ReactBootstrap.MenuItem>
							<ReactBootstrap.MenuItem eventKey={3.2}><Link to="/Front-End-Developer-Test/newyork">New York</Link></ReactBootstrap.MenuItem>
							<ReactBootstrap.MenuItem eventKey={3.3}><Link to="/Front-End-Developer-Test/london">London</Link></ReactBootstrap.MenuItem>
							<ReactBootstrap.MenuItem divider />
							<ReactBootstrap.MenuItem eventKey={3.4}><Link to="/Front-End-Developer-Test/losangeles">Los Angeles</Link></ReactBootstrap.MenuItem>
							<ReactBootstrap.MenuItem eventKey={3.5}><Link to="/Front-End-Developer-Test/sydney">Sydney</Link></ReactBootstrap.MenuItem>
							<ReactBootstrap.MenuItem eventKey={3.6}><Link to="/Front-End-Developer-Test/hongkong">Hong Kong</Link></ReactBootstrap.MenuItem>
						</ReactBootstrap.NavDropdown>
						</ReactBootstrap.Nav>
					</ReactBootstrap.Navbar>
			
					

				{/* Link components are used for linking to other views */}
				
				<Route exact={true}  path="/Front-End-Developer-Test" component={Home}/>
				<Route path="/Front-End-Developer-Test/newyork" component={Newyork}/>
				<Route path="/Front-End-Developer-Test/london" component={London}/>
				<Route path="/Front-End-Developer-Test/losangeles" component={Losangeles}/>
				<Route path="/Front-End-Developer-Test/sydney" component={Sydney}/>
				<Route path="/Front-End-Developer-Test/hongkong" component={Hongkong}/>
  
				</div>
			</BrowserRouter>
			</div>
		</div>	

		
		)
	}
}

export default App;
