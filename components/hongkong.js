// index.js
//imports
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import roundTo from 'round-to'
import * as ReactBootstrap from 'react-bootstrap'


//default api with key attached for now
const apiurl = 'https://api.openweathermap.org/data/2.5/weather?id=1819729&units=metric&appid=edd3b79527fbe606b38fd4757220f789'

const forecasturl = 'https://api.openweathermap.org/data/2.5/forecast?id=1819729&units=metric&appid=edd3b79527fbe606b38fd4757220f789'


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
  
  createTable = (arr,length) => {
    let table = []
	let tables = []
	
    // Outer loop to create parent

	console.log(arr)
	console.log(length)
	for (let z = 0; z <= length; z++) {
		
		let children = []
		console.log('test')
		console.log(z)
		
		
		for (let x = 0; x < arr.length; x++){
		
			if (arr[x][0] == z ){
					
					children.push(<tbody><tr><td>{arr[x][1]}</td><td>{arr[x][2]}</td><td>{arr[x][3]}C</td><td>{arr[x][4]}%</td><td>{arr[x][5]}</td></tr></tbody>)
				
			
					
			}
		
		}
	
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
					var full_date = list.dt_txt;
					var mm_dd = full_date.substr(5,6);
					
				
					bootstrapDateArray.push(mm_dd);
				
					
					
					
			
					
				})}
				
				
				
				
				
				
				{this.state.forecastData.list.map(function(list) {
					
					{/*api output goes here*/}
					var newArray = uniqueArray(bootstrapDateArray);
					var full_date = list.dt_txt;
					var mm_dd = full_date.substr(5,6);
					var hour = full_date.substr(10,14);
				
		
				
					k++
					if (newArray[i] == mm_dd ) { 
				
				
					} else {
					
						i++ 
					}
					var desc
					{list.weather.map(function(weather) {
						
						desc = weather.description
					
				
					})}
				
					objectArray.push([i,mm_dd,hour,list.main.temp,list.main.humidity,desc])
				
				
				
				})}
				
			
  
				{this.createTable(objectArray,i)}
				
				
			
				
				</div>
			
				
				
				
			</div>	
		)
		

						  
						  
				
		


	}
}



export default Hongkong;