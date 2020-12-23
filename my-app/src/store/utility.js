import { FETCH_ORDERS_SUCCESS } from "./actions/actionTypes";

export const updateObject=(oldObject,updatedProperties)=>{
  return {
    ...oldObject,
    ...updatedProperties
  }
};