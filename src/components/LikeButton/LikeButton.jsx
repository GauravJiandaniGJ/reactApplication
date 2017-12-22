import React from 'react';
import ReactDOM from 'react-dom';
require('../testing.css');
require('./LikeButton.css');

class LikeButton extends React.Component{

	render(){

		return(

	  			<div class="">
	  				<a href="#">
	  					<div class="div_like">
	  						<span class="glyphicon glyphicon-thumbs-up icon_like"></span>
	  						<span class="test text_like">&nbsp;Like</span>
	  					</div>
	  				</a>
	  			</div>

			)

		}

	}

export default LikeButton;