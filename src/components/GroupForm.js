import React, {useState} from 'react';
import Header from './Header';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// import { useHistory } from "react-router-dom";
import * as actionCreators from "../store/actions/actionCreators";

const GroupForm = (props) => {
    
    const isNew = props.match.path.includes('/createGroup');
 
  const [name, setName] = useState(props.match.params.group||"");
  const oldName = props.match.params.group;

  const onChange = e => {
    setName(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (!isNew) {
      const index = props.groups.indexOf(oldName);
      props.editGroup(index,name)
      props.history.push(`/list/groups/${name}`)
      clearValues();
      return;
    }
    props.addGroup(name)
    clearValues();
    return;
  };
  const clearValues = (name) =>{
    setName('');
  };

  const handleDel = ()=>{
    props.delGroup(name);
    clearValues()
    props.history.push('/list/groups')
  }

  return (
    <>
      <Header />
      <div className="item-form">
        
        <form>

          <label>
            <span>New Category:</span>
            <input
              type="text"
              value={name}
              onChange={onChange}
            />
          </label>  
          <div className ="form-btn-group">
            <button type="submit" className="form-btn" onClick ={e=> handleSubmit(e)}>
                <i class="far fa-save"></i>
            </button>
            { !isNew &&
              <div className="form-btn delete" onClick={handleDel} >
                <i class="far fa-trash-alt"></i>
              </div>
            }
            
            <div className="form-btn reply" onClick={props.history.goBack} >
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

export default connect(mapStateToProps, mapDispatchToProps)(GroupForm);
