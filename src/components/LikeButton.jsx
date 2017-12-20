import React from 'react';
import ReactDOM from 'react-dom';

class LikeButton extends React.Component{

	render(){

		return(

	  			<div class="">

		  		  	<a href="#">
		  		  	
			  		  	<div style={{textAlign:'center', marginTop:'1.6rem', paddingLeft:'0rem', paddingRight:'0rem', paddingTop:'0.4rem', paddingBottom:'0.4rem', borderRadius:0, width:'100%', height:'50%', fontSize:'2rem'}}>
				  		  	
			  		  		<span class="glyphicon glyphicon-thumbs-up" style={{top:'0.22rem',color:'#fb583e', fontSize:'2rem'}}></span>

			  		  		<span style={{color:'#fb583e', fontSize:'2rem'}}>&nbsp;Like</span>
			  		  	
			  		  	</div>
	  			
	  			  	</a>

	  			</div>

			)

		}

	}

export default LikeButton;