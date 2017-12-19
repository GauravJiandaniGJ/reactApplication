import React from 'react';
import ReactDOM from 'react-dom';

class Scheduler extends React.Component{

	constructor() {
		super();
		
		this.state = {
			
			isSchedulerOn: false,
			currentMoment: '',
			dateTime: Object,
			showSchedulee: false

		}

	}

	displaySchedule(){

		var tmp = this.state.showSchedulee;

		if(!tmp)
		{

			this.setState({showSchedulee: true})

			console.log(this.state.showSchedulee)
		
		}


	}

	render(){		

		var DateTimeField = require('react-datetime');

		var ToggleButton = require('react-toggle-button')

		var clockShow;

		var showScheduleOnDom = this.state.showSchedulee;

		if(showScheduleOnDom)
		{

			var showScheduleHTML = <h1><center>The Scheduled Day and Time is {this.state.dateTime}</center></h1>;

			this.state.isSchedulerOn = !this.state.isSchedulerOn;

		}

		var temp = this.state.isSchedulerOn;

		if (temp) {

		  clockShow = <div><DateTimeField onChange={(value) => {

		  	this.state.dateTime = value._d

		  	var tempDateTime = this.state.dateTime.toString()

		  	this.setState({dateTime:tempDateTime})

		  }}/><button onClick= {this.displaySchedule.bind(this)}>Set Schedule</button></div>;
		
		} else {
		 
		  clockShow = <h1><center>To View Date/Time! Please turn Toggle On</center></h1>;
		
		}
		
		return (

			<div>

			<center>

			<h1>Scheduler</h1>

			<ToggleButton value={ this.state.isSchedulerOn || false }
			onToggle={(isSchedulerOn) => {
				this.setState({
					isSchedulerOn: !isSchedulerOn,
				})}
			}
			/>

			<br />
			
			</center>

			{clockShow}

			{showScheduleHTML}

			</div>

			);

	}

}

export default Scheduler;
