import instance from '../axiosconfig';

export const GET_LIST = 'GET_LIST';
export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const COMPLETE_ITEM = 'COMPLETE_ITEM';
export const GET_ITEM = 'GET_ITEM';
export const COMPLETE_ITEM_EDIT = 'COMPLETE_ITEM_EDIT';
export const SAVE_ITEM_EDIT = 'SAVE_ITEM_EDIT';

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

export function getOneItem(id) {
	console.log("getOneItemey ID: ", {id: id});
  return {
    type: GET_ITEM,
    payload: instance.post('/listSingle', {id: id}),
  }
}

export function completeItemEdit(id) {
	console.log("completeyItemEdit ID: ", {id: id});
	return {
		type: COMPLETE_ITEM_EDIT,
		payload: instance.post('/completeItemEdit', {id: id}),
	}
}

export function saveItemEdit(currItem) {
	return {
		type: SAVE_ITEM_EDIT,
		payload: instance.post('/saveItemEdit', currItem),
	}
}



