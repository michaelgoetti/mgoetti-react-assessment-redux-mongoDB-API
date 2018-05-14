export const GET_LIST = 'GET_LIST';
export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const COMPLETE_ITEM = 'COMPLETE_ITEM';

export function getAllItems(listItems) {
  return {
    type: GET_LIST,
    listItems
  }
}

export function addItem(listItem) {
  return {
    type: ADD_ITEM,
    listItem
  }
}

export function removeItem(listItem) {
	return {
		type: REMOVE_ITEM,
		listItem,
	}
}

export function completeItem(index) {
	return {
		type: COMPLETE_ITEM,
		index,
	}
}



