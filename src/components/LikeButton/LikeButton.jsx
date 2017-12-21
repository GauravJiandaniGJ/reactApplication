import React from 'react';
import ReactDOM from 'react-dom';
require('../testing.css');

class LikeButton extends React.Component{

	render(){

		return(

	  			<div class="">

		  		  	<a href="#">
		  		  	
			  		  	<div style={{textAlign:'center', marginTop:'1.6rem', paddingLeft:'0rem', paddingRight:'0rem', paddingTop:'0.4rem', paddingBottom:'0.4rem', borderRadius:0, width:'100%', height:'50%', fontSize:'2rem'}}>
				  		  	
			  		  		<span class="glyphicon glyphicon-thumbs-up" style={{top:'0.22rem',color:'#fb583e', fontSize:'1.8em'}}></span>

			  		  		<span class="test" style={{color:'#fb583e', fontSize:'1.6em'}}>&nbsp;Like</span>
			  		  	
			  		  	</div>
	  			
	  			  	</a>

	  			</div>

			)

		}

	}

export default LikeButton;