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
				<ol class="carousel-indicators" hidden>
				    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
				    <li data-target="#myCarousel" data-slide-to="1"></li>
				    <li data-target="#myCarousel" data-slide-to="2"></li>
				  </ol>
				  <div class="carousel-inner">
				    <div class="item active">
				      <FeaturedContributorsSubpart />
				    </div>

				    <div class="item active">
				      <FeaturedContributorsSubpart />
				    </div>

				    <div class="item active">
				      <FeaturedContributorsSubpart />
				    </div>
 
				  </div>

				  <a class="left carousel-control a_prev" href="#myCarousel" data-slide="prev" >
				    <span class="glyphicon glyphicon-chevron-left icon" ></span>
				    <span class="sr-only">Previous</span>
				  </a>
				  <a class="right carousel-control a_prev" href="#myCarousel" data-slide="next">
				    <span class="glyphicon glyphicon-chevron-right icon"></span>
				    <span class="sr-only">Next</span>
				  </a>

					
					
					<div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">

					</div>

  				 	
				</div>

			</div>

		)

	}

}

export default FeaturedContributors;

	  	  		