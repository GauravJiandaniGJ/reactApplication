import React from 'react';
import ReactDOM from 'react-dom';

require('../testing.css')
require('./RecommendedChannelsSubPart.css')

class RecommendedChannelsSubPart extends React.Component{

	render(){

		return(

        <div class="col-xs-4 col-sm-4 col-md-12 col-lg-12">
          <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 div_col_img" >
            <img src="../../mahadev_contributor.jpg" class="img-circle"/>
          </div>
          <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9 div_col_nine" >
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7">
                <h4 class="hfour_tag">Diacon'17

                          </h4>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                <h4 class="hfour_tag">
                  <small>32 votes</small>
                </h4>
              </div>
            </div>
            <div class="row">
              <h4 class="hfour_tag_subscribers">
                <small>

                            93.2K Subscribers

                          </small>
              </h4>
            </div>
          </div>
        </div>

		)

	}

}

export default RecommendedChannelsSubPart;