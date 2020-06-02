export const addItem = (edition)=>{
  return{
    type: 'ADD_ITEM',
    edition
  }
}
export const increaseItem = (uniqueId,amount)=>{
  return{
    type: 'INCRE_ITEM',
    uniqueId,
    amount
  }
}
export const decreaseItem = (uniqueId,amount)=>{
  return{
    type: 'DECRE_ITEM',
    uniqueId,
    amount
  }
}
export const editItem = (uniqueId,edition)=>{
  return{
    type: 'EDIT_ITEM',
    uniqueId,
    edition
  }
}
export const addGroup = (name)=>{
  return{
    type: 'ADD_GROUP',
    name
  }
}
export const editGroup = (index,name)=>{
  return{
    type: 'EDIT_GROUP',
    index,
    name
  }
}
export const delGroup = (name)=>{
  return{
    type: 'DEL_GROUP',
    name
  }
}
export const delItem = (uniqueId)=>{
  return{
    type: 'DEL_ITEM',
    payload:uniqueId
  }
}
//  batch
export const confBatch = (name)=>{
  return{
    type: 'CONF_BATCH',
    name,
  }
}
export const editBatch = (name,items)=>{
  return{
    type: 'EDIT_BATCH',
    name,
    items
  }
}
export const delBatch = (name)=>{
  return{
    type: 'DEL_BATCH',
    name
  }
}