import React from 'react';
import ReactDOM from 'react-dom';
require('../testing.css');
require('./LikeButton.css');

class LikeButton extends React.Component{

	constructor(props) {
	      super(props);

	      this.state = {
	         isLiked: null
	      }

	}

	changeLikes(){
		this.setState({isLiked: !this.state.isLiked});
	}

	componentWillMount(){
		var temp = this.props.isLiked;

		if(temp == 0)
		{
			this.setState({isLiked: false})
		}else{
			this.setState({isLiked: true})
		}
	}

	getInitialState(){
		return{
			isLiked: false
		}
	}

	render(){

		var like = 	<div class="div_like" onClick={this.changeLikes.bind(this)}>
  						<span class="glyphicon glyphicon-thumbs-up icon_like"></span>
  						<span class="test text_like">&nbsp;Like</span>
  					</div>
	  				
	  	var unlike = <div class="div_like" onClick={this.changeLikes.bind(this)}>
  						<span class="glyphicon glyphicon-thumbs-down icon_like"></span>
  						<span class="test text_like">&nbsp;Unlike</span>
  					</div>
		  			
		return(

				<div>

	  				{this.state.isLiked ? like : unlike}

	  			</div>

			)

		}

	}

export default LikeButton;