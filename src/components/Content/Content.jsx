import React from 'react';
import ReactDOM from 'react-dom';
import SingleSingleContributor from '../SingleSingleContributor/SingleSingleContributor.jsx';
import BigText from '../BigText/BigText.jsx';

require('./Content.css');
require('../testing.css');

class Content extends React.Component{

	render(){

		return(

			<div>
				<div class="row first_row" >
					<h1 class="hone_tag">Like this Video? Get Access to all the content of this Channel!</h1>
				</div>
				<div class="col-xs-12 col-sm-12 col-md-9 col-lg-7" >
					<div class="row row_whats" >
						<h3>
							<b>What's included?</b>
						</h3>
					</div>
					<div class="row row_list">
						<ul>
							<li class="row_items">
								<BigText content_data="17 lectures in 4 categories" />
							</li>
							<li class="row_items">
								<BigText content_data="Lectures from renowned doctors from India" />
							</li>
							<li class="row_items">
								<BigText content_data="Life Time access to new Content" />
							</li>
						</ul>
					</div>
					<div class="row row_contributors">
						<h3 >
							<b>Contributors</b>
						</h3>
						<div class="row">

							{

								this.props.contributors.map((items) => (

									items.professionalprofile != undefined ? 

									<div class="item active">
										<SingleSingleContributor name_designation = {items.professionalprofile}/>
									</div>	

									: ''

								))
							}

						</div>
					</div>
				</div>
				<div class="col-xs-12 col-sm-12 col-md-5 col-lg-5 image_div" >
					<div class="row img_row">
						<img src={this.props.content_details.logo} class="img-circle image"/>
					</div>
					<div class="row channel_row">
						<h4 class="hfour_channel">
							<b>{this.props.content_details.title}</b>
						</h4>
						<h4 class="hfour_channel">
							<small>23.4K Subscribers</small>
						</h4>
					</div>
					<div class="row">
						<div class="col-xs-5 col-xs-offset-1 col-sm-5 col-sm-offset-2 col-md-6 col-lg-6">
							<a href="#">
								<div class="div_subscribe">
									<span class="icon_subscribe">

									  		  		 Subscribe
									  		  		
									  		  		</span>
								</div>
							</a>
						</div>
						<div class="col-xs-3 col-sm-3 col-md-4 col-lg-4 div_tooltip">
							<span class="tooltiptext">

				  	  						Rs. 1000

				  	  						
								<span class="icon_subscribe_tooltip">

				  	  							Access all Content of this channel at only Rs. 1000

				  	  						</span>
							</span>
						</div>
					</div>
				</div>
			</div>


		)

	}

}

export default Content;