import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { getOneItem, removeItem, completeItemEdit, saveItemEdit } from '../actions';
// import './App.css';  getOneItem

class EditItem extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currItem: {
				id: '',
				title: '',
				description: '',
				cplt: false,
			},
			title: '',
			tempItemTitle: '',
		}

		// this.deleteItem = this.deleteItem.bind(this);

		this.urlStart = "http://localhost:3001/api/";

		this.handleTitleChange = this.handleTitleChange.bind(this);
		this.handleDescChange = this.handleDescChange.bind(this);
		this.search = this.search.bind(this);
		this.completeItemEdit = this.completeItemEdit.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
		this.saveItem = this.saveItem.bind(this);

	}

	search() {
		this.props.getOneItem(this.props.match.params.id);
		console.log("params: ", this.props.match.params);
		this.setState({ currItem: this.props.itemReducer.data }, console.log("doubt IT: ", this.state));
	}

	handleTitleChange(event) {
    this.setState({title: event.target.value});
	}

	handleDescChange(event) {
    this.setState({description: event.target.value});
	}

	completeItemEdit(id) {
		this.props.completeItemEdit(id);
	}

	deleteItem(id) {
		this.props.removeItem(id);
	}

	saveItem() {
		const currItem = {
			id: this.state.id,
			title: this.state.title,
			description: this.state.description,
			cplt: this.state.cplt,
		}
		this.props.saveItemEdit(currItem);
	}

	componentWillMount() {
		this.search();
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.itemReducer !== nextProps.itemReducer) {
			this.setState({ 
					id: nextProps.itemReducer.data['_id'],
					title: nextProps.itemReducer.data.title,
					description: nextProps.itemReducer.data.description,
					cplt: nextProps.itemReducer.data.cplt,
				});
		}
	}

  render() {
		const { itemReducer } = this.props;
    return (
			<div className="global-wrap">
				<div className="edit-form">
					<Link to={'/'}>
						<p className="back-to-tasks-link">
							&lt; Back to Tasks
						</p>
					</Link>	
					<span className="task-label">Task</span>
					<input 
						type="text" 
						className="form-control edit-title-input" 
						value={ this.state.title } // change to value from reducer 
						onChange={ this.handleTitleChange } 
					/>
					<button 
						className="btn btn-warning edit-cplt-btn" 
						onClick={ () => this.completeItemEdit(itemReducer.data['_id']) }
						disabled={ this.state.cplt }	
					> 
					Complete 
					</button>
					<br />
					<span className="desc-label">Description</span>
					<input 
						type="text" 
						className="form-control edit-desc-input" 
						value={ this.state.description  } // change to value from reducer 
						onChange={ this.handleDescChange } 
					/>
					<br />
					<button 
						className="btn btn-info edit-del-btn" 
						onClick={ () => this.saveItem() }
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
					<Link to={'/'}>
						<button 
							className="btn btn-danger edit-delete-btn" 
							onClick={ () => this.deleteItem(itemReducer.data['_id']) }
							// disabled={ payload.cplt }	
						> 
							Delete 
						</button>
					</Link>
				</div>
				title: { this.state.title }<br />
				desc: { this.state.description }<br />
				cplt: { this.state.cplt ? "true" : "false" }<br />
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
		getOneItem,
		removeItem,
		completeItemEdit,
		saveItemEdit,
  }
 )(EditItem);

 