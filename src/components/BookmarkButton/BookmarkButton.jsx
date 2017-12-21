import React from 'react';
import ReactDOM from 'react-dom';
require('../testing.css')
require('./BookmarkButton.css')

class BookmarkButton extends React.Component{

	render(){

		return(

			<div>

	  		  	<a href="#">
	  		  	
		  		  	<div class="div_tag">
			  		  	
		  		  		<span class="glyphicon glyphicon-star-empty icon"></span>

		  		  		<span class="text">&nbsp;Bookmark</span>
		  		  	
		  		  	</div>
  			
  			  	</a>
  		  	

			</div>

		)

	}

}

export default BookmarkButton;