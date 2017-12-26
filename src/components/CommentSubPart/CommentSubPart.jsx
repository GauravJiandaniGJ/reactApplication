import React from 'react';
import ReactDOM from 'react-dom';

require('../testing.css')
require('./CommentSubPart.css')

class CommentSubPart extends React.Component{

	incrementLikeToParent(){
		this.props.incrementLike(this.props.comments.pfid)
	}

	decrementLikeToParent(){
		this.props.decrementLike(this.props.comments.pfid)	
	}

	render(){

		var createdOn = new Date(this.props.comments.createdon);

		return(

			<div className="">
				<div class="col-xs-1 col-sm-1 col-md-1 col-lg-1 img_div_comment" >
					<img src="../../mahadev_contributor.jpg" class="img-circle img_tag_comment"/>
				</div>
				<div class="col-xs-10 col-sm-10 col-md-10 col-lg-10 details_div" >
					<div class="row">
						<h4 class="hfour_tag">
							<b>{this.props.comments.name}</b>
							<small class="category_of_medicine">{this.props.comments.prof_specialty}</small>
						</h4>
					</div>
					<div class="row">
						<h4 class="hfour_comment">
							<small>

								{this.props.comments.comment}
							  				
							</small>
						</h4>
					</div>
					<div class="row row_date" >
						<h5 class="hfive">
							<small>

							  				{createdOn.getHours() + ':' + createdOn.getMinutes() + ':' + createdOn.getSeconds() + ' ' + createdOn.getDate() + '-' + createdOn.getMonth() + '-' + createdOn.getFullYear()} &nbsp;&nbsp;

							  				
								<span class="glyphicon glyphicon-one-fine-dot" aria-hidden="true" ></span>
								
								{

									this.props.comments.isCommentLike == 0 ?

									<span class="like_btn" onClick = {this.incrementLikeToParent.bind(this)}>&nbsp;&nbsp;Like &nbsp;&nbsp;</span>

									:

									<span class="like_btn" onClick = {this.decrementLikeToParent.bind(this)}>&nbsp;&nbsp;Unlike &nbsp;&nbsp;</span>

								}
								
								<span class="glyphicon glyphicon-one-fine-dot" aria-hidden="true" >&nbsp;</span>
								<span class="glyphicon glyphicon-thumbs-up like_btn"></span>
								<span class="like_btn">&nbsp;&nbsp;{this.props.comments.commentLikes}</span>
							</small>
						</h5>
					</div>
				</div>
			</div>

		)

	}

}

export default CommentSubPart;