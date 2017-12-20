import React from 'react';
import ReactDOM from 'react-dom';
import SingleSingleContributor from './SingleSingleContributor.jsx';
import BigText from './BigText.jsx';

require('./Content.css');

class Content extends React.Component{

	render(){

		return(

			<div>

	  	  		<div class="row" style={{textAlign:'center', marginLeft:'2rem', marginRight:'2rem', marginTop:'1rem'}}>

	  	  			<h1 style={{fontSize:'3rem', marginLeft:'7rem', marginRight:'7rem', marginTop:'2rem', marginBottom:'2rem'}}>Like this Video? Get Access to all the content of this Channel!</h1>

	  	  		</div>

	  	  		<div class="col-xs-12 col-sm-12 col-md-9 col-lg-7" style={{}}>

	  	  			<div class="row" style={{textAlign:'left', marginLeft:'4rem', fontSize:'2em'}}>

	  	  				<h3><b>What's included?</b></h3>

	  	  			</div>

	  	  			<div class="row" style={{textAlign:'left', marginLeft:'1rem', width:'100%', fontSize:'120%'}}>

	  	  				<ul>

	  	  					<li style={{marginBottom:'0.5rem', fontSize:'1.5em'}}>17 lectures in 4 categories</li>

	  	  					<li style={{marginBottom:'0.5rem', fontSize:'1.5em'}}>Lectures from renowned doctors from India</li>
	  	  					
	  	  					<li style={{marginBottom:'0.5rem', fontSize:'1.5em'}}><BigText content_data="Life Time access to new Content" /></li>

	  	  				</ul>

	  	  			</div>

	  	  			<div class="row" style={{textAlign:'left', marginLeft:'4rem', marginBottom:'4rem'}}>

	  	  				<h3 ><b>Contributors</b></h3>

	  	  				<div class="row">

	  	  					<SingleSingleContributor />
	  	  					
	  	  					<SingleSingleContributor />

	  	  					<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">

		  	  						<a href="#">

		  	  							<div style={{border:'1px solid white', textAlign:'center', backgroundColor:'#e2e4e6', color:'black', borderRadius:20, marginTop:'1rem', paddingLeft:'0rem', paddingRight:'0rem', paddingTop:'0.4rem', paddingBottom:'0.4rem', width:'60%', height:'50%', fontSize:'100%'}}>
									  		  	
								  		  		<span style={{fontSize:'1em', color:'black', textAlign:'center'}}><b>&nbsp;+8</b></span>
								  		  	
								  		  	</div>
						  			
						  			</a>

	  	  					</div>

	  	  				</div>

	  	  			</div>

	  	  		</div>

	  	  		<div class="col-xs-12 col-sm-12 col-md-5 col-lg-5" style={{marginBottom:'2rem'}}>

	  	  			<div class="row">

	  	  				<img src="../../mahadev_contributor.jpg" class="img-circle"/>

	  	  			</div>

	  	  			<div class="row">

	  	  				<h4 style={{marginBottom:'0.02rem', fontSize:'190%'}}><b>Diacon'17</b></h4>

	  	  				<h4 style={{marginTop:'0.04rem'}}><small>23.4K Subscribers</small></h4>

	  	  			</div>

	  	  			<div class="row">

	  	  				<div class="col-xs-5 col-xs-offset-1 col-sm-5 col-sm-offset-2 col-md-6 col-lg-6">

					  		  	<a href="#">
					  		  	
						  		  	<div style={{textAlign:'center', backgroundColor:'#fb583e', border:'2px solid',borderColor:'#fb583e', paddingLeft:'0.4rem', paddingRight:'0.4rem', paddingTop:'0.4rem', paddingBottom:'0.4rem', borderRadius:0, width:'100%', height:'50%', fontSize:'2rem'}}>
							  		  	
						  		  		<span class="glyphicon glyphicon-usd" style={{top:'0.14rem',color:'white', fontSize:'100%'}}>

						  		  		 Subscribe
						  		  		
						  		  		</span>

						  		  	</div>
				  			
				  			  	</a>
				  		  	

	  	  				</div>

	  	  				<div class="col-xs-3 col-sm-3 col-md-4 col-lg-4" style={{paddingTop:'0.4rem', textAlign:'left'}}>
	  	  				
	  	  					<span class="tooltiptext">Rs. 1000</span>

	  	  				</div>

	  	  			</div>

	  	  		</div>


			</div>

		)

	}

}

export default Content;