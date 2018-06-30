import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Home from './home'
import London from './london'
import Newyork from './newyork'
import Losangeles from './losangeles'
import Hongkong from './hongkong'
import Sydney from './sydney'
import { Link, Switch, Route, BrowserRouter } from 'react-router-dom'
//default api with key attached for now




//build the app
export class App extends Component {
	

	
	
	
	render() {
		

	
	
	{/*main app navigation*/}
		return (

				
		<div>
				
	
				{/* Route components are rendered if the path prop matches the current URL */}
			<BrowserRouter>  
				<div>
			
				<nav className="navbar navbar-light">
					<ul className="nav navbar-nav">

				{/* Link components are used for linking to other views */}
						<li><Link to="/Front-End-Developer-Test">Home</Link></li>
						<li><Link to="/Front-End-Developer-Test/london">London</Link></li>
						<li><Link to="/Front-End-Developer-Test/newyork">New York</Link></li>
						<li><Link to="/Front-End-Developer-Test/losangeles">Los Angeles</Link></li>
						<li><Link to="/Front-End-Developer-Test/sydney">Sydney</Link></li>
						<li><Link to="/Front-End-Developer-Test/hongkong">Hong Kong</Link></li>
						
					</ul>
				</nav>
			
				<Route exact={true}  path="/Front-End-Developer-Test" component={Home}/>
				<Route path="/Front-End-Developer-Test/london" component={London}/>
				<Route path="/Front-End-Developer-Test/newyork" component={Newyork}/>
				<Route path="/Front-End-Developer-Test/losangeles" component={Losangeles}/>
				<Route path="/Front-End-Developer-Test/sydney" component={Sydney}/>
				<Route path="/Front-End-Developer-Test/hongkong" component={Hongkong}/>
  
				</div>
			</BrowserRouter>
		</div>	

		
		)
	}
}

export default App;
