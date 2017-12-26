import React from 'react';
import ReactDOM from 'react-dom';
import RelatedVideoSubpart from '../RelatedVideoSubpart/RelatedVideoSubpart.jsx';

require('../testing.css')

class RelatedVideo extends React.Component{

	render(){

		return(

			<div>
				<div class="row" style={{marginLeft:'1rem'}}>
					<h3 style={{fontSize:'2vmax'}}>Related Videos</h3>
				</div>
				<div class="row" style={{marginLeft:'1rem'}}>
					<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4" style={{paddingLeft:0}}>
						<div class= "glyphicon glyphicon-play-circle" style={{position:'absolute', display:'block', top:'36%', left:'20%', marginTop:'auto', marginBottom:'auto', textAlign:'center', color:'white', fontSize:'3em',width: '50%',height:'50%'}}></div>
						<img src="../../firstvideo.jpg" style={{width:'100%'}}/>
					</div>
					<div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
						<div class="row">
							<h4 style={{marginTop:0, marginBottom:0, fontSize:'2em', overflowX:'auto'}}>Lorem Ipsum dolor sit amet consecteur</h4>
						</div>
						<div class="row">
							<div class="col-xs-1 col-sm-1 col-md-2 col-lg-2" style={{paddingLeft:'0.12rem',paddingRight:'0.8rem', paddingTop:'0.3rem'}}>
								<img src="../../thumbnail.jpg" class="img-circle" style={{width:'100%'}}/>
							</div>
							<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6" style={{paddingLeft:'0rem',paddingRight:0}}>
								<h3 style={{marginTop:'1px', fontSize:'2.2em'}}>
									<small>Channel Name</small>
								</h3>
							</div>
							<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4" style={{paddingLeft:'0rem',paddingRight:0}}>
								<h3 style={{marginTop:'1px', fontSize:'2.2em'}}>
									<small>91.2K

													
										<span class="glyphicon glyphicon-eye-open" aria-hidden="true" style={{paddingLeft:'0.3rem'}}></span>
									</small>
								</h3>
							</div>
						</div>
					</div>
				</div>
				<RelatedVideoSubpart />
				<RelatedVideoSubpart />
			</div>

		)

	}
}

export default RelatedVideo;