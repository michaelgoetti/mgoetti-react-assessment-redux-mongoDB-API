import { combineReducers } from 'redux';

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
		case 'REMOVE_ITEM_PENDING':
			return {
				...state,
				...initialState,
				data: state.data,
				isPending: true
			};
		case 'REMOVE_ITEM_FULFILLED':
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
		case 'SAVE_ITEM_EDIT_PENDING':
			return {
				...state,
				...initialState,
				data: state.data,
				isPending: true
			};
			case 'SAVE_ITEM_EDIT_FULFILLED':
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
			case 'COMPLETE_ITEM_EDIT_PENDING':
				return {
					...state,
					...initialState,
					data: state.data,
					isPending: true
				};
			case 'COMPLETE_ITEM_EDIT_FULFILLED':
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
		default:
		return state;
	}
}

const rootReducer = combineReducers({
	listReducer,
	itemReducer,
});

export default rootReducer;
