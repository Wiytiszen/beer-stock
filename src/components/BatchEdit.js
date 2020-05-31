import React,{useState} from 'react'
import Header from "./Header";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../store/actions/actionCreators";

function BatchEdit(props) {
  const found =
    props.batches.find(
      (batch) => String(batch.name) === props.match.params.batchId
    ) 

  const [[...items] ,setItems] = useState([...found.items])      
  
  const onChange = (e)=>{
    const newItems = items.map((item,index)=>{
      if( index == e.target.dataset.index){
        item[e.target.name] = e.target.value;
      }
      return item;
    })  
    setItems(newItems)
  }   
  
  const addField = (e)=>{ 
    e.preventDefault()
    console.log("entra!"    )
    setItems([...items,{itemName:'',amount:'',uniqueId:''}]);
    
  }
  const showEdit = ()=>{ console.log(items)}
 return (
    <div className="batch-form">
      <Header />
      <div className="item-form">
        <form>
          <label>
            <span>Name:</span>
            <input type="text" value={found.name} />
            <div>
              <p>Items:</p>
              {
                items.map((item, index) => {
                  return (
                  <div className="batch-items">  
                    <label key={index}>

                      <input data-index={index} 
                      type="text"
                      value={item.itemName}
                      name="itemName"
                      onChange={onChange}
                      />
                      <input data-index={index} type="text" value={item.amount}
                      name="amount"
                      onChange={onChange}
                     />
                      
                    </label>
                  <div>X</div>
                  </div>
                  )
                })
              }
              <button onClick ={addField}>Add Item</button>
            </div>
          </label>

        </form>


      </div>
      <div className={"item-btn-group"}>
        <div className="item-btn button" onClick={props.history.goBack}>
          <i class="fas fa-reply"></i>
        </div>
        <div className="item-btn button"onClick={showEdit}>
            <i class="far fa-edit"></i>
        </div>
        <div className="item-btn confirm" >
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

export default connect(mapStateToProps, mapDispatchToProps)(BatchEdit);

