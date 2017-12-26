import React from 'react';
import ReactDOM from 'react-dom';
import CommentSubPart from '../CommentSubPart/CommentSubPart.jsx';
import AddComment from '../AddComment/AddComment.jsx';

require('../testing.css')
require('./CommentSection.css')

class CommentSection extends React.Component{

	constructor(props){
		super(props);

		this.state = {
			comment_data: [
			{
				"pfcmid": "11466",
				"pfpid": "31968",
				"pfid": "12664201",
				"comment": "\n\n\nd\n\n\n\n\n\n\n\n\n\n\nm\n\n\n\n\n\n\n",
				"createdon": "2017-12-11 20:44:39",
				"modifiedon": "2017-12-11 20:44:39",
				"prid": null,
				"name": "Dr. Ashish Sharma",
				"profilephoto": "Images/Default/male.png",
				"gender": "male",
				"prof_specialty": "Paediatrics",
				"prof_sid": "79",
				"commentLikes": "0",
				"isCommentLike": "0"
			},
			{
				"pfcmid": "11450",
				"pfpid": "31968",
				"pfid": "12448554",
				"comment": "but in routine practice  if it come positive then we do screening by 3 different kits like tridot retriquic span signal or quadro kit & report as a hiv positive   & dispatch report with remarks : how ever it' s advisable to confirm by western blott method to confirm diagnosis is  it OK??",
				"createdon": "2017-12-10 22:28:52",
				"modifiedon": "2017-12-10 22:28:52",
				"prid": null,
				"name": "Dr. Uday Shah",
				"profilephoto": "Images/ProfilePicture/12448554/new1498400542439.JPEG",
				"gender": "male",
				"prof_specialty": "Pathology",
				"prof_sid": "81",
				"commentLikes": "3",
				"isCommentLike": "0"
			},
			{
				"pfcmid": "11418",
				"pfpid": "31968",
				"pfid": "12360991",
				"comment": "if card test is positive\ntwo technicians are supposed to issue the report as per NACO Guidelines\nHowever \nELISA becomes mandatory\nit has to be confirmed by Western blot before final issuance of the report.",
				"createdon": "2017-12-08 22:46:40",
				"modifiedon": "2017-12-08 22:46:40",
				"prid": null,
				"name": "Dr. Javaid Iqbal Khan",
				"profilephoto": "Images/ProfilePicture/12360991/new1512043940118.JPEG",
				"gender": "male",
				"prof_specialty": "Haematology",
				"prof_sid": "28",
				"commentLikes": "2",
				"isCommentLike": "0"
			}
			],
			count: 12664201,
			showEntireData: false ,
			lastComment: []
		}

		this.sortData();
		this.getLastComment()

	}

	sortData(){
		var temp = this.state.comment_data;
		temp.sort(function(a,b){
		  // Turn your strings into dates, and then subtract them
		  // to get a value that is either negative, positive, or zero.
		  return a.pfid - b.pfid;
		});
		this.setState({comment_data: temp})
	}

	addData(data){
		var current_time = new Date();
		console.log(current_time)
		var temp = {
			"pfcmid": "11419",
			"pfpid": "31969",
			"pfid": this.state.count + 1,
			"comment": data,
			"createdon": current_time.getFullYear() +'-' + current_time.getMonth() + '-' + current_time.getDate() + ' ' + current_time.getHours() + ':' + current_time.getMinutes(),
			"name": "Gaurav Jiandani",
			"profilephoto": "../../../mahadev_contributor.jpg",
			"gender": "male",
			"prof_specialty": "ReactJS Specialist",
			"commentLikes": 0
		}
		var temp_arr = this.state.comment_data;
		temp_arr.push(temp);
		this.setState({comment_data: temp_arr});
		this.setState({lastComment:temp})		
	}

	getLastComment(){
		var size = this.state.comment_data.length;
		var tempObj = this.state.comment_data[size - 1];
		var temp = [];
		temp['comment'] = tempObj['comment']
		temp['commentLikes'] = tempObj['commentLikes']
		temp['createdon'] = tempObj['createdon']
		temp['name'] = tempObj['name']
		temp['pfid'] = tempObj['pfid']
		temp['prof_specialty'] = tempObj['prof_specialty']
		temp['isCommentLike'] = tempObj['isCommentLike']
		console.log(temp)
		this.state.lastComment = temp;
		this.setState({lastComment: temp});

	}

	showAllComments(){
		this.setState({showEntireData: true})
	}

	render(){


		return(

			<div className="">
				<AddComment addDataViaProp = {this.addData.bind(this)}/>
				
				{

					this.state.showEntireData 

					? 
					
					this.state.comment_data.map((comment) => (

						<div class="row afterShowAll" >
							<CommentSubPart comments = {comment}/>
						</div>		
							
					))	

					:
					<div>
						<div class="row hfour_row" >
							<h4 class="hfour" onClick={this.showAllComments.bind(this)}>View all {this.state.comment_data.length} comments</h4>
						</div>
						<div class="row">
							<CommentSubPart comments = {this.state.lastComment}/>
						</div>
					</div>

				}
				
				
			</div>

		)

	}

}

export default CommentSection;