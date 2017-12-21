import React from 'react';
import ReactDOM from 'react-dom';
require('../testing.css');

class ShareButton extends React.Component{

	render(){

		return(

			<div className="">

	  		  	<a href="#">
	  		  	
		  		  	<div style={{marginTop:'1.6rem', marginLeft:'-4rem', paddingLeft:'0rem', paddingRight:'0rem', paddingTop:'0.4rem', paddingBottom:'0.4rem', borderRadius:0, width:'80%', height:'50%', fontSize:'2rem'}}>
			  		  	
		  		  		<span class="glyphicon glyphicon-share-alt" style={{top:'0.22rem',color:'#fb583e', fontSize:'1.8em'}}></span>

		  		  		<span style={{color:'#fb583e', fontSize:'1.6em'}}>&nbsp;Share</span>
		  		  	
		  		  	</div>
  			
  			  	</a>

  			</div>

		)

	}

}

export default ShareButton;