import React from 'react';
import ReactDOM from 'react-dom';

require('./testing.css')

class AddComment extends React.Component{

	render(){

		return(

			<div className="">

	  		  	<div class="row">

		  	  		<div class="col-xs-1 col-sm-1 col-md-1 col-lg-1" style={{textAlign:'left', marginRight:'1rem', marginLeft:'1.4rem'}}>

		  	  			<img src="../../mahadev_contributor.jpg" class="img-circle" style={{paddingLeft:'4rem'}} />
		  	  		
		  	  		</div>

		  	  		<div class="col-xs-10 col-sm-10 col-md-10 col-lg-10" style={{marginTop:'1.2rem', marginLeft:'3rem', paddingRight:'6rem'}}>
					  		  	
			  		  	<div style={{textAlign:'left', backgroundColor:'#c3c1c1', paddingLeft:'0rem', paddingRight:'0rem', paddingTop:'0.4rem', paddingBottom:'0.4rem', borderRadius:2, width:'100%', height:'50%'}}>
				  		  	
			  		  		<h4 style={{marginTop:'0.2rem', marginBottom:'0.2rem', paddingLeft:'0.8rem', fontSize:'1.8em'}}><small>Add Your Comment..</small></h4>
			  		  	
			  		  	</div>
				  			
		  	  		</div>

				</div>		  	

  			</div>

		)

	}

}

export default AddComment;