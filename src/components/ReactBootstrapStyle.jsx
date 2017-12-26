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
		this.setState({videoObj:{
			"videoid": 1,
			"videoaccountid": 3,
			"title": "New FIndings in Medical Surgeries",
			"synopsis": "The very first video ever created in the VIDEO producttttttttttttttttttttttttttttttttttttttttttt. Produced by backend. Gaurav Jiandani Created It to show more text option in the screen.     ",
			"rank": 1,
			"attachedpfpid": 5605,
			"videourl": null,
			"videoplatform": null,
			"videoembedcode": null,
			"durationinms": 1000980,
			"videoidentifier": null,
        "thumbnail": "https://s17.postimg.org/ctvxlqfz3/radiology_1_main_graphic_720_x_324.JPEG",
        "ispaid": 1,
        "isactive": 1,
        "createdon": "2017-11-16T16:04:48.000Z",
        "modifiedon": "2017-11-16T16:04:51.000Z",
        "videoaccount": {
        	"videoaccountid": 3,
        	"title": "Diacon 2016",
        	"synopsis": "This video covers the Diacon 2016.",
        	"coverimage": [
                "https://s2.postimg.org/6673nrbjd/IMG_5742.jpg"
                ],
            "logo": "https://s3-ap-southeast-1.amazonaws.com/plexusmd/Images/common/testVideos/download.jpg",
            "thumbnail": "https://s2.postimg.org/iktvo6ii1/IMG_5417.jpg",
            "price": 1,
            "freetrialdays": 1000,
            "splitvideosbydate": 1,
            "isactive": 1,
            "createdon": "2017-11-16T18:02:13.000Z",
            "modifiedon": "2017-11-16T18:02:15.000Z"
        },
        "sponsors": [
        {
        	"videoentitysponsorid": 1,
        	"name": "PlexusMD Tech Team",
        	"description": "Video Sponsored by PlexusMD tech Team",
        	"videoid": 1,
        	"videoaccountid": 2,
                "logo": "https://s33.postimg.org/jaomtj827/554216_original.jpg",
                "uaid": 385,
                "targeturl": "The target URL",
                "isactive": 1,
                "createdon": "2017-11-16T17:41:28.000Z",
                "modifiedon": "2017-11-16T17:41:30.000Z",
                "professionalprofile": {
                	"pfid": 351,
                	"firstname": "Binal",
                	"lastname": "Doshi",
                	"profilephoto": "Images/ProfilePicture/351",
                	"currenttitle": "Co-Founder, PlexusMD",
                	"summary": "Dr Binal Doshi is the Co-founder of PlexusMD. She pursued her MBBS from BJ Medical College, Ahmedabad in 2011 and then went on to pursue MBA from IIM K in 2013. \\n\\nPrior to PlexusMD, she worked with GSK for 1.5 years where she acquired experience in Sales and Marketing. She has expertise in formulating Sales and Marketing Strategies, Medical Content Writing and curating, Editorial Management and Social Media Marketing.\\n\\nShe was a Topper in Std 12 (8th in Gujarat) and Std 10 Boards (6th in Gujarat). She is also one of the 10 winners of Women Entrepreneurship Quest (WEQ) 2016, organised by Anita Borg Institute India (ABI India) and the Department of Science and Technology (DST), Government of India.\\n\\nWhen she is not working, you can find her reading, netflixing or playing the piano.",
                	"uaid": 385
                },
                "providerprofile": null
            },
            {
            	"videoentitysponsorid": 4,
            	"name": "ABCD",
            	"description": "Random",
            	"videoid": 1,
            	"videoaccountid": 2,
                "logo": "https://s33.postimg.org/5fqcb8dov/PLEXUS_MD_FINAL_LOGO.jpg",
                "uaid": 12660030,
                "targeturl": "No need for that",
                "isactive": 1,
                "createdon": "2017-11-17T17:39:30.000Z",
                "modifiedon": "2017-11-17T17:39:32.000Z",
                "professionalprofile": {
                	"pfid": 12659952,
                	"firstname": "Rupesh",
                	"lastname": "gor",
                	"profilephoto": "Images/ProfilePicture/12659952",
                	"currenttitle": "Consultant",
                	"summary": null,
                	"uaid": 12660030
                },
                "providerprofile": null
            }
            ],
            "categorytags": [
            {
            	"videocategoryid": 2,
            	"rank": 1,
            	"name": "Promotional",
                "icon": "https://s2.postimg.org/fhxqyuy5l/stethoscope-medical-tool_318-61950.jpg"
            },
            {
            	"videocategoryid": 4,
            	"rank": 7,
            	"name": "Free For ALL",
                "icon": "https://s2.postimg.org/8epvj9fvd/caduceus-medical-symbol_318-44302.jpg"
            }
            ],
            "specialties": [],
            "authors": [
            {
            	"videoauthorid": 1,
            	"videoid": 1,
            	"uaid": 385,
            	"rank": 1,
            	"primary": 0,
            	"isactive": 1,
            	"createdon": "2017-11-16T17:20:38.000Z",
            	"modifiedon": "2017-11-16T17:20:40.000Z",
            	"professionalprofile": {
            		"pfid": 351,
            		"firstname": "Binal",
            		"lastname": "Doshi",
            		"profilephoto": "Images/ProfilePicture/351/new1506705129503.JPEG",
            		"currenttitle": "Co-Founder, PlexusMD",
            		"summary": "Dr Binal Doshi is the Co-founder of PlexusMD. She pursued her MBBS from BJ Medical College, Ahmedabad in 2011 and then went on to pursue MBA from IIM K in 2013. \\n\\nPrior to PlexusMD, she worked with GSK for 1.5 years where she acquired experience in Sales and Marketing. She has expertise in formulating Sales and Marketing Strategies, Medical Content Writing and curating, Editorial Management and Social Media Marketing.\\n\\nShe was a Topper in Std 12 (8th in Gujarat) and Std 10 Boards (6th in Gujarat). She is also one of the 10 winners of Women Entrepreneurship Quest (WEQ) 2016, organised by Anita Borg Institute India (ABI India) and the Department of Science and Technology (DST), Government of India.\\n\\nWhen she is not working, you can find her reading, netflixing or playing the piano.",
            		"uaid": 385
            	},
            	"providerprofile": null
            },
            {
            	"videoauthorid": 3,
            	"videoid": 1,
            	"uaid": 1210,
            	"rank": 4,
            	"primary": 1,
            	"isactive": 1,
            	"createdon": "2017-12-12T17:34:29.000Z",
            	"modifiedon": "2017-12-12T17:34:33.000Z",
            	"providerprofile": {
            		"prid": 30,
            		"uaid": 1210,
            		"orgid": 8534,
            		"name": "Infocus Diagnostics,Navrangpura",
            		"logo": null,
            		"address": "45 B SWASTIK SOCIETY OPP VIPUL DUDHIYA STADIUM TO COMMERCE SIX ROADS NAVRANGPURA"
            	},
            	"professionalprofile": null
            },
            {
            	"videoauthorid": 4,
            	"videoid": 1,
            	"uaid": 1556,
            	"rank": 7,
            	"primary": 1,
            	"isactive": 1,
            	"createdon": "2017-12-12T17:34:48.000Z",
            	"modifiedon": "2017-12-12T17:34:51.000Z",
            	"providerprofile": {
            		"prid": 54,
            		"uaid": 1556,
            		"orgid": 8670,
            		"name": "PlexusMD Careers Ahmedabad",
            		"logo": "Images/Provider/8670/newMini Logo Orange.png",
            		"address": "B102, Devshrishti Apt., Opp Reliance Market B/h Hanuman Temple, Bodakdev"
            	},
            	"professionalprofile": null
            }
            ],
            "subscriptionactive": 0,
            "viewinfo": null,
            "totalviews": 2,
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

	const text = this.state.videoObj.synopsis;

	return(

		<div className="container-fluid">
			<div className="row div_nav">
				<CustomNavBar />
			</div>
			<div class="row row_cont_video">
				<div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
					<div class="row div_video_icon">
						<div class= "glyphicon glyphicon-play-circle play_btn" ></div>
						<img src={this.state.videoObj.thumbnail} class="img_video"/>
					</div>
					<div class="row">
						<div class="col-xs-8 col-sm-8 col-md-8 col-lg-8 div_name_lock">
							<h3 class="hthree_name">
								<b>{this.state.videoObj.title}  &nbsp;</b>

					  		  			{
					  		  				this.state.videoObj.ispaid == 1 ? 
								<span class="glyphicon glyphicon-lock" aria-hidden="true"></span> : ''
					  		  			
					  		  			}

					  		  		
							</h3>
						</div>
						<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 div_bookmark">
							<BookmarkButton isBookmarkDone = {this.state.videoObj.bookmarked}/>
						</div>
					</div>
					<div class="row">
						<h4 class="hfour_vls">
							<small>
								<b>

						  	  				{this.state.videoObj.totalviews} Views &nbsp; &nbsp; 

						  	  				
									<span class="glyphicon glyphicon-one-fine-dot" aria-hidden="true" ></span>

						  	  				&nbsp; &nbsp; {this.state.videoObj.likes} Likes &nbsp; &nbsp; 

						  	  				
									<span class="glyphicon glyphicon-one-fine-dot" aria-hidden="true" ></span>

						  	  				&nbsp; &nbsp; {this.state.videoObj.shares} Shares &nbsp; &nbsp; 


						  	  			
								</b>
							</small>
						</h4>
					</div>
					<div class="row">
						<h4 class="hfour_bigtext">
                        	<BigText content_data={this.state.videoObj.synopsis}/>
						</h4>
					</div>
					<div class="row">
						<FeaturedContributors contributors = {this.state.videoObj.authors}/>
					</div>
					<div class="row div_row_content" >
						<Content content_details = {this.state.videoObj.videoaccount} contributors = {this.state.videoObj.authors} />
					</div>
					<div class="row">
						<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
							<LikeButton isLiked = {this.state.videoObj.liked}/>
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
