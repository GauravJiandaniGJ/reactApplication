import React from 'react';
import ReactDOM from 'react-dom';
import App1 from './App1.jsx';

class MinMax extends React.Component {

	constructor() {
		super();

		this.state = {
			inp: '',
			data: Object,
			selected: '',
			min: 10000,
			max: 0,
			finalmin: 10000,
			finalmax: 0,
			mon: 0,
			tue: 0,
			wed: 0,
			thu: 0,
			fri: 0,
			loading : false,
			overallavg: 0
		}

	}

	componentWillMount(newProps) {    

		this.state.inp = this.props.input;

		this.state.selected = this.props.selected;

		this.getDailyList()

	}

	getAverageDays(){

		var days = {

			monday:{
				amount: 0,
				total: 0,
				avg: 0
			},
			tuesday:{
				amount: 0,
				total: 0,
				avg: 0
			},
			wednesday:{
				amount: 0,
				total: 0,
				avg: 0
			},
			thursday:{
				amount: 0,
				total: 0,
				avg: 0
			},
			friday:{
				amount: 0,
				total: 0,
				avg: 0
			}

		}

		var data1 = this.state.data

		console.log(data1)

		for(let val in this.state.data){

			var date = new Date(val);

			if(date.getDay() == 1)
			{

				days.monday.amount = parseFloat(days.monday.amount) + parseFloat(data1[val]['4. close']);

				days.monday.total = days.monday.total + 1;

			}
			else if(date.getDay() ==  2)
			{

				days.tuesday.amount = parseFloat(days.tuesday.amount) + parseFloat(data1[val]['4. close']);

				days.tuesday.total = days.tuesday.total + 1;

			}
			else if(date.getDay() ==  3)
			{

				days.wednesday.amount = parseFloat(days.wednesday.amount) + parseFloat(data1[val]['4. close']);

				days.wednesday.total = days.wednesday.total + 1;

			}
			else if(date.getDay() ==  4)
			{

				days.thursday.amount = parseFloat(days.thursday.amount) + parseFloat(data1[val]['4. close']);

				days.thursday.total = days.thursday.total + 1;

			}
			else if(date.getDay() ==  5)
			{

				days.friday.amount = parseFloat(days.friday.amount) + parseFloat(data1[val]['4. close']);

				days.friday.total = days.friday.total + 1;

			}

		}

		days.monday.avg = (parseFloat(days.monday.amount) / parseFloat(days.monday.total)).toFixed(2);
		days.tuesday.avg = (parseFloat(days.tuesday.amount) / parseFloat(days.tuesday.total)).toFixed(2);
		days.wednesday.avg = (parseFloat(days.wednesday.amount) / parseFloat(days.wednesday.total)).toFixed(2);
		days.thursday.avg = (parseFloat(days.thursday.amount) / parseFloat(days.thursday.total)).toFixed(2);
		days.friday.avg = (parseFloat(days.friday.amount) / parseFloat(days.friday.total)).toFixed(2);

		var overallavgg = ((parseFloat(days.monday.avg) + parseFloat(days.tuesday.avg) + parseFloat(days.wednesday.avg) + parseFloat(days.thursday.avg) + parseFloat(days.friday.avg))/5).toFixed(2);

		this.setState({mon:days.monday.avg});
		this.setState({tue:days.tuesday.avg});
		this.setState({wed:days.wednesday.avg});
		this.setState({thu:days.thursday.avg});
		this.setState({fri:days.friday.avg});
		this.setState({overallavg:overallavgg});

		this.setState({loading:false});

	}

	getDailyList(){

				fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol='+this.state.inp+'&apikey=DZ9QRSABF9NNW7O4')

					.then(response => response.json())

					.then(resTxt=>{

						this.state.data = resTxt['Time Series (Daily)'];

						this.fetchMinimumMaximumClosed();

						this.setState({loading: true});

					})

				}

				fetchMinimumMaximumClosed(){

					var data1 = this.state.data

					var Minimum = 1000.0000;

					var Maximum = 0;

					if(this.state.selected === 'day'){

						for(let val in this.state.data){


							if(Minimum > data1[val]['4. close'])
							{

								Minimum = data1[val]['4. close'];

							}
							if(this.state.max < data1[val]['4. close'])
							{

								Maximum = data1[val]['4. close'];

							}

						}

					}else if(this.state.selected === 'week'){

						var tmp = 1;

						for(let val in this.state.data){

							if(tmp <= 7)
							{


								if(Minimum > data1[val]['4. close'])
								{

									Minimum = data1[val]['4. close'];

								}
								if(this.state.max < data1[val]['4. close'])
								{

									Maximum = data1[val]['4. close'];

								}

								tmp++;

							}

						}		

					}else if(this.state.selected === 'month'){


						var tmp = 1;

						for(let val in this.state.data){

							if(tmp <= 30)
							{


								if(Minimum > data1[val]['4. close'])
								{

									Minimum = data1[val]['4. close'];

								}
								if(this.state.max < data1[val]['4. close'])
								{

									Maximum = data1[val]['4. close'];

								}

								tmp++;

							}

						}		


					}else{
						alert('Bad.. Choose something from options!');
					}

					Minimum = parseFloat(Minimum).toFixed(2);

					Maximum = parseFloat(Maximum).toFixed(2);

					this.setState({min: Minimum}, () => console.log(this.state));

					this.setState({max: Maximum}, () => console.log(this.state));		

					this.getAverageDays();

				}

				render() {
					return (
						<div>

						<center><h1>{this.state.inp}</h1></center>

						<center>
						<label class="">Minimum Closed:</label><label class="" id="min">{this.state.min}</label>
						<br />
						<br />
						<label class="">Maximum Closed:</label><label class="" id="max">{this.state.max}</label>
						<br />
						</center>
						<br />
						<center>
						<table border="1">
						<tr>
						<td>Day</td>
						<td>Average</td>
						</tr>
						<tr>
						<td>Monday</td>
						<td>{this.state.mon}</td>
						</tr>
						<tr>
						<td>Tuesday</td>
						<td>{this.state.tue}</td>
						</tr>
						<tr>
						<td>Wednesday</td>
						<td>{this.state.wed}</td>
						</tr>
						<tr>
						<td>Thursday</td>
						<td>{this.state.thu}</td>
						</tr>
						<tr>
						<td>Friday</td>
						<td>{this.state.fri}</td>
						</tr>
						<tr>
						<td>Overall</td>
						<td>{this.state.overallavg}</td>
						</tr>
						</table>
						</center>

						<br />
						<br />


						</div>
						);
				}
			}
			
			export default MinMax;