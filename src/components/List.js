import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../store/actions/actionCreators";

const List = (props) => {
  let listOptions;
  let isItem;
  let isGroupItem = false;
  let groupName;

  if (props.match.path === "/list/items") {
    listOptions = props.items;
    isItem = true;
  }
  if (props.match.params.group) {
    isItem = true;
    isGroupItem = true;

    groupName = props.match.params.group;
    const groupExist = props.groups.find(i => i === groupName);
    if(!groupExist){
      props.history.push('/list/groups')
    }
    listOptions = props.items.filter(
      (aItem) => aItem.group === props.match.params.group
    );
  }

  if (props.match.path === "/list/groups") {
    listOptions = props.groups;
    isItem = false;
  }
  return (
    <>
      <Header />

      <div className="random-list">
        <div className="list-btn-group">
          <div className="item-btn button" onClick={props.history.goBack}>
            <i class="fas fa-reply"></i>
          </div>
          {!isItem || (
            <div className="item-btn button">
              <Link to="/itemForm">New Item</Link>
            </div>
          )}
          {isItem || (
            <div className="item-btn button">
              <Link to="/createGroup">New Category</Link>
            </div>
          )}
        </div>
        
        <div className="list">
        {isGroupItem && (
          <div  className="category-name">
            <Link to={`/editGroup/${groupName}`}>
              <p>{groupName}</p>
              <i class="far fa-edit"></i>
            </Link>
          </div>
        )}
          {listOptions
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
            .map((item, index) => {
              if (isItem) {
                return (
                  <div className="listed-item" key={index}>
                    <Link to={`/list/items/${item.uniqueId}`}>
                      <h4>{item.name}</h4>
                      <span>{item.lastModification}</span>
                    </Link>
                  </div>
                );
              }
              return (
                <div className="listed-item" key={index}>
                  <Link to={`/list/groups/${item}`}>
                    <h4>{item}</h4>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </>
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
