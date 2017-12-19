import React from 'react';
import ReactDOM from 'react-dom';

class BookmarkButton extends React.Component{

	render(){

		return(

			<div>

	  		  	<a href="#">
	  		  	
		  		  	<div style={{textAlign:'center', border:'2px solid',borderColor:'#fb583e', paddingLeft:'0rem', paddingRight:'0rem', paddingTop:'0.4rem', paddingBottom:'0.4rem', borderRadius:0, width:'100%', height:'50%', fontSize:'2rem'}}>
			  		  	
		  		  		<span class="glyphicon glyphicon-star-empty" style={{top:'0.22rem',color:'#fb583e', fontSize:'2rem'}}></span>

		  		  		<span style={{color:'#fb583e', fontSize:'2rem'}}>&nbsp;Bookmark</span>
		  		  	
		  		  	</div>
  			
  			  	</a>
  		  	

			</div>

		)

	}

}

export default BookmarkButton;