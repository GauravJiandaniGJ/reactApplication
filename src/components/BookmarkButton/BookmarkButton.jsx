import React from 'react';
import ReactDOM from 'react-dom';
require('../testing.css')
require('./BookmarkButton.css')

class BookmarkButton extends React.Component{

	constructor(props) {
	      super(props);

	      this.state = {
	         isBookmarked: null
	      }

	}

	changeBookmark(){
		this.setState({isBookmarked: !this.state.isBookmarked});
	}

	getInitialState(){
		return{
			isBookmarked: false
		}
	}

	render(){

		var bookmark =   	<div class="div_tag" onClick={this.changeBookmark.bind(this)}>
				  		  		<span class="glyphicon glyphicon-star-empty iconn"></span>
				  		  		<span class="text">&nbsp;Bookmark</span>				  		  	
				  		  	</div>
		  			

		var bookmarked = 	<div class="div_tag_bookmarked" onClick={this.changeBookmark.bind(this)}>					  		  	
				  		  		<span class="glyphicon glyphicon-star-empty iconn_bookmarked"></span>
				  		  		<span class="text_bookmarked">&nbsp;Bookmarked</span>				  		  	
				  		  	</div>
		  			

		return(

			<div>
	  		  	
	  		  	{this.state.isBookmarked ? bookmarked : bookmark}
  		  	

			</div>

		)

	}

}

export default BookmarkButton;