import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Home from './home'
import London from './london'
import { Link, Switch, Route, BrowserRouter } from 'react-router-dom'
//default api with key attached for now
const apiurl = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=edd3b79527fbe606b38fd4757220f789'



//build the app
export class App extends Component {
	

	
	
	
	render() {
		

	
	
	
		return (

				
		<div>
				

				{/* Route components are rendered if the path prop matches the current URL */}
		<BrowserRouter>  
			<div>
			
			<nav className="navbar navbar-light">
				<ul className="nav navbar-nav">

           {/* Link components are used for linking to other views */}
					<li><Link to="/">Home</Link></li>
					<li><Link to="/london">London</Link></li>
			

				</ul>
				</nav>
			
           <Route exact={true}  path="/" component={Home}/>
           <Route path="/london" component={London}/>
  
		   </div>
		</BrowserRouter>
			</div>	

		
		)
	}
}

export default App;
