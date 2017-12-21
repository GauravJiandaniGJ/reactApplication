import React from 'react';
import ReactDOM from 'react-dom';

class Contributors extends React.component{

	render(){

		return(

			<div>

  				<h5 ><b>Contributors</b></h5>

  				<div class="row">

  					<div class="col-xs-5 col-sm-5 col-md-5 col-lg-5">

  						<a href="#">

  							<div style={{marginRight:'1rem'}}>

  								<img src="../../mahadev_contributor.jpg" class="img-circle" style={{position:'absolute', height:'100%'}}/>

  							</div>
  							  		  	
				  		  	<div style={{border:'1px solid white', backgroundColor:'#e2e4e6', color:'black', borderRadius:20, paddingLeft:'0rem', paddingRight:'0rem', paddingTop:'0.4rem', paddingBottom:'0.4rem', width:'100%', height:'50%', fontSize:'1.7rem'}}>
					  		  	
				  		  		<span style={{fontSize:'1rem', marginLeft:'3.5rem', color:'black', textAlign:'center'}}>&nbsp;Dr. Vishwa Shahnta</span>
				  		  	
				  		  	</div>
		  			
		  			  	</a>
		  		  	

  					</div>

  					<div class="col-xs-5 col-sm-5 col-md-5 col-lg-5">

	  						<a href="#">

	  							<div style={{border:'1px solid white', backgroundColor:'#e2e4e6', color:'black', borderRadius:20, paddingLeft:'0rem', paddingRight:'0rem', paddingTop:'0.4rem', paddingBottom:'0.4rem', width:'100%', height:'50%', fontSize:'1.7rem'}}>
						  		  	
					  		  		<span style={{fontSize:'1rem', marginLeft:'1.1rem', color:'black', textAlign:'center'}}><b>&nbsp;+8</b></span>
					  		  	
					  		  	</div>
			  			
			  			  	</a>


  					</div>

  					<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">

	  						<a href="#">

	  							<div style={{border:'1px solid white', backgroundColor:'#e2e4e6', color:'black', borderRadius:20, paddingLeft:'0rem', paddingRight:'0rem', paddingTop:'0.4rem', paddingBottom:'0.4rem', width:'100%', height:'50%', fontSize:'1.7rem'}}>
						  		  	
					  		  		<span style={{fontSize:'1rem', marginLeft:'1.1rem', color:'black', textAlign:'center'}}><b>&nbsp;+8</b></span>
					  		  	
					  		  	</div>
			  			
			  			  	</a>

  					</div>

  				</div>


			</div>

		)

	}

}

export default Contributors;