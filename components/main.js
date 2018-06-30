import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { Link, Switch, Route } from 'react-router-dom'
//default api with key attached for now
const apiurl = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=edd3b79527fbe606b38fd4757220f789'


/* Home component */
const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

/* Category component */
const Category = () => (
  <div>
    <h2>Category</h2>
  </div>
)

/* Products component */
const Products = () => (
  <div>
    <h2>Products</h2>
  </div>
)


//build the app
export class Main extends Component {
	
	constructor(props) {
    super(props)
	//set the request as failed
    this.state = {
      requestFailed: false
    }

   
	 this.handleSubmit = this.handleSubmit.bind(this);
  }
	//grabs the url and sets the data
  componentDidMount() {
    fetch(apiurl)
      .then(res => res.json())
	  .then(
	  (result) => {
		 this.setState({
			weatherData:result
	    });
	  },
	  (error) => {
		  this.setState({
			requestFailed : true ,
			error
		  });
	  }
	)
	  
  }


  
  handleSubmit(e){
	  //handle the form event to run the api function on form submit
	  this.componentDidMount();
	  
  }
	
	
	
	
	render() {
		
	if (this.state.requestFailed) return <p>Failed!</p>
    if (!this.state.weatherData) return <p>Loading...</p>
	
	
	
		return (
		<main>
			<div>
				<h2> call weather data </h2>
				{/*form to call the api*/}
				<form>
					<input type="submit" value="Submit" onClick={this.handleSubmit} />
				</form>
				
				
				{/*api output goes here*/}
				
				<h2>{this.state.weatherData.name}</h2>
				
				<div>
				{this.state.weatherData.weather.map(function(weather) {
					return(
					<div>
					<p> {weather.main} </p>
					
					</div>)
				})}
				
				<h2>{this.state.weatherData.main.temp}</h2>
				
				
				
				
			
			
				
				</div>
			
				
				<nav className="navbar navbar-light">
          <ul className="nav navbar-nav">

           /* Link components are used for linking to other views */
            <li><Link to="/">Homes</Link></li>
            <li><Link to="/category">Category</Link></li>
            <li><Link to="/products">Products</Link></li>

          </ul>
         </nav>

          /* Route components are rendered if the path prop matches the current URL */
           <Route path="/" component={Home}/>
           <Route path="/category" component={Category}/>
           <Route path="/products" component={Products}/>
				
			</div>	
		</main>	
		
		)
	}
}


export default Main