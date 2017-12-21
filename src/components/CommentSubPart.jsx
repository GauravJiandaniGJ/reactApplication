import React from 'react';
import ReactDOM from 'react-dom';

require('./testing.css')

class CommentSubPart extends React.Component{

	render(){

		return(

			<div className="">

	  	  		<div class="col-xs-1 col-sm-1 col-md-1 col-lg-1" style={{textAlign:'left', marginRight:'1rem', marginLeft:'1.3rem'}}>

	  	  			<img src="../../mahadev_contributor.jpg" class="img-circle" style={{paddingLeft:'4rem'}} />
	  	  		
	  	  		</div>

	  	  		<div class="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{marginTop:'0.7rem', marginLeft:'3rem', paddingRight:'3rem'}}>
				  	
				  	<div class="row">

				  		<h4 style={{marginTop:0, marginLeft:'1.4rem', fontSize:'2vmax', marginBottom:'0.4rem'}}>

				  		<b>Dr. Govind Verma</b>

				  			<small style={{paddingLeft:'1rem', color:'blue'}}>Internal Medicine</small>

				  		</h4>

				  	</div>	  	

				  	<div class="row">

				  		<h4 style={{marginTop:0,  marginLeft:'1.4rem', paddingRight:'5rem', fontSize:'2vmax'}}>

				  			<small>

				  				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
				  				 ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.. 

				  			</small>

				  		</h4>

				  	</div>

				  	<div class="row" style={{marginBottom:'1.6rem'}}>

				  		<h5 style={{marginTop:0,  marginLeft:'1.4rem', fontSize:'2vmax'}}>

				  			<small>

				  				Dec 23, 2017 &nbsp;&nbsp;

				  				<span class="glyphicon glyphicon-one-fine-dot" aria-hidden="true" >
				  								  	  				
			  	  				</span>


				  				&nbsp;&nbsp;Like 

				  			</small>

				  		</h5>

				  	</div>
		  		  		
	  	  		</div>

  			</div>

		)

	}

}

export default CommentSubPart;