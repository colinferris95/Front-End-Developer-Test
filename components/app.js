import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Home from './home'
import London from './london'
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
		
					</ul>
				</nav>
			
				<Route exact={true}  path="/Front-End-Developer-Test" component={Home}/>
				<Route path="/Front-End-Developer-Test/london" component={London}/>
  
				</div>
			</BrowserRouter>
		</div>	

		
		)
	}
}

export default App;
