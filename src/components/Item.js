import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actionCreators from "../store/actions/actionCreators";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Item = (props) => {
  const handleDel= ()=>{
    if (window.confirm('Are you sure you wish to delete this item?')){
      props.delItem(found.uniqueId);
      props.history.goBack();
      return;
    } 
    return;
  }

  const classes = useStyles();

  const found = props.items.find(aItem =>String(aItem.uniqueId) === props.match.params.item)||props.items.filter(aItem => aItem.group === props.match.params.group);
  // const belongGroup = props.items.filter(aItem => aItem.group === props.match.params.group)  
  return (
    <div className="item-container">
      <p>{found.amount}<b>{found.measureUnit}</b></p>
      <p>{`Name: ${found.name}`}</p>
      <p>{`Last Modification: ${found.lastModification}`}</p>
      <p>{`by: ${found.by}`}</p>

      <div className={classes.root}>
        <Button 
          onClick={props.history.goBack}
          variant="contained" 
          color="primary">Go Back</Button>
        <Button 
          variant="contained" 
          color="primary"><Link to={`/itemForm/${found.uniqueId}`}>Edit</Link></Button>
        <Button  onClick={handleDel} variant="contained" color="secondary"
        // <Button  onClick={()=> props.delItem(found.uniqueId)} variant="contained" color="secondary"
        >Delete</Button>
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

