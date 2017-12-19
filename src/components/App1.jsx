import React from 'react';
import ReactDOM from 'react-dom';
import MinMax from './MinMax.jsx'

class App1 extends React.Component {

	constructor() {
		super();

		this.state = {
			inp: '', 
			selected: '',
			loopArr: []
		}

	}

	getDaily()
	{

		var temp = this.state.inp

		var seperated = temp.split(',')

		var looparr = [];

		for (var each in seperated)
		{

			var variable = seperated[each]

			looparr.push(variable);

		}

		this.state.loopArr = looparr

		var t = this.state.loopArr

		this.setState({loopArr:t})

	}

	render(){

		var looparr = this.state.loopArr;
		var select = this.state.selected;
		return(
			<div>
			<center><h1>PlexusMD Stock</h1></center>
			<center class=""><input type="text" class=""  placeholder="Please Insert Symbol of Company.." required value={this.state.inp} onChange={e => this.setState({ inp: e.target.value })}></input></center>
			<br />
			<br />
			<center>
			<select id="combobox" class="" value={this.state.selected} onChange={e => this.setState({ selected: e.target.value })}>
			<option class="" value="" disabled></option>
			<option class="" value="day">1 Day</option>
			<option class="" value="week">1 Week</option>
			<option class="" value="month">1 Month</option>
			</select>
			</center>
			<br />
			<br />
			<center>
			<button id="find" onClick= {this.getDaily.bind(this)}>Find Info</button>
			</center>
			<br /><br />

			{looparr.map(function(index){

				return <MinMax input={index} selected={select}/>

			})}

			</div>
			);
	}
}
export default App1;