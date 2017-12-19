import React from 'react';
import ReactDOM from 'react-dom';

class CustomNavBar extends React.Component{

	render(){

		const divStyle1 = {
			backgroundColor: '#1D1C24',
		};

		return(

				<div>


					<nav class="navbar navbar-default">
						  <div className="container-fluid" style={divStyle1}>
						    
						    <div class="navbar-header" style={{marginLeft:100}}>
						      <a class="navbar-brand" href="#" style={{paddingTop:10}}><img src="../../logo.jpg"/></a>
						    </div>

						    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						      <ul class="nav navbar-nav">
						        
						        <li>
						        	<a href="#" style={{paddingTop:5, paddingBottom:5, paddingLeft:15, paddingRight:15}}>
							        	<div style={{paddingLeft:10, color:'white'}}>
							        		<span class="glyphicon glyphicon-align-center" aria-hidden="true">
							        		</span>
							        	</div>
							        	<div style={{fontSize:12, color:'white'}}>
							        		FEED
							        	</div>
							        </a>
							    </li>

					            <li>
					            	<a href="#" style={{paddingTop:5, paddingBottom:5, paddingLeft:12, paddingRight:12}}>
					    	        	<div style={{paddingLeft:10}}>
					    	        		<span class="glyphicon glyphicon-briefcase" aria-hidden="true">
					    	        		</span>
					    	        	</div>
					    	        	<div style={{fontSize:12}}>
					    	        		JOBS
					    	        	</div>
					    	        </a>
					    	    </li>

					    	    <li>
					            	<a href="#" style={{paddingTop:5, paddingBottom:5, paddingLeft:12, paddingRight:12}}>
					    	        	<div style={{paddingLeft:15}}>
					    	        		<span class="glyphicon glyphicon-calendar" aria-hidden="true">
					    	        		</span>
					    	        	</div>
					    	        	<div style={{fontSize:11}}>
					    	        		EVENTS
					    	        	</div>
					    	        </a>
					    	    </li>

					    	    <li>
					            	<a href="#" style={{paddingTop:5, paddingBottom:5, paddingLeft:7, paddingRight:7}}>
					    	        	<div style={{paddingLeft:21}}>
					    	        		<span class="glyphicon glyphicon-list-alt" aria-hidden="true">
					    	        		</span>
					    	        	</div>
					    	        	<div style={{fontSize:11}}>
					    	        		DIRECTORY
					    	        	</div>
					    	        </a>
					    	    </li>

					    	    <li>
					            	<a href="#" style={{paddingTop:5, paddingBottom:5, paddingLeft:7, paddingRight:7}}>
					    	        	<div style={{paddingLeft:15}}>
					    	        		<span class="glyphicon glyphicon-search" aria-hidden="true">
					    	        		</span>
					    	        	</div>
					    	        	<div style={{fontSize:11}}>
					    	        		SEARCH
					    	        	</div>
					    	        </a>
					    	    </li>


			    	    	    <li>
			    	            	<a href="#" style={{paddingTop:5, paddingBottom:5, paddingLeft:7, paddingRight:7}}>
			    	    	        	<div style={{paddingLeft:26}}>
			    	    	        		<span class="glyphicon glyphicon-heart" aria-hidden="true">
			    	    	        		</span>
			    	    	        	</div>
			    	    	        	<div style={{fontSize:11}}>
			    	    	        		MEDICOLEGAL
			    	    	        	</div>
			    	    	        </a>
			    	    	    </li>

						      </ul>

						      <ul class="nav navbar-nav navbar-right">
						        
						        <li>
							        <a href="#" style={{color:'white'}}>
							        	<span class="glyphicon glyphicon-user" aria-hidden="true">
				    	    	        </span>
				    	    	    </a>
			    	    	    </li>
								
								<li>
							        <a href="#" style={{color:'white'}}>
							        	<span class="glyphicon glyphicon-bell" aria-hidden="true">
				    	    	        </span>
				    	    	    </a>
			    	    	    </li>

						        <li class="dropdown">
						          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" style={{paddingBottom:5, paddingTop:5, paddingRight:100}}>
						          	<img src="../../username.svg"/> 
						          		<span style={{color:'white'}} class="caret"></span>
						          	</a>
						        </li>

						      </ul>

						    </div>
						  </div>
						</nav>
						
	

				</div>
						

		)

	}

}

export default CustomNavBar;