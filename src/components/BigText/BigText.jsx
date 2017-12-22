import React from 'react';
import ReactDOM from 'react-dom';
require('../testing.css')
require('./BigText.css')

class BigText extends React.Component{

	constructor(props) {

	      super(props);
			
	      this.state = {
	         showLessTextHtml: false,
	         firsttime: false,
	         mainText: ''
	      }

	}

	showMoreText(){

		this.setState({showLessTextHtml: !this.state.showLessTextHtml, firsttime: true});

	}

	render(){
	
		var content = this.props.content_data;

		console.log('inside renderstage')

		var text = "";

		if(content.length > 120 && !this.state.firsttime)
		{

			console.log('inside first if')

			text = <small class="text_size"> {content.substring(0,120)} <button onClick={this.showMoreText.bind(this)} style={{color:'#fb583e', backgroundColor:'white', border:0}}>more</button> </small>;

			this.state.showLessTextHtml = true

		}else if(content.length <= 120){

			console.log('content is less than 120')

			content = content + '.'

		}else if(content.length > 120 && this.state.showLessTextHtml){

			console.log('conetnt length > 120')

			var t = content
			
			text = <small class="text_size"> {t.substring(0,120)} <button onClick={this.showMoreText.bind(this)} style={{color:'#fb583e', backgroundColor:'white', border:0}}>more</button> </small>;

		}else{

			console.log('last else')

			content = <small class="text_size"> {content} <button onClick={this.showMoreText.bind(this)} style={{color:'#fb583e', backgroundColor:'white', border:0}}>less</button></small>

		}

		return(

			<div>

	  		  	{this.state.showLessTextHtml ? text : content}

			</div>

		)

	}

}

export default BigText;