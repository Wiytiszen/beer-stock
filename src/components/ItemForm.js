import React,{ useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../store/actions/actionCreators";

const ItemForm = (props) => {
  let isNew = (props.match.params.itemId)? true : false;
  const item = props.items.find(aItem =>String(aItem.uniqueId) === props.match.params.itemId)||{};
  
  const [name, setName] = useState(item.name ||'');
  const [amount, setAmount] = useState(item.amount ||'');
  const [measureUnit, setUnit] = useState(item.amount ||'');
  const [provider, setProvider] = useState(item.provider ||'');
  const [group, setGroup] = useState(item.group ||'');
  const handleSubmit = (e) => {
    e.preventDefault();
    const edition ={
      name,
      amount,
      measureUnit,
      provider,
      group
    }
    console.log("LLEGA")
    if(!isNew){
      props.addItem(edition)
      console.log( "paso la funcion")
      return;
    }
    props.editItem(item.uniqueId,edition);
  }

  

  
    return (
      <div className="item-form">
        <form onSubmit={handleSubmit}>
          <label>
            name:
            <input  type ="text" value ={(name!== '')? name: ''} onChange={e => setName(e.target.value)}/>
          </label>
          <label>
            amount:
            <input type ="text" value ={(amount!=='')? amount: ''}onChange={e => setAmount(e.target.value)} />
          </label>
          <label>
            measureUnit:
            <input type ="text" value ={(measureUnit!=='')? measureUnit: ''}onChange={e => setUnit(e.target.value)} />
          </label>
          <label>
            provider:
            <input type ="text" value ={(provider!=='')? provider: ''}onChange={e => setProvider(e.target.value)} />
          </label>
          <label>
            group:
            <input type ="text" value ={(group!=='')? group: ''}onChange={e => setGroup(e.target.value)} />
          </label>
          <input type="submit" value="Submit" />
          <button onClick={props.history.goBack}> Atras </button>
        </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(ItemForm);

