import React from 'react';
import ReactDOM from 'react-dom';

class SingleSingleContributor extends React.Component{

	render(){

		return(

			<div>

  				<div class="col-xs-5 col-sm-5 col-md-5 col-lg-5">

					<a href="#">

						<div style={{marginRight:'1rem'}}>

							<img src="../../mahadev_contributor.jpg" class="img-circle" style={{position:'absolute', height:'100%'}}/>

						</div>
						  		  	
			  		  	<div style={{border:'1px solid white', backgroundColor:'#e2e4e6', color:'black', borderRadius:20, paddingLeft:'0rem', paddingRight:'0rem', paddingTop:'0.4rem', paddingBottom:'0.4rem', width:'100%', height:'50%', fontSize:'1.7rem'}}>
				  		  	
			  		  		<span style={{fontSize:'1em', paddingLeft:'2rem', marginLeft:'3.5rem', color:'black', textAlign:'center'}}>&nbsp;Dr. Vishwa Shahnta</span>
			  		  	
			  		  	</div>
  				
  			  		</a>

				</div>

			</div>

		)

	}

}

export default SingleSingleContributor;