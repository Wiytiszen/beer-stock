import React from 'react'
import { Link } from 'react-router-dom'
import Header from "./Header";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../store/actions/actionCreators";

function Batch(props) {
  const found =
    props.batches.find(
      (batch) => String(batch.name) === props.match.params.batchId
    )
  const useBatch = () => {
    props.confBatch(found.name)
    alert("Funciona")
  }
  return (
    <div className="batch-container">
      <Header />
      <div className="batch-items">
        <table className="table">
          <caption>{found.name}</caption>
          <thead>
            <tr>
              <th>Item</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {found.items.map((item, i) => {
              return (
                <tr key ={i}>
                  <td>{item.itemName}</td>
                  <td>{item.amount}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className={"item-btn-group"}>
        <div className="item-btn button" onClick={props.history.goBack}>
          <i class="fas fa-reply"></i>
        </div>
        <div className="item-btn button">
          <Link to={`/batch/edit/${found.name}`}>
            <i class="far fa-edit"></i>
          </Link>
        </div>
        <div className="item-btn confirm" onClick={useBatch}>
          <i class="fas fa-check"></i>
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

export default connect(mapStateToProps, mapDispatchToProps)(Batch);
