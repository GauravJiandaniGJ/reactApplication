import React from 'react';
import ReactDOM from 'react-dom';
import RecommendedChannelsSubPart from './RecommendedChannelsSubPart.jsx';

require('./testing.css')

class RecommendedChannels extends React.Component{

	render(){

		return(

			<div className="">

	  		  	<div class="row" style={{marginLeft:'1rem', marginTop:'1rem'}}>

		  			<h3 style={{fontSize:'2vmax'}}>Recommended Channels</h3>

		  		</div>

		  		<div>

		  			<RecommendedChannelsSubPart />

		  			<RecommendedChannelsSubPart />
		  			
		  			<RecommendedChannelsSubPart />
		  			
		  		</div>

  			</div>

		)

	}

}

export default RecommendedChannels;