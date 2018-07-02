// index.js
//imports
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import roundTo from 'round-to'
import * as ReactBootstrap from 'react-bootstrap'

//default api with key attached for now
const apiurl = 'https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=edd3b79527fbe606b38fd4757220f789'

const forecasturl = 'https://api.openweathermap.org/data/2.5/forecast?q=London&units=metric&appid=edd3b79527fbe606b38fd4757220f789'


//build the app

var bootstrapDateArray = [];
var objectArray = [];

var i = -1;
var k = -1;
var uniqueArray = function(arrArg) {
					return arrArg.filter(function(elem, pos,arr) {
						return arr.indexOf(elem) == pos;
					});
				};


//build the app
export class London extends Component {
	
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
  
  
  //creates the forcast table
  createTable = (arr,length) => {
    let table = []

	
    // Outer loop to create parent


	for (let z = 0; z <= length; z++) {
		
		let children = []
	
		
		for (let x = 0; x < arr.length; x++){
		
			if (arr[x][0] == z ){
					//all of the rows for the specific day
					children.push(<tbody><tr><td>{arr[x][1]}</td><td>{arr[x][2]}</td><td>{arr[x][3]}C</td><td>{arr[x][4]}%</td><td>{arr[x][5]}</td></tr></tbody>)
				
			
					
			}
		
		}
	
			//add the table tags
			table.push(<ReactBootstrap.Table>
			<thead>
						<tr>
							<th scope="col">Day</th>
							<th scope="col">Hour</th>
							<th scope="col">Temp</th>
							<th scope="col">Humidity</th>
							<th scope="col">Weather Description</th>
						
						</tr>
					</thead>
			
			{children}</ReactBootstrap.Table>)			
			
	
	}
	
	return table
	
   
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
			<div class="container">
			
				<div >
				
				<h1> London Deatiled Weather </h1>
			
	
				

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
				
				{/*//map the forecast data*/}
				{this.state.forecastData.list.map(function(list) {
					var full_date = list.dt_txt;
					var mm_dd = full_date.substr(5,6);
					
				
					bootstrapDateArray.push(mm_dd);
				
					
					
					
			
					
				})}
				</div>
				
				
				
				
				{/*//map the forecast data*/}
				{this.state.forecastData.list.map(function(list) {
					
					//remove duplicates
					var newArray = uniqueArray(bootstrapDateArray);
					
					var full_date = list.dt_txt;
					var mm_dd = full_date.substr(5,6);
					var hour = full_date.substr(10,14);
				
		
				
					k++
					
					
				    //if the date is the same, dont update the counter
					if (newArray[i] == mm_dd ) { 
				
				
					} else {
					
						i++ 
					}
					var desc
					{list.weather.map(function(weather) {
						//grab the weather description
						desc = weather.description
					
				
					})}
				
					//push the weather of that time to the array
					objectArray.push([i,mm_dd,hour,list.main.temp,list.main.humidity,desc])
				
				
				
				})}
				{/*//forecast tables*/}
				<div >
					<h1> Forecast </h1>
  
					{this.createTable(objectArray,i)}
				
				</div>
			
				
				</div>
			
				
				
				
			</div>	
		)
		

						  
						  
				
		


	}
}



export default London;