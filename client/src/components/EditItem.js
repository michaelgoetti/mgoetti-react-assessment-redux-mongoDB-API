import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getOneItem, removeItem, completeItemEdit, saveItemEdit } from '../actions';

class EditItem extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: '',
			description: '',
			currItem: {
				id: '',
				title: '',
				description: '',
				cplt: false,
			},
		}

		this.handleTitleChange = this.handleTitleChange.bind(this);
		this.handleDescChange = this.handleDescChange.bind(this);
		this.search = this.search.bind(this);
		this.completeItemEdit = this.completeItemEdit.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
		this.saveItem = this.saveItem.bind(this);
		this.cancelItemEdit = this.cancelItemEdit.bind(this);

	}

	search() {
		this.props.getOneItem(this.props.match.params.id);
		this.setState({ currItem: this.props.itemReducer.data });
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

	cancelItemEdit() {
		this.setState({
			title: this.props.itemReducer.data.title,
			description: this.props.itemReducer.data.description,
		});
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
					<br />
					<span className="task-label">Task</span><br />
					<input 
						type="text" 
						className="form-control edit-title-input" 
						value={ this.state.title }  
						onChange={ this.handleTitleChange } 
					/>
					<Link to={'/'}>
						<button 
							className="btn btn-secondary edit-cplt-btn" 
							onClick={ () => this.completeItemEdit(itemReducer.data['_id']) }
							disabled={ this.state.cplt || this.state.title === '' }	
						> 
						Complete 
						</button>
					</Link>
					<br />
					<span className="desc-label">Description</span>
					<input 
						type="text" 
						className="form-control edit-desc-input" 
						value={ this.state.description  }  
						onChange={ this.handleDescChange } 
					/>
					<br />
					<Link to={'/'}>
						<button 
							className="btn btn-info edit-save-btn" 
							onClick={ () => this.saveItem() }
							disabled={ this.state.title === '' }
						> 
							Save 
						</button>
					</Link>
					<button 
						className="btn btn-default edit-cancel-btn" 
						onClick={ () => this.cancelItemEdit() }
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

 