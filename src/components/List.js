import React from "react";
import { Link} from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../store/actions/actionCreators";

const List = (props) => {
  let listOptions;
  let isItem;

  if (props.match.path === "/list/items") {
    listOptions = props.items;
    isItem = true;
  }
  if (props.match.params.group) {
    isItem = true;

    listOptions = props.items.filter(
      (aItem) => aItem.group === props.match.params.group
    );
  }

  if (props.match.path === "/list/groups") {
    listOptions = props.groups;
    isItem = false;
  }
  return (
    <div className="random-list">
      <button onClick={props.history.goBack}> Atras </button>
      {isItem || <Link to="/createGroup"><button>Add Group</button></Link>}
      {listOptions.map((item, index) => {
        if (isItem) {
          return (
           
            <div key={index}>
              <Link to={`/list/items/${item.uniqueId}`}>
                <h4>{item.name}</h4>
              </Link>
            </div>  
          );
        }
        return (
          <div key={index}>
            <Link to={`/list/groups/${item}`}>
              <h4>{item}</h4>
            </Link>
          </div>
        );
      })}
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

export default connect(mapStateToProps, mapDispatchToProps)(List);
