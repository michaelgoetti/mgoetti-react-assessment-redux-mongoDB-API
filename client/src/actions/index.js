import instance from '../axiosconfig';

export const GET_LIST_PENDING = 'GET_LIST_PENDING';
export const GET_LIST_FULFILLED = 'GET_LIST_FULFILLED';
export const GET_LIST_REJECTED = 'GET_LIST_REJECTED';
export const GET_LIST = 'GET_LIST';
export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const COMPLETE_ITEM = 'COMPLETE_ITEM';

// export function getAllItems(listItems) {
//   return {
//     type: GET_LIST,
//     listItems
//   }
// }
export function getAllItems() {
  return {
    type: GET_LIST,
    payload: instance.get('/list'),
  }
}

export function addItem(currItem) {
  return {
    type: ADD_ITEM,
    payload: instance.post('/list', currItem),
  }
}

export function removeItem(id) {
	return {
		type: REMOVE_ITEM,
		payload: instance.post('/deleteItem', {id: id}),
	}
}

export function completeItem(id) {
	console.log("completeyItem ID: ", {id: id});
	return {
		type: COMPLETE_ITEM,
		payload: instance.post('/completeItem', {id: id}),
	}
}



