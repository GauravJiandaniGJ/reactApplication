import React from 'react';
import ReactDOM from 'react-dom';

class FeaturedContributorsSubpart extends React.Component{

	render(){

		return(

			<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">

				<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" style={{paddingLeft:'1rem', paddingRight:0}}>

					<img src="../../mahadev_contributor.jpg" style={{}} class="img-circle" />

				</div>

				<div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">

					<h5 style={{marginBottom:'0.03rem',fontSize:'2em'}}>Dr. Mahadev Singh</h5>

					<h4 style={{marginTop:'0.03rem', fontSize:'2em'}}><small>Designation</small></h4>

				</div>

			</div>

		);

	}

}

export default FeaturedContributorsSubpart;


