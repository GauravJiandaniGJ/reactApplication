import React from 'react';
import ReactDOM from 'react-dom';
import CommentSubPart from './CommentSubPart.jsx';
import AddComment from './AddComment.jsx';

require('./testing.css')

class CommentSection extends React.Component{

	render(){

		return(

			<div className="">

				<AddComment />

				<div class="row" style={{textAlign:'center', marginTop:'1rem', marginBottom:'1rem', fontSize:'2em'}}>

	  	  			<h4>View all 234 comments</h4>

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