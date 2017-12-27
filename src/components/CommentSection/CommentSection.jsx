import React from 'react';
import ReactDOM from 'react-dom';
import CommentSubPart from '../CommentSubPart/CommentSubPart.jsx';
import AddComment from '../AddComment/AddComment.jsx';
import { connect } from 'react-redux';
import * as someActions from '../../actions';
import { bindActionCreators } from 'redux';

require('../testing.css')
require('./CommentSection.css')

class CommentSection extends React.Component{

	constructor(props){
		super(props);

		this.state = {
			count: 12664201,
			showEntireData: false ,
			lastComment: [],
			comment_data: []
		}

	}

	incrementLike(pfid){
		var size = this.state.comment_data.length;
		var temp = this.state.comment_data;
		temp.forEach(function(item){
			if(item.pfid == pfid){
				var tmp = item.commentLikes;
				item.commentLikes = parseInt(tmp) + 1;
				item.isCommentLike = 1;
			}
		})
		this.setState({comment_data:temp});
		this.getLastComment()
	}

	decrementLike(pfid){
		var size = this.state.comment_data.length;
		var temp = this.state.comment_data;
		temp.forEach(function(item){
			if(item.pfid == pfid){
				var tmp = item.commentLikes;
				item.commentLikes = parseInt(tmp) - 1;
				item.isCommentLike = 0;
			}
		})
		this.setState({comment_data:temp});
		this.getLastComment()
	}

	render(){
		console.log('rerendering', this.props);

		return(

			<div className="">
				<AddComment />
				
				{

					this.props.showEntireData 

					? 
					
					this.props.comment_data_from_reducer.map((comment) => (

						<div class="row afterShowAll" >
							<CommentSubPart comments = {comment} incrementLike = {this.incrementLike.bind(this)} decrementLike = {this.decrementLike.bind(this)}/>
						</div>		
							
					))	

					:
					<div>
						<div class="row hfour_row" >
							
							<h4 class="hfour" onClick={(e) => {e.preventDefault(); this.props.viewAll()}}>

								View all {this.props.comment_data_from_reducer.length} comments

							</h4>

						</div>

						<div class="row">
							<CommentSubPart comments = {this.props.comment_data_from_reducer[this.props.comment_data_from_reducer.length - 1]} incrementLike = {this.incrementLike.bind(this)} decrementLike = {this.decrementLike.bind(this)} />
						</div>
					</div>

				}
				
				
			</div>

		)

	}

}

function mapStateToProps(state){
	console.log('mapped state', state);
  return {
    showEntireData: state.viewAllCommentsReducer,
    comment_data_from_reducer: state.comments
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(someActions, dispatch);
}


export default connect(mapStateToProps,mapDispatchToProps)(CommentSection);
