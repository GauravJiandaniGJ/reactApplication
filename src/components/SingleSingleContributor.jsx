import React from 'react';
import ReactDOM from 'react-dom';
require('./testing.css')
class SingleSingleContributor extends React.Component{

	render(){

		return(

			<div>

  				<div class="col-xs-5 col-sm-5 col-md-5 col-lg-5">

					<a href="#">

						<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{backgroundColor: '#e2e4e6', color:'black', position:'relative', borderRadius:'20%', textAlign:'left', paddingLeft:0}}>

							<img src="../../mahadev_contributor.jpg" class="img-circle" style={{height:'100%'}}/>
							
							<span style={{textOverflow:'ellipsis',color:'black', textAlign:'center', width:'100%', position:'fixed', left:0, paddingTop:'0.5rem', paddingLeft:'4.6rem', fontSize:'1.3em', position:'absolute'}}>&nbsp;Dr. Vishwa Shahnta</span>
							
						</div>
  				
  			  		</a>

				</div>

			</div>

		)

	}

}

export default SingleSingleContributor;