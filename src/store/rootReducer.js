const rootReducer = (state,action)=>{
  const thisDate = () =>{
    let d = new Date();
    return d.toLocaleDateString();
  }
  switch (action.type) {
    case 'ADD_ITEM':
      console.log(action);
      const newItem = {
        name:action.edition.name,
        amount:action.edition.amount,
        measureUnit:action.edition.measureUnit,
        provider:action.edition.provider,
        group:action.edition.group,
        lastModification : thisDate(),
        uniqueId:Date.now(),
        by: "User",
        lastAmount: 0,
      }; 
      return {...state, items:[...state.items,newItem] };
      
    case 'DEL_ITEM':
      console.log(action.payload);
      return {...state, items:state.items.filter(item => item.uniqueId !== action.payload) };
    case 'EDIT_ITEM':

      const editedItems = [...state.items].map(item =>{
    
        if(item.uniqueId === action.uniqueId){
          
          item.name=action.edition.name;
          item.amount=action.edition.amount;
          item.measureUnit=action.edition.measureUnit;
          item.provider=action.edition.provider;
          item.group=action.edition.group;
          item.lastModification = thisDate();
        }
        return item;
      });
      return {...state, items:editedItems};
    default:
      return state;
  }
}

export default rootReducer;