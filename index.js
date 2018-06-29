// index.js
//imports
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

//default api with key attached for now
const apiurl = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=edd3b79527fbe606b38fd4757220f789'


const styles = {
  app: {
    paddingTop: 40,
    textAlign: 'center',
  },
}

//build the app
class App extends Component {
	
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
			<div>
				<h2> call weather data </h2>
				{/*form to call the api*/}
				<form>
					<input type="submit" value="Submit" onClick={this.handleSubmit} />
				</form>
				
				
				{/*api output goes here*/}
				
				<div>
				{this.state.weatherData.weather.map(function(weather) {
					return(
					<div>
					<p> {weather.id} </p>
					<p> {weather.main} </p>
					</div>)
				})}
				</div>
				<h2>{this.state.weatherData.dt}</h2>
				
			</div>	
		)
	}
}

//select the html element and render the app
const root = document.querySelector('#app')
ReactDOM.render(<App />, root)
