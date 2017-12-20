import React from 'react';
import ReactDOM from 'react-dom';

require('./testing.css')

class RecommendedChannelsSubPart extends React.Component{

	render(){

		return(

			<div class="col-xs-4 col-sm-4 col-md-12 col-lg-12">

  	  			<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2" style={{paddingLeft:'0.12rem',paddingRight:'0.8rem', paddingTop:'0.3rem', marginRight: '1rem'}}>

  					<img src="../../mahadev_contributor.jpg" class="img-circle" style={{width:'100%'}}/>

  				</div>

  	  			<div class="col-xs-9 col-sm-9 col-md-9 col-lg-9" style={{marginBottom:'1.4rem'}}>

  	  				<div class="row">

  	  					<h4 style={{marginBottom:0}}>Diacon'17

  		  					<small>

  		  						&nbsp;&nbsp;32 votes

  		  					</small>
  	  					
  	  					</h4>

  	  				</div>

  	  				<div class="row">

  	  					<h4 style={{marginTop:0}}>

  	  						<small>

  	  							93.2K Subscribers

  	  						</small>

  	  					</h4>

  	  				</div>

  	  			</div>


  			</div>

		)

	}

}

export default RecommendedChannelsSubPart;