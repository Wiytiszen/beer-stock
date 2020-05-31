import React, { useState} from "react";
import Header from "./Header";
import { bindActionCreators } from "redux";

import { connect } from "react-redux";
import { useHistory  } from "react-router-dom";
import * as actionCreators from "../store/actions/actionCreators";

const ItemForm = (props) => {
    let aHistory = useHistory();
    const isNew = props.match.params.itemId ? true : false;
    let item =
    props.items.find(
      (aItem) => String(aItem.uniqueId) === props.match.params.itemId
    )||{
      name:'',
      amount:'',
      measureUnit:'',
      provider:'',
      group:''
    };
   
  


  const [search, setSearch] = useState("");
  const [searchItems, setItem] = useState([]);
  
  
  const [{
    name,
amount,
measureUnit,
provider,
group},setValues] = useState(item)


    // Search function
    const handleSearch = (e) => {
    setSearch(e.target.value);
    const regex = new RegExp(e.target.value, "gi");
    if (e.target.value === "") {
      setItem([]);
      return;
    }
    setItem(() =>
      props.items.filter((i) => {
        console.log(search);
        return i.name.match(regex);
      })
    );
  }; // **search function

  const onChange = e => {
    const { name, value } = e.target;
    setValues(prevState => ({ ...prevState, [name]: value }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    const edition = {
          name,
          amount,
          measureUnit,
          provider,
          group,
        };
    if (!isNew) {
      props.addItem(edition);
      clearValues();
      return;
    }
    props.editItem(item.uniqueId, edition);
    clearValues();
  };
  const clearValues = () =>{
    setValues({...item});
  };

  const navigate = (i) =>{
    setSearch('')
    setItem([])
    aHistory.push(`/rapidForm/in/${i.uniqueId}`);
    // const selected = {
    //   name:i.name,
    //   amount:i.amount,
    //   measureUnit:i.measureUnit,
    //   provider:i.provider,
    //   group:i.group,    
    // }
    // setValues({...selected})
  }
    
  return (
    <>
      <Header />
      <div className="item-form">
        {!isNew &&
          <div className="search">
            <label>
              <span><i class="fas fa-search"></i></span>
              <input
                type="text"
                placeholder="Search item..."
                value={search}
                onChange={(e) => {
                  handleSearch(e);
                }}
              />
            </label>
            <div className="search-results">
              {searchItems.map((i) => (
                <div onClick={ ()=> navigate(i)} >
                  <h4>{i.name}</h4>
                </div>
              ))}
            </div>
          </div>}
        <form>
          <label>
            <span>name:</span>
            <input
              type="text"
              value={name}
              name="name"
              onChange={onChange}
            />
          </label>
          <label>
            <span>amount:</span>
            <input
              type="text"
              value={amount}
              name="amount"
              onChange={onChange}
            />
          </label>
          <label>
            <span>measureUnit:</span>
            <input
              type="text"
              value={measureUnit}
              name="measureUnit"
              onChange={onChange}
            />
          </label>
          <label>
            <span>provider:</span>
            <input
              type="text"
              value={provider}
              name="provider"
              onChange={onChange}
            />
          </label>
          <label>
            <span>group:</span>
            <input
              type="text"
              value={group}
              name="group"
              onChange={onChange}
            />
          </label>
          
          <div className ="form-btn-group">
            <button type="submit" className="form-btn button" onClick ={e=> handleSubmit(e)}>
                <i class="far fa-save"></i>
            </button>
            <div className="form-btn reply button" onClick={props.history.goBack} >
              <i class="fas fa-reply"></i>
            </div>
          </div>
        </form>
        
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

export default connect(mapStateToProps, mapDispatchToProps)(ItemForm);
