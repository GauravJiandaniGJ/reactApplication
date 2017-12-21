import React from 'react';
import ReactDOM from 'react-dom';

require('../testing.css')
require('./AddComment.css')

class AddComment extends React.Component{

	render(){

		return(

			<div className="">

	  		  	<div class="row">

		  	  		<div class="col-xs-1 col-sm-1 col-md-1 col-lg-1 img_div" >

		  	  			<img src="../../mahadev_contributor.jpg" class="img-circle" style={{paddingLeft:'4rem'}} />
		  	  		
		  	  		</div>

		  	  		<div class="col-xs-10 col-sm-10 col-md-10 col-lg-10 col_10">
					  		  	
			  		  	<div class="comment_div">
				  		  	
			  		  		<h4 class="hfour"><small>Add Your Comment..</small></h4>
			  		  	
			  		  	</div>
				  			
		  	  		</div>

				</div>		  	

  			</div>

		)

	}

}

export default AddComment;