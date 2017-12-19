import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, Grid, Row, Col, code } from 'react-bootstrap';
import CustomNavBar from './CustomNavBar.jsx'
import RelatedVideo from './RelatedVideo.jsx'
import BookmarkButton from './BookmarkButton.jsx'
import FeaturedContributors from './FeaturedContributors.jsx'
// import { Player, BigPlayButton } from 'video-react';

class ReactBootstrapStyle extends React.Component {

	constructor(props) {
	      super(props);
			
	      this.state = {
	         showLessTextHtml: true
	      }
	 }

	 showText(){
	 	this.setState({showLessTextHtml: !this.state.showLessTextHtml});
	 }

	render(){

		const divStyle = {
			backgroundColor: 'red',
		};

		const divStyle1 = {
			backgroundColor: '#1D1C24',
		};

		const showMoreText = (
								<small>

				  	  				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
				  	  				 ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.. 
				  	  				 <button onClick={this.showText.bind(this)} style={{color:'#fb583e', backgroundColor:'white', border:0}}>more</button>

				  	  			</small>
				  	  		);

		const showLessText = (

								<small>

				  	  				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
				  	  				 ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud..Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
				  	  				 Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley 
				  	  				 of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
				  	  				  electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
				  	  				  containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of 
				  	  				  Lorem Ipsum. 
				  	  				  <button onClick={this.showText.bind(this)} style={{color:'#fb583e', backgroundColor:'white', border:0}}>less</button>

				  	  			</small>

							 )


		return(

			<div className="container-fluid">

				<div className="row">

					<CustomNavBar />					

				</div>

				<div class="row" style={{paddingTop:'1rem'}}>
				
				  <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">

				  	<div class="row" style={{textAlign:'center'}}>

					  	<div class= "glyphicon glyphicon-play-circle" style={{position:'absolute', display:'block', marginRight:'auto', top:'18%', left:'25%', marginLeft:'auto', textAlign:'center', color:'white', fontSize:'10rem',width: '50%',height:'50%'}}>

					  	</div>

					  	<img src="../../conference.jpg" style={{width:'100%'}}/>

				  	</div>

			  	  	<div class="row">

			  		  	<div class="col-xs-8 col-sm-8 col-md-8 col-lg-8" style={{marginLeft:'3rem'}}>
			  		  		
			  		  		<h3><b>Channel Name With all information lorem ipsum and word  &nbsp;</b>

			  		  			<span class="glyphicon glyphicon-lock" aria-hidden="true">
			  		  			
			  		  			</span>

			  		  		</h3>

			  		  	</div>
			  		  	
			  		  	<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" style={{marginTop:'3rem', marginLeft:'0.8rem'}}>
							
							<BookmarkButton />
				  		  	
			  		  	</div>

			  	  	</div>

			  	  	<div class="row">

			  	  		<h4 style={{marginTop:0, marginLeft:'4.9rem'}}>

			  	  			<small>

				  	  			<b>

				  	  				23.4K Views &nbsp; &nbsp; 

				  	  				<span class="glyphicon glyphicon-record" aria-hidden="true" style={{fontSize:'1rem', top:-1}}>
				  	  				
				  	  				</span>

				  	  				&nbsp; &nbsp; 23.4K Likes &nbsp; &nbsp; 

				  	  				<span class="glyphicon glyphicon-record" aria-hidden="true" style={{fontSize:'1rem', top:-1}}>
				  	  				
				  	  				</span>

				  	  				&nbsp; &nbsp; 23 Shares &nbsp; &nbsp; 


				  	  			</b>

			  	  			</small>

			  	  		</h4>

			  	  	</div>

			  	  	<div class="row">

			  	  		<h4 style={{ marginLeft:'4.9rem', marginRight: '4rem'}}>

			  	  			{this.state.showLessTextHtml ? showMoreText : showLessText}

			  	  		</h4>

			  	  	</div>

			  	  	<div class="row">

			  	  		<FeaturedContributors />

			  	  	</div>

			  	  	<div class="row" style={{textAlign:'center', border:'1px solid black', marginLeft:'3rem', marginRight:'3rem', marginTop:'2rem'}}>

			  	  		<div class="row" style={{textAlign:'center', marginLeft:'2rem', marginRight:'2rem', marginTop:'1rem'}}>

			  	  			<h1 style={{fontSize:'3rem', marginLeft:'7rem', marginRight:'7rem', marginTop:'2rem', marginBottom:'2rem'}}>Like this Video? Get Access to all the content of this Channel!</h1>

			  	  		</div>

			  	  		<div class="col-xs-7 col-sm-7 col-md-7 col-lg-7" style={{}}>

			  	  			<div class="row" style={{textAlign:'left', marginLeft:'4rem'}}>

			  	  				<h4><b>What's included?</b></h4>

			  	  			</div>

			  	  			<div class="row" style={{textAlign:'left', marginLeft:'1rem'}}>

			  	  				<ul>

			  	  					<li style={{marginBottom:'0.5rem'}}>17 lectures in 4 categories</li>

			  	  					<li style={{marginBottom:'0.5rem'}}>Lectures from renowned doctors from India</li>
			  	  					
			  	  					<li style={{marginBottom:'0.5rem'}}>Lifetime access to new content <a style={{color:'#fb583e'}}>Read more</a></li>

			  	  				</ul>

			  	  			</div>

			  	  			<div class="row" style={{textAlign:'left', marginLeft:'4rem', marginBottom:'4rem'}}>

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

				  	  							<div style={{marginRight:'1rem'}}>

				  	  								<img src="../../mahadev_contributor.jpg" class="img-circle" style={{position:'absolute', height:'100%'}}/>

				  	  							</div>
				  	  							  		  	
	  								  		  	<div style={{border:'1px solid white', backgroundColor:'#e2e4e6', color:'black', borderRadius:20, paddingLeft:'0rem', paddingRight:'0rem', paddingTop:'0.4rem', paddingBottom:'0.4rem', width:'100%', height:'50%', fontSize:'1.7rem'}}>
	  									  		  	
	  								  		  		<span style={{fontSize:'1rem', marginLeft:'3.5rem', color:'black', textAlign:'center'}}>&nbsp;Dr. Vishwa Shahnta</span>
	  								  		  	
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

			  	  		</div>

			  	  		<div class="col-xs-5 col-sm-5 col-md-5 col-lg-5" style={{}}>

			  	  			<div class="row">

			  	  				<img src="../../mahadev_contributor.jpg" class="img-circle"/>

			  	  			</div>

			  	  			<div class="row">

			  	  				<h4 style={{marginBottom:'0.02rem'}}><b>Diacon'17</b></h4>

			  	  				<h4 style={{marginTop:'0.04rem'}}><small>23.4K Subscribers</small></h4>

			  	  			</div>

			  	  			<div class="row">

			  	  				<div class="col-xs-7 col-sm-7 col-md-7 col-lg-7" style={{}}>

  						  		  	<a href="#">
  						  		  	
  							  		  	<div style={{textAlign:'center', marginLeft:'25%', marginRight:'auto', backgroundColor:'#fb583e', border:'2px solid',borderColor:'#fb583e', paddingLeft:'0.4rem', paddingRight:'0.4rem', paddingTop:'0.4rem', paddingBottom:'0.4rem', borderRadius:0, width:'80%', height:'50%', fontSize:'2rem'}}>
  								  		  	
  							  		  		<span class="glyphicon glyphicon-usd" style={{top:'0.14rem',color:'white', fontSize:'1.6rem'}}></span>

  							  		  		<span style={{color:'white', fontSize:'2rem', textAlign:'center'}}>&nbsp;Subscribe</span>
  							  		  	
  							  		  	</div>
  					  			
  					  			  	</a>
  					  		  	

			  	  				</div>

			  	  				<div class="col-xs-5 col-sm-5 col-md-5 col-lg-5" style={{paddingTop:'0.4rem'}}>

			  	  					<div class="callout right" style={{mozBorderRadius:15, webkitBorderRadius:'15px',border:'1px solid #CCCC99',padding:5,left:'-20px',top:'40%', borderLeft:'10px solid #444', backgroundColor:'#ffffff',position: 'relative',color:'#ccc'}}>

			  	  						1000

			  	  					</div>

			  	  				</div>

			  	  			</div>

			  	  		</div>

			  	  	</div>

				  </div>
				
				  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
				  	
				  	<RelatedVideo />

				  	<div class="row">

				  	hi

				  	</div>

				  </div>
				
				</div>

			</div>

		);

	}

}

export default ReactBootstrapStyle;
