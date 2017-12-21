import React from 'react';
import ReactDOM from 'react-dom';

require('../testing.css')
require('./CommentSubPart.css')

class CommentSubPart extends React.Component{

	render(){

		return(

			<div className="">

	  	  		<div class="col-xs-1 col-sm-1 col-md-1 col-lg-1 img_div" >

	  	  			<img src="../../mahadev_contributor.jpg" class="img-circle img_tag"/>
	  	  		
	  	  		</div>

	  	  		<div class="col-xs-10 col-sm-10 col-md-10 col-lg-10 details_div" >
				  	
				  	<div class="row">

				  		<h4 class="hfour_tag">

				  		<b>Dr. Govind Verma</b>

				  			<small class="category_of_medicine">Internal Medicine</small>

				  		</h4>

				  	</div>	  	

				  	<div class="row">

				  		<h4 class="hfour_comment">

				  			<small>

				  				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
				  				 ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.. 

				  			</small>

				  		</h4>

				  	</div>

				  	<div class="row row_date" >

				  		<h5 class="hfive">

				  			<small>

				  				Dec 23, 2017 &nbsp;&nbsp;

				  				<span class="glyphicon glyphicon-one-fine-dot" aria-hidden="true" >
				  								  	  				
			  	  				</span>

				  				<span class="like_btn">&nbsp;&nbsp;Like &nbsp;&nbsp;</span> 

				  				<span class="glyphicon glyphicon-one-fine-dot" aria-hidden="true" >
				  								  	  				
			  	  				</span>
				  				
				  				<span class="like_btn">&nbsp;&nbsp;Reply</span> 

				  			</small>

				  		</h5>

				  	</div>
		  		  		
	  	  		</div>

  			</div>

		)

	}

}

export default CommentSubPart;