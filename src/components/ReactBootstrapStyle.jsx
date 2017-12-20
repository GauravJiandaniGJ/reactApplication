import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, Grid, Row, Col, code } from 'react-bootstrap';
import CustomNavBar from './CustomNavBar.jsx'
import RelatedVideo from './RelatedVideo.jsx'
import BookmarkButton from './BookmarkButton.jsx'
import FeaturedContributors from './FeaturedContributors.jsx'
import Content from './Content.jsx'
import LikeButton from './LikeButton.jsx'
import ShareButton from './ShareButton.jsx'
import CommentSection from './CommentSection.jsx'
import RecommendedChannels from './RecommendedChannels.jsx'
import BigText from './BigText.jsx'
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

		const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"+
				  	  				 "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud..Lorem Ipsum is simply dummy text of the printing and typesetting industry. "+
				  	  				 "Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley "+
				  	  				 "of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into"+
				  	  				  "electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets "+
				  	  				  "containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of "+
				  	  				  "Lorem Ipsum."

		return(

			<div className="container-fluid">

				<div className="row" style={{boxShadow:'10px 10px 8px #888888'}}>

					<CustomNavBar />					

				</div>

				<div class="row" style={{paddingTop:'1rem'}}>
				
				  <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">

				  	<div class="row" style={{textAlign:'center'}}>

					  	<div class= "glyphicon glyphicon-play-circle" style={{position:'absolute', display:'block', marginRight:'auto', top:'13%', left:'25%', marginLeft:'auto', textAlign:'center', color:'white', fontSize:'10rem',width: '50%',height:'50%'}}>

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

			  	  		<h4 style={{ marginLeft:'4.9rem', marginRight: '4rem', fontSize:'100%'}}>

			  	  			<BigText content_data={text}/>

			  	  		</h4>

			  	  	</div>

			  	  	<div class="row" style={{fontSize:'80%'}}>

			  	  		<FeaturedContributors />

			  	  	</div>

			  	  	<div class="row" style={{textAlign:'center', border:'1px solid black',  rginLeft:'3rem', marginRight:'3rem', marginTop:'2rem'}}>

			  	  		<Content />

			  	  	</div>

			  	  	<div class="row">

			  	  		<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">

			  	  			<LikeButton />

			  	  		</div>

			  	  		<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
			  	  		
			  	  			<ShareButton />

			  	  		</div>

			  	  	</div>

			  	  	<div class="row" style={{marginTop:'-1rem'}}>

			  	  		<hr />

			  	  	</div>

			  	  	<div class="row">

			  	  		<CommentSection />
			  	  		
			  	  	</div>

				  </div>
				
				  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
				  	
				  	<RelatedVideo />

				  	<div class="row">

				  		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">

				  			<RecommendedChannels />
					  		
				  		</div>

				  	</div>

				  </div>
				
				</div>

			</div>

		);

	}

}

export default ReactBootstrapStyle;
