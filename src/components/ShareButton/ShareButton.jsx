import React from 'react';
import ReactDOM from 'react-dom';
require('../testing.css');
require('./ShareButton.css');

class ShareButton extends React.Component{

	render(){

		return(

			<div className="">

	  		  	<a href="#">
	  		  	
		  		  	<div class="div_share">
			  		  	
		  		  		<span class="glyphicon glyphicon-share-alt icon_share" ></span>

		  		  		<span class="text_share">&nbsp;Share</span>
		  		  	
		  		  	</div>
  			
  			  	</a>

  			</div>

		)

	}

}

export default ShareButton;