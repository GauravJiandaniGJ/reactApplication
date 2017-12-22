import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, Grid, Row, Col, code } from 'react-bootstrap';
import CustomNavBar from './CustomNavBar.jsx'
import RelatedVideo from './RelatedVideo/RelatedVideo.jsx'
import BookmarkButton from './BookmarkButton/BookmarkButton.jsx'
import FeaturedContributors from './FeaturedContributors/FeaturedContributors.jsx'
import Content from './Content/Content.jsx'
import LikeButton from './LikeButton/LikeButton.jsx'
import ShareButton from './ShareButton/ShareButton.jsx'
import CommentSection from './CommentSection/CommentSection.jsx'
import RecommendedChannels from './RecommendedChannels/RecommendedChannels.jsx'
import BigText from './BigText/BigText.jsx'
require('./testing.css')
require('./ReactBootstrapStyle.css')
// import { Player, BigPlayButton } from 'video-react';

class ReactBootstrapStyle extends React.Component {

	constructor(props) {
	      super(props);
			
	      this.state = {
	         showLessTextHtml: true,
	         videoObj: Object
	      }
	 }

	 componentWillMount(){
	 	console.log('called')
	 	this.setState({videoObj:{
        "videoid": 5,
        "videoaccountid": 1,
        "title": "New Techniques in Radiology",
        "synopsis": "This video explains new techniques in Radiology by the leading organisations of the world ",
        "rank": 2,
        "attachedpfpid": 6630,
        "videourl": null,
        "videoplatform": null,
        "videoembedcode": null,
        "durationinms": 100000,
        "videoidentifier": null,
        "thumbnail": "https://s17.postimg.org/ctvxlqfz3/radiology_1_main_graphic_720_x_324.jpg",
        "ispaid": 1,
        "isactive": 1,
        "createdon": "2017-12-06T11:13:53.000Z",
        "modifiedon": "2017-12-06T11:13:56.000Z",
        "videoaccount": {
            "videoaccountid": 1,
            "title": "PlexusMD Originals ",
            "synopsis": "PlexusMD originals brings to you the premium quality content produced by PlexusMD in partnership with leading medical organizations.Join the fastest growing Healthcare network\nConnect and engage with doctors worldwide. Share updates and opportunities. Drive professional growth.\n",
            "coverimage": [
                "https://s2.postimg.org/8m8x1k3vt/18a1bb2.png",
                "https://s2.postimg.org/8m8x1k3vt/18a1bb2.png",
                "https://s17.postimg.org/at92boljz/Christmasat_Plexus_MD.jpg"
            ],
            "logo": "https://s3-ap-southeast-1.amazonaws.com/plexusmd/Images/common/testVideos/mediconference.jpg",
            "thumbnail": "https://s2.postimg.org/3nlenb2qh/554216_original.jpg",
            "price": 1,
            "freetrialdays": 180,
            "splitvideosbydate": 1,
            "isactive": 1,
            "createdon": "2017-11-16T15:57:35.000Z",
            "modifiedon": "2017-11-16T15:57:39.000Z"
        },
        "sponsors": null,
        "categorytags": null,
        "specialties": null,
        "authors": [
            {
                "videoauthorid": 8,
                "videoid": 5,
                "uaid": 1003,
                "rank": 3,
                "primary": 1,
                "isactive": 1,
                "createdon": "2017-12-12T17:36:53.000Z",
                "modifiedon": "2017-12-12T17:36:57.000Z",
                "providerprofile": {
                    "prid": 23,
                    "uaid": 1003,
                    "orgid": 8483,
                    "name": "Aarogyam Hospital",
                    "logo": null,
                    "address": "35, Veernagar Society Bhimjipura, Ahmedabad"
                },
                "professionalprofile": null
            },
            {
                "videoauthorid": 16,
                "videoid": 5,
                "uaid": 346,
                "rank": 3,
                "primary": 0,
                "isactive": 1,
                "createdon": "2017-12-12T17:48:14.000Z",
                "modifiedon": "2017-12-12T17:48:19.000Z",
                "professionalprofile": {
                    "pfid": 320,
                    "firstname": "Sanjiv",
                    "lastname": "Amin",
                    "profilephoto": "Images/ProfilePicture/320/newS N Amin Photo.jpg",
                    "currenttitle": "Consultant Rheumatologist",
                    "summary": " ",
                    "uaid": 346
                },
                "providerprofile": null
            }
        ],
        "subscriptionactive": 0,
        "viewinfo": null,
        "totalviews": 0,
        "likes": 0,
        "comments": 0,
        "liked": 0,
        "bookmarked": 0,
        "saveid": null,
        "shares": 0
   		}
	   }
	  )
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

				<div className="row div_nav">

					<CustomNavBar />					

				</div>

				<div class="row row_cont_video">
				
				  <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">

				  	<div class="row div_video_icon">

					  	<div class= "glyphicon glyphicon-play-circle play_btn" >

					  	</div>

					  	<img src={this.state.videoObj.thumbnail} class="img_video"/>

				  	</div>

			  	  	<div class="row">

			  		  	<div class="col-xs-8 col-sm-8 col-md-8 col-lg-8 div_name_lock">
			  		  		
			  		  		<h3 class="hthree_name"><b>{this.state.videoObj.title}  &nbsp;</b>

			  		  			{
			  		  				this.state.videoObj.ispaid == 1 ? <span class="glyphicon glyphicon-lock" aria-hidden="true">
			  		  			
			  		  			</span> : ''
			  		  			
			  		  			}

			  		  		</h3>

			  		  	</div>
			  		  	
			  		  	<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 div_bookmark">
							
							<BookmarkButton isActive={this.state.videoObj.isactive}/>
				  		  	
			  		  	</div>

			  	  	</div>

			  	  	<div class="row">

			  	  		<h4 class="hfour_vls">

			  	  			<small>

				  	  			<b>

				  	  				23.4K Views &nbsp; &nbsp; 

				  	  				<span class="glyphicon glyphicon-one-fine-dot" aria-hidden="true" >
				  	  				
				  	  				</span>

				  	  				&nbsp; &nbsp; 23.4K Likes &nbsp; &nbsp; 

				  	  				<span class="glyphicon glyphicon-one-fine-dot" aria-hidden="true" >
				  	  								  	  				
				  	  				</span>

				  	  				&nbsp; &nbsp; 23 Shares &nbsp; &nbsp; 


				  	  			</b>

			  	  			</small>

			  	  		</h4>

			  	  	</div>

			  	  	<div class="row">

			  	  		<h4 class="hfour_bigtext">

			  	  			<BigText content_data={text}/>

			  	  		</h4>

			  	  	</div>

			  	  	<div class="row">

			  	  		<FeaturedContributors />

			  	  	</div>

			  	  	<div class="row div_row_content" >

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

			  	  	<div class="row div_row_line">

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
