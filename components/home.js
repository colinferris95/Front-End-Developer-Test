import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link, Switch, Route, BrowserRouter } from 'react-router-dom'
import * as ReactBootstrap from 'react-bootstrap'

//default api with key attached for now
const apiurl = 'https://api.openweathermap.org/data/2.5/group?id=5128581,2643743,5368361,2147714,1819729&units=metric&appid=edd3b79527fbe606b38fd4757220f789'





//build the app
export class Home extends Component {
	
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
	
	
	{/*this page will render the weather overview for the cities*/}
		return (
		<ReactBootstrap.Grid className="container">
			<ReactBootstrap.Carousel>
		
			
		
				{/*form to call the api*/}
			
				
				{this.state.weatherData.list.map(function(list) {
					
				{/*api output goes here*/}
				return(
				<ReactBootstrap.Carousel.Item>
					<img width={1200} height={500} alt="900x500" src="img/placeholder.png" />
					<ReactBootstrap.Carousel.Caption>
				
				
				
						{/*'weather' in the json data is an array object, needs to be mapped*/}
				
				
				
						<div>
							<h1 class="card-title">{list.name}</h1>
							<h2 class="card-text">{list.main.temp}C</h2>
						</div>
				
						{list.weather.map(function(weather) {
							return(
					
								<div>
									<h2 class="card-text"> {weather.description} </h2>
					
								</div>)
						})}
				
				
					</ReactBootstrap.Carousel.Caption>
				</ReactBootstrap.Carousel.Item>
				
				)
				
				
			
				
				})}
				
	
			</ReactBootstrap.Carousel>
		</ReactBootstrap.Grid>
		
		)
	}
}

export default Home;
