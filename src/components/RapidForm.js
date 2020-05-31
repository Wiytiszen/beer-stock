import React, {useState} from 'react';
import Header from './Header';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import * as actionCreators from "../store/actions/actionCreators";

const RapidForm = (props) => {
    let aHistory = useHistory();
    const isIn = props.match.path.includes('/rapidForm/in');
    let item = props.items.find(
      (aItem) => String(aItem.uniqueId) === props.match.params.itemId
    ) ||{}
   
  const [name, setName] = useState("");
  const [measureUnit, setUnit] = useState("");
  const [search, setSearch] = useState("");
  const [searchItems, setItem] = useState([]);
  const [amount,setAmount] = useState('')
  const [id,setId] = useState()


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
    setAmount(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (isIn) {
      props.increaseItem(item.uniqueId,amount);
      clearValues();
      return;
    }
    props.decreaseItem(id,amount);
    clearValues();
    return;
  };
  const clearValues = () =>{
    setAmount('');
  };

  const navigate = (i) =>{
    setSearch('')
    setItem([])
    aHistory.push(`/rapidForm/out/${i.uniqueId}`);
    setName(i.name)
    setUnit(i.measureUnit)
    setId(i.uniqueId)
  }
    
  return (
    <>
      <Header />
      <div className="item-form">
        {!isIn &&(
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
          </div>)}
        <form>

            <p>{false||name||item.name}</p>

          <label>
            <span>amount:</span>
            <input
              type="text"
              value={amount}
              name="amount"
              onChange={onChange}
            />
            <span>{false||measureUnit||item.measureUnit}</span>
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
}



const mapStateToProps = (state) => {
  return {
    items: state.items,
    groups: state.groups,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { ...bindActionCreators(actionCreators, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(RapidForm);
