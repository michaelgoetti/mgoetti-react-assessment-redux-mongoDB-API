import { combineReducers } from 'redux';
import typeToReducer from 'type-to-reducer'
import { GET_LIST, GET_LIST_PENDING, GET_LIST_REJECTED, GET_LIST_FILFILLED, ADD_ITEM, REMOVE_ITEM, COMPLETE_ITEM } from '../actions';
import { PENDING, FULFILLED, REJECTED } from 'redux-promise-middleware';

const initialState = {
  data: null,
  isPending: false,
  error: false
}

function listReducer(state = [], action) {
	switch(action.type) {
		case 'GET_LIST_PENDING':
			return {
				...state,
				...initialState,
				data: [],
				isPending: true
			};
		case 'GET_LIST_FULFILLED':
			console.log("payload.data: ", action.payload.data);
			return {
				...state,
				...initialState,
				data: action.payload.data,
				isFulFilled: true
			};
		case 'GET_LIST_REJECTED':
			return {
				...state,
				...initialState,
				data: [],
				err: action.payload.err,
				isPending: true
			};
			// state = action.payload.data;
		case 'ADD_ITEM_PENDING':
			return {
				...state,
				...initialState,
				data: state.data,
				isPending: true
			};
		case 'ADD_ITEM_FULFILLED':
			console.log("payload.data: ", action.payload.data);
			return {
				...state,
				...initialState,
				data: action.payload.data,
				isFulFilled: true
			};
		case 'ADD_ITEM_REJECTED':
			return {
				...state,
				...initialState,
				data: [],
				err: action.payload.err,
				isPending: true
			};
			// state = action.payload.data;
		case 'COMPLETE_ITEM_PENDING':
			return {
				...state,
				...initialState,
				data: state.data,
				isPending: true
			};
		case 'COMPLETE_ITEM_FULFILLED':
			console.log("payload.data: ", action.payload.data);
			console.log("it should be working?");
			return {
				...state,
				...initialState,
				data: action.payload.data,
				isFulFilled: true
			};
		case 'COMPLETE_ITEM_REJECTED':
			return {
				...state,
				...initialState,
				data: [],
				err: action.payload.err,
				isPending: true
			};
			// state = action.payload.data;
		case 'REMOVE_ITEM_PENDING':
			return {
				...state,
				...initialState,
				data: state.data,
				isPending: true
			};
		case 'REMOVE_ITEM_FULFILLED':
			console.log("payload.data: ", action.payload.data);
			console.log("it should be working?");
			return {
				...state,
				...initialState,
				data: action.payload.data,
				isFulFilled: true
			};
		case 'REMOVE_ITEM_REJECTED':
			return {
				...state,
				...initialState,
				data: [],
				err: action.payload.err,
				isPending: true
			};
			// state = action.payload.data;
			// return state;
		// case ADD_ITEM:
		// 	state = [...state, action.listItem];
		// 	return state;
		// case REMOVE_ITEM:
		// 	state = state.filter(listItem => listItem['id'] !== action.listItem['id']);
		// 	return state;
		// case COMPLETE_ITEM:
		// 	return Object.assign(
		// 		[...state], 
		// 		{[action.index]:
		// 			Object.assign({}, state[action.index], {cplt: true})}
		// 	)
		default:
			return state;
	}
}

function itemReducer(state = [], action) {
	switch(action.type) {
		case 'GET_ITEM_PENDING':
			return {
				...state,
				...initialState,
				data: [],
				isPending: true
			};
		case 'GET_ITEM_FULFILLED':
			console.log("get_item_fulfilled.data: ", action.payload.data);
			return {
				...state,
				...initialState,
				data: action.payload.data,
				isFulFilled: true
			};
		case 'GET_ITEM_REJECTED':
			return {
				...state,
				...initialState,
				data: [],
				err: action.payload.err,
				isPending: true
			};
		case 'COMPLETE_ITEM_EDIT_PENDING':
		return {
			...state,
			...initialState,
			data: state.data,
			isPending: true
		};
		case 'COMPLETE_ITEM_EDIT_FULFILLED':
			console.log("completeItemEDit.data: ", action.payload.data);
			console.log("it should be working?");
			return {
				...state,
				...initialState,
				data: action.payload.data,
				isFulFilled: true
			};
		case 'COMPLETE_ITEM_EDIT_REJECTED':
			return {
				...state,
				...initialState,
				data: [],
				err: action.payload.err,
				isPending: true
			};
		case 'SAVE_ITEM_EDIT_PENDING':
		return {
			...state,
			...initialState,
			data: state.data,
			isPending: true
		};
		case 'SAVE_ITEM_EDIT_FULFILLED':
			console.log("completeItemEDit.data: ", action.payload.data);
			console.log("it should be working?");
			return {
				...state,
				...initialState,
				data: action.payload.data,
				isFulFilled: true
			};
		case 'SAVE_ITEM_EDIT_REJECTED':
			return {
				...state,
				...initialState,
				data: [],
				err: action.payload.err,
				isPending: true
			};
		default:
		return state;
	}
}

const rootReducer = combineReducers({
	listReducer,
	itemReducer,
});

export default rootReducer;
