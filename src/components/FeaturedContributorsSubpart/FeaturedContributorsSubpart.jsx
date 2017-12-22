import React from 'react';
import ReactDOM from 'react-dom';
require('./FeaturedContributorsSubpart.css');

class FeaturedContributorsSubpart extends React.Component{

	componentWillMount(){
		console.log('FeaturedContributorsSubpart')
		console.log(this.props.name_designation)
	}

	render(){

		return(

			<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 col_img">
				<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" >
					<img src="../../mahadev_contributor.jpg" class="img-circle" />
				</div>
				<div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">
					<h5 class="name_designation">{this.props.name_designation.firstname} {this.props.name_designation.lastname}</h5>
					<h4 class="name_designation">
						<small>{this.props.name_designation.currenttitle}</small>
					</h4>
				</div>
			</div>

		);

	}

}

export default FeaturedContributorsSubpart;


