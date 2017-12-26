import React from 'react';
import ReactDOM from 'react-dom';

require('../testing.css')
require('./AddComment.css')

class AddComment extends React.Component{

	constructor(props) {
		super(props);

		this.state = {
			newComment: '',
			count: 12664201
		}
	}

	handleChangeInInput(e) {
	    this.setState({ newComment: e.target.value });
	}

	addDataToComments(){
		this.props.addDataViaProp(this.state.newComment)
		this.state.newComment = ''
	}

	render(){

		return(

			<div className="">
				<div class="row">
					<div class="col-xs-1 col-sm-1 col-md-1 col-lg-1 img_div" >
						<img src="../../mahadev_contributor.jpg" class="img-circle img_sender" />
					</div>
					<div class="col-xs-8 col-sm-8 col-md-8 col-lg-8 col_8">
						<input type="text" class="form-control comment_div" value={this.state.newComment} onChange={ this.handleChangeInInput.bind(this)} placeholder="Add Your Comment.." ></input>
					</div>
					<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 col_2">
						<div class="div_comment" onClick={this.addDataToComments.bind(this)}>
								<span class="">Comment</span>
						</div>
					</div>
				</div>
			</div>

		)

	}

}

export default AddComment;