import React,{useState} from 'react'
import Header from "../header/Header";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/actionCreators";
import "./batchEdit.css";
const BatchEdit = (props) => {
  const isNew = props.match.path.includes('/batch/new');
  const found =
    props.batches.find(
      (batch) => String(batch.name) === props.match.params.batchId
    ) ||{
      name:'',
      items:[]
    }

  const [name ,setName] = useState(found.name)      
  const [[...items] ,setItems] = useState([...found.items])      
  
  const onChange = (e)=>{
    if(e.target.name === 'itemName'){
      const selectItem = JSON.parse(e.target.value)
      const newItems = items.map((item,index)=>{
        if( toString(index) === e.target.dataset.index){
          item[e.target.name] = selectItem.name;
          item['amount'] = selectItem.amount='';
          item['uniqueId'] = selectItem.uniqueId;
        }
        return item;
      })
      return setItems(newItems);
    }
    const newItems = items.map((item,index)=>{
      if( toString(index) === e.target.dataset.index){
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
  const handleForm = ()=>{
    if(isNew && name.length>0 && items.length>0){
      const newBatch = {
        name,
        items
      }
      return props.newBatch(newBatch)
    }
    if(!isNew){
      console.log(items)
      console.log(name)
      props.editBatch(name,items)
    }
  }
  const delBatch = ()=>{
    props.history.push('/list/batchList') 
    props.delBatch(name)
    
    
  }
 return (
    <div className="batch-form-container">
      <Header />
      <div className="batch-form">
        <form>
            <span>Name:</span>
            <input type="text" value={name} onChange ={(e)=> setName(e.target.value)}/>
            <div className="list-of-items">
              <p>Items:</p>
              {
                items.map((item, index) => {
                  return (
                  <div className="batch-items-form"> 
                    <div className="batch-item" key={index}> 
                    <label >
                      <span>Item Name</span>
                      <select name="itemName" data-index={index} onChange={onChange}>
                      <option value={ JSON.stringify(item)} selected>{item.itemName}</option>
                      {props.theItems.map((i,index)=>{
                       if(i.name === item.itemName){
                         return;
                       }
                        return <option value={JSON.stringify(i)}>{i.name}</option>
                      })

                      }
                      </select>
                      </label>
                      <div className="batch-item-amount">
                      <label>
                      <span>Amount</span>
                      <input data-index={index} type="text" value={item.amount}
                      name="amount"
                      onChange={onChange}
                     />
                     </label>
                     <label >
                      <span>u.m</span>
                      <select name="measureUnit" data-index={index} onChange={onChange}>
                        <option value="Kg.">Kg.</option> 
                        <option value="Gr.">Gr.</option> 
                        <option value="Lt.">Lt.</option> 
                      </select>
                    </label>
                    </div>
                    
                  </div>
                  <div className="del-item" onClick ={()=> delField(index)}>X</div>
                  </div>
                  )
                })
              }
              <button className ="add-item-batch" onClick ={addField}>Add Item</button>
              
            </div>


        </form>


      </div>
      <div className={"item-btn-group"}>
        <div className="item-btn button" onClick={props.history.goBack}>
          <i className="fas fa-reply"></i>
        </div>
        <div className="item-btn button"onClick={handleForm}>
            <i className="far fa-edit"></i>
        </div>
        {!isNew && <div className="item-btn delete" onClick={delBatch} >
        <i className="far fa-trash-alt"></i>
        </div>}
      </div> 
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    batches: state.batches,
    theItems: state.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { ...bindActionCreators(actionCreators, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(BatchEdit);

