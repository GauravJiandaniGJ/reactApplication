import React from 'react';
import ReactDOM from 'react-dom';
import RecommendedChannelsSubPart from '../RecommendedChannelsSubPart/RecommendedChannelsSubPart.jsx';

require('../testing.css')
require('./RecommendedChannels.css')

class RecommendedChannels extends React.Component{

	render(){

		return(

			<div className="">
				<div class="row div_row_recom_channels" >
					<h3 >Recommended Channels</h3>
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