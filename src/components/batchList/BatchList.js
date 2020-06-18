import React from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/actionCreators";

const BatchList = (props) => {
  return(
    
    <div>
      <Header/>
      
      <div className="random-list">
      <div className="list-btn-group">
          <div className="item-btn button" onClick={props.history.goBack}>
            <i class="fas fa-reply"></i>
          </div>
    
            <div className="item-btn button">
              <Link to="/batch/new">New Batch</Link>
            </div>
      </div>
      <div className="list">
        { props.batches
            .sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (a.name < b.name) {
                return -1;
              }
              // a must be equal to b
              return 0;
            })
            .map((batch, index) => {
                return (
                  <div className="listed-item" key={index}>
                    <Link to={`/batch/show/${batch.name}`}>
                      <h4>{batch.name}</h4>
                      <span><i class="fas fa-caret-right"></i></span>
                    </Link>
                  </div>
                );
              }
            )}
      </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    batches: state.batches,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { ...bindActionCreators(actionCreators, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(BatchList);
