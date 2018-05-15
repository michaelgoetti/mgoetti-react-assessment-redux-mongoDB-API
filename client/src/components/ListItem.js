import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { removeItem, completeItem } from '../actions';
// import './App.css';

class ListItem extends Component {
	constructor(props) {
		super(props);

		this.editItem = this.editItem.bind(this);
		this.completeItem = this.completeItem.bind(this);
		this.deleteItem = this.deleteItem.bind(this);

		this.urlStart = "http://localhost:3001/api/"  // no longer needed?

	}

	editItem(id) {
		// set state to show form
		this.props.funcEdit(id);
		// run redux function to pop reducer 
	}

	completeItem(id) {
		this.props.completeItem(id);
	}

	addToList() {
		let currItem = {
			title: this.state.tempItemTitle,
			description: '',
			cplt: false,
		};
		this.setState({ tempItemTitle: '' });
		this.props.addItem(currItem);
	}

	deleteItem(id) {
		this.props.removeItem(id);
	}

  render() {
		const { payload, index } = this.props;
    return (
      <div 
				className="list-item" 
				style={{ margin: '5px' }}
			>
				<div className={`item-title ${ payload.cplt ? 'item-cplt' : '' }`}>
					{ payload.title } 
				</div> 
				<button 
					className="btn btn-danger del-btn" 
					onClick={ () => this.deleteItem(payload['_id']) }
				> 
					X 
				</button>
				<button 
					className="btn btn-warning cplt-btn" 
					onClick={ () => this.completeItem(payload['_id']) }
					disabled={ payload.cplt }	
				> 
					Complete 
				</button>
				<Link to={ `/editItem/${payload['_id']}` }>
					<button 
						className="btn btn-info cplt-btn" 
						disabled={ payload.cplt }	
					> 
						Edit 
					</button>
				</Link>
			</div>
    );
	}
}

function mapStateToProps(state) {
  return state;
}

export default connect(
  mapStateToProps,
  {
		removeItem,
		completeItem,
  }
 )(ListItem);
