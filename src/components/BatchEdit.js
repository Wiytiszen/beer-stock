import React,{useState} from 'react'
import Header from "./Header";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../store/actions/actionCreators";

const BatchEdit = (props) => {
  const found =
    props.batches.find(
      (batch) => String(batch.name) === props.match.params.batchId
    ) 

  const [[...items] ,setItems] = useState([...found.items])      
  
  const onChange = (e)=>{
    if(e.target.name === 'itemName'){
      const selectItem = JSON.parse(e.target.value)
      const newItems = items.map((item,index)=>{
        if( index == e.target.dataset.index){
          item[e.target.name] = selectItem.name;
          item['amount'] = selectItem.amount='';
          item['uniqueId'] = selectItem.uniqueId;
        }
        return item;
      })
      return setItems(newItems);
    }
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
    setItems([...items,{itemName:'',amount:'',uniqueId:''}]);
    
  }
  const delField = (index)=>{
    setItems([...items.filter((i,itemIndex) => itemIndex !== index)])
  }
  const showEdit = ()=>{
    console.log("A")
    props.editBatch(found.name,items)
  }
  const delBatch = ()=>{
    props.history.push('/list/batchList')
    props.delBatch(found.name)
    
    
  }
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
                      <select name="itemName" data-index={index} onChange={onChange}>
                      <option value={ JSON.stringify(item)} selected>{item.itemName}</option>
                      {props.items.map((i,index)=>{
                       if(i.name === item.itemName){
                         return;
                       }
                      return <option value={JSON.stringify(i)}>{i.name}</option>
                      })

                      }
                      
                      
                      </select>
                      <input data-index={index} type="text" value={item.amount}
                      name="amount"
                      onChange={onChange}
                     />
                      
                    </label>
                  <div onClick ={()=> delField(index)}>X</div>
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
        <div className="item-btn delete" onClick={delBatch} >
        <i class="far fa-trash-alt"></i>
        </div>
      </div> 
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    batches: state.batches,
    items: state.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { ...bindActionCreators(actionCreators, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(BatchEdit);

