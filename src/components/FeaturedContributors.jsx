import React from 'react';
import ReactDOM from 'react-dom';
import FeaturedContributorsSubpart from './FeaturedContributorsSubpart.jsx'

class FeaturedContributors extends React.Component{

	render(){

		return(

			<div>

	  	  		<div class="row">

					<h4 style={{ marginLeft:'6rem'}}>

						Featured Contributors

					</h4>

				</div>

				<div class = "row" style={{ marginLeft:'3.1rem'}}>

					<FeaturedContributorsSubpart />

					<FeaturedContributorsSubpart />
					
					<FeaturedContributorsSubpart />
					
					<div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">

					</div>

  				 	
				</div>

			</div>

		)

	}

}

export default FeaturedContributors;

	  	  		