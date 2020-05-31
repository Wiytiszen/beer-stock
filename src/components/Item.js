import React, { useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actionCreators from "../store/actions/actionCreators";

const Item = (props) => {
  const handleDel = () => {
    if (window.confirm("Are you sure you wish to delete this item?")) {
      props.delItem(found.uniqueId);
      props.history.goBack();
      return;
    }
    return;
  };
  const [amount, setAmount] = useState();

  const found =
    props.items.find(
      (aItem) => String(aItem.uniqueId) === props.match.params.item
    ) ||
    props.items.filter((aItem) => aItem.group === props.match.params.group);
  // const belongGroup = props.items.filter(aItem => aItem.group === props.match.params.group)
  return (
    <div className="item-container">
      <div className="item-amount">
        <p>
          {found.amount}
          <span>{found.measureUnit}</span>
        </p>
        <p>{`${found.name}`}</p>
      </div>
      <div className="quick-modify">
        <input
          type="number"
          value={amount}
          placeholder="Quick change"
          onChange={(e) => setAmount(e.target.value)}
        />
        <div
          onClick={() => {
            props.increaseItem(found.uniqueId, amount);
          }}
        >
          <i class="fas fa-plus-circle"></i>
        </div>
        <div
          onClick={() => {
            props.decreaseItem(found.uniqueId, amount);
          }}
        >
          <i class="fas fa-minus-circle"></i>
        </div>
      </div>

      <p>{`Last Modification: ${found.lastModification}`} </p>
      <p>{`by: ${found.by}`}</p>
      <p>{`Last Amount: ${found.lastAmount}`}</p>



      <div className={"item-btn-group"}>
        <div className="item-btn button" onClick={props.history.goBack} >
          <i class="fas fa-reply"></i>
        </div>
        <div className="item-btn button" >
          <Link to={`/itemForm/${found.uniqueId}`}><i class="far fa-edit"></i></Link>
        </div>
        <div className="item-btn delete"
          onClick={handleDel}
        >
          <i class="far fa-trash-alt"></i>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.items,
    groups: state.groups,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { ...bindActionCreators(actionCreators, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);
