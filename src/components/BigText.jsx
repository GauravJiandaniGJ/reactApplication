import React from 'react';
import ReactDOM from 'react-dom';
require('./testing.css')

class BigText extends React.Component{

	constructor(props) {

	      super(props);
			
	      this.state = {
	        expanded: false
	      }

	}

	toggle(){
		this.setState({expanded: !expanded});
	}

	render(){
		var content = this.props.content_data;
		var html = {
			content.length <= 120 
			? (<div>{content}</div>) 
			: (this.state.expanded 
				? <div>{content.substring(120)}<span onClick={this.toggle}> ...more</span></div> 
				: <div>{content}<span onClick={this.toggle}> ...less</span></div>
			  )
		};
		
		return html;

		// console.log('inside renderstage')

		// var text = "";

		// if(content.length > 120 && !this.state.firsttime)
		// {

		// 	console.log('inside first if')

		// 	text = <small style={{fontSize:'2em'}}> {content.substring(0,120)} <button onClick={this.showMoreText.bind(this)} style={{color:'#fb583e', backgroundColor:'white', border:0}}>more</button> </small>;

		// 	this.state.showLessTextHtml = true

		// }else if(content.length <= 120){

		// 	console.log('content is less than 120')

		// 	content = content + '.'

		// }else if(content.length > 120 && this.state.showLessTextHtml){

		// 	console.log('conetnt length > 120')

		// 	var t = content
			
		// 	text = <small style={{fontSize:'2em'}}> {t.substring(0,120)} <button onClick={this.showMoreText.bind(this)} style={{color:'#fb583e', backgroundColor:'white', border:0}}>more</button> </small>;

		// }else{

		// 	console.log('last else')

		// 	content = <small style={{fontSize:'2em'}}> {content} <button onClick={this.showMoreText.bind(this)} style={{color:'#fb583e', backgroundColor:'white', border:0}}>less</button></small>

		// }

		// return(

		// 	<div>

	 //  		  	{this.state.showLessTextHtml ? text : content}

		// 	</div>

		// )

	}

}

export default BigText;