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
      return {...state, items:state.items.filter(item => item.uniqueId !== action.payload) };

      // INCREASE ITEM
    case 'INCRE_ITEM':
      const items = [...state.items].map((item) => {
      if(item.uniqueId === action.uniqueId){
        item.amount = Number(item.amount) + Number(action.amount);
        item.lastModification = thisDate();
      }
      return item;
    });

      return {...state, items };

      //DECREASE ITEM
      case 'DECRE_ITEM':{
        const items = [...state.items].map((item) => {
          if(item.uniqueId === action.uniqueId){
            item.amount = Number(item.amount) - Number(action.amount);
            item.lastModification = thisDate();
          }
          return item;
        });
    
          return {...state, items };
      }    
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
 
      case 'ADD_GROUP':{
        return {...state,groups:[...state.groups,action.name]};
    }
      case 'EDIT_GROUP':{
        const {index,name} = action;
        const groups = [...state.groups];
        const editedItems = [...state.items].map(item =>{
          if(item.group === groups[index]){
            item.group = name;
          }
          return item;
        });
        
            groups[index] = name;


        return {...state,groups,items:editedItems};
    }

      case 'DEL_GROUP':{
          const groups=[...state.groups.filter(g => g !== action.name)]
          const items=[...state.items.filter(i  => i.group !== action.name)]
          return {...state,items,groups};
      }
      case 'CONF_BATCH':{
        const batch = state.batches.find(batch => batch.name === action.name)
        const items=[...state.items]
        items.forEach(item =>{
          batch.items.forEach(bItem =>{
            if(item.uniqueId === bItem.uniqueId){
              item.amount -=bItem.amount;
            }
          })

        })
        return {...state,items};
    }




      default:
      return state;
  }
}

export default rootReducer;