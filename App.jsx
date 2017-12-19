import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import App1 from './src/components/App1.jsx'
// import Scheduler from './src/components/Scheduler.jsx'

class App extends React.Component{

	render(){

		return(

			<div>
				<h2>Welcome to PlexusMD React Applications Created by GAURAV JIANDANI</h2>
				
			</div>

			<Router>
				<div>
					<h2>Welcome to PlexusMD React Applications Created by GAURAV JIANDANI</h2>
					<ul>
						<li><Link to={'/scheduler'}>Scheduler</Link></li>
						<li><Link to={'/stock'}>Stock</Link></li>
					</ul>
					<hr />

					<Switch>
						<Route exact path='/scheduler' component={Scheduler} />
						<Route exact path='/stock' component={App1} />
					</Switch>
				</div>
			</Router>

			);

	}

}

export default App;