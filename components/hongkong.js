// index.js
//imports
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import roundTo from 'round-to'


//default api with key attached for now
const apiurl = 'https://api.openweathermap.org/data/2.5/weather?id=1819729&units=metric&appid=edd3b79527fbe606b38fd4757220f789'

const forecasturl = 'https://api.openweathermap.org/data/2.5/forecast?id=1819729&units=metric&appid=edd3b79527fbe606b38fd4757220f789'


//build the app
export class Hongkong extends Component {
	
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
	
	
	fetch(forecasturl)
      .then(res => res.json())
	  .then(
	  (result) => {
		 this.setState({
			forecastData:result
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
	if (!this.state.forecastData) return <p>Loading...</p>
	
	
	
		return (
			<div>
				<h1> Hong Kong Deatiled Weather </h1>
				{/*form to call the api*/}
	
				
				{/*api output goes here*/}
				
				<h2>{this.state.weatherData.name}</h2>
				<h2>{this.state.weatherData.sys.country}</h2>
				
				
				<h2>{this.state.weatherData.main.temp }</h2>
				<h2>{this.state.weatherData.main.humidity }%</h2>
				
				<div>
				{this.state.weatherData.weather.map(function(weather) {
					return(
					<div>
					<h2> {weather.description} </h2>
					
					</div>)
				})}
				
				{this.state.forecastData.list.map(function(list) {
					
				{/*api output goes here*/}
				return(
				<div class="col-md-2">
				
				
				
				{/*'weather' in the json data is an array object, needs to be mapped*/}
				
				
				
				<div>
				<h1>{list.dt_txt}</h1>
				<h2>{list.main.temp}</h2>
				<h2>{list.main.humidity}%</h2>
				</div>
				
				{list.weather.map(function(weather) {
					return(
					
					<div>
					<p> {weather.description} </p>
					
					</div>)
				})}
				
				
				</div>
				
				)
				
				
			
				
				})}
				
		
				
				</div>
			
				
				
				
			</div>	
		)
	}
}



export default Hongkong;