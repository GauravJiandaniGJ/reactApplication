import React from 'react';
import ReactDOM from 'react-dom';

require('../testing.css')
require('./AddComment.css')

class AddComment extends React.Component{

	render(){

		return(

			<div className="">
				<div class="row">
					<div class="col-xs-1 col-sm-1 col-md-1 col-lg-1 img_div" >
						<img src="../../mahadev_contributor.jpg" class="img-circle img_sender" />
					</div>
					<div class="col-xs-8 col-sm-8 col-md-8 col-lg-8 col_8">
						<input type="text" class="form-control comment_div" placeholder="Add Your Comment.."></input>
					</div>
					<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 col_2">
						<a href="#">
							<div class="div_comment">
								<span class="">Comment</span>
							</div>
						</a>
					</div>
				</div>
			</div>

		)

	}

}

export default AddComment;