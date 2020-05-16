export const addItem = (edition)=>{
  return{
    type: 'ADD_ITEM',
    edition
  }
}
export const editItem = (uniqueId,edition)=>{
  return{
    type: 'EDIT_ITEM',
    uniqueId,
    edition
  }
}
export const editGroup = ()=>{
  return{
    type: 'EDIT_GROUP',
  }
}
export const delItem = (uniqueId)=>{
  return{
    type: 'DEL_ITEM',
    payload:uniqueId
  }
}