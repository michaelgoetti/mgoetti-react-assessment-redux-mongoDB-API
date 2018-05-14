import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import './App.css';

class EditItem extends Component {
	constructor(props) {
		super(props);

		// this.deleteItem = this.deleteItem.bind(this);

		this.urlStart = "http://localhost:3001/api/";

		this.handleEditChange = this.handleEditChange.bind(this);

	}

	handleEditChange() {

	}

  render() {
    return (
      <div className="edit-form">
				<p className="back-to-tasks-link">&lt; Back to Tasks</p>
				<span className="task-label">Task</span>
				<input 
					type="text" 
					className="form-control edit-title-input" 
					// value={ this.state.tempItemTitle } // change to value from reducer 
					onChange={ this.handleEditChange } 
				/>
				<button 
					className="btn btn-warning edit-cplt-btn" 
					// onClick={ () => this.completeItem(payload['_id']) }
					// disabled={ payload.cplt }	
				> 
				Complete 
				</button>
				<br />
				<span className="desc-label">Description</span>
				<input 
					type="text" 
					className="form-control edit-desc-input" 
					// value={ this.state.tempItemTitle } // change to value from reducer 
					onChange={ this.handleEditChange } 
				/>
				<br />
				<button 
					className="btn btn-info edit-del-btn" 
					// onClick={ () => this.deleteItem(payload['_id']) }
				> 
					Save 
				</button>
				<button 
					className="btn btn-warning edit-cancel-btn" 
					// onClick={ () => this.completeItem(payload['_id']) }
					// disabled={ payload.cplt }	
				> 
					Cancel 
				</button>
				<button 
					className="btn btn-danger edit-delete-btn" 
					// onClick={ () => this.editItem(payload['_id']) }
					// disabled={ payload.cplt }	
				> 
					Delete 
				</button>
			</div>
    );
	}
}

export default EditItem;
 