import React from 'react';
import ReactDOM from 'react-dom';
import FeaturedContributorsSubpart from '../FeaturedContributorsSubpart/FeaturedContributorsSubpart.jsx'
require('./FeaturedContributors_caraosel.css')
require('./FeaturedContributors.css')

class FeaturedContributors extends React.Component{

	render(){

		return(

			<div>
				<div class="row">
					<h4 class="hfour_contributor">

									Featured Contributors

					</h4>
				</div>
				<div class = "row carousel slide div_row_caraousel" >
					<div class="carousel-inner">
					
					{

						this.props.contributors.map((items) => (

							items.professionalprofile != undefined ? 

							<div class="item active">
								<FeaturedContributorsSubpart name_designation = {items.professionalprofile}/>
							</div>	

							: ''

						))	
					}
					</div>
					<a class="right carousel-control a_prev" href="#myCarousel" data-slide="next">
						<span class="glyphicon glyphicon-chevron-right icon"></span>
						<span class="sr-only">Next</span>
					</a>
					<div class="col-xs-7 col-sm-7 col-md-7 col-lg-7"></div>
				</div>
			</div>


		)

	}

}

export default FeaturedContributors;

	  	  		