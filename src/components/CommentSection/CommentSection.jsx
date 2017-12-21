import React from 'react';
import ReactDOM from 'react-dom';
import CommentSubPart from '../CommentSubPart/CommentSubPart.jsx';
import AddComment from '../AddComment/AddComment.jsx';

require('../testing.css')
require('./CommentSection.css')

class CommentSection extends React.Component{

	render(){

		return(

			<div className="">

				<AddComment />

				<div class="row hfour_row" >

	  	  			<h4 class="hfour">View all 234 comments</h4>

	  	  		</div>

	  	  		<div class="row">

	  		  	  		<CommentSubPart />
	  		  	  		
	  		  	  		<CommentSubPart />

	  	  		</div>


  			</div>

		)

	}

}

export default CommentSection;