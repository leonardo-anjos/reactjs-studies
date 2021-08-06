import React, { Component } from 'react';

export default class ImageSearch extends Component {
	
	state = {
		term: ''
	}

	render() {
		return(
			<div className="ui segment">
				<form 
					className="ui form"
					onSubmit={this.handleSubmit}>
					<div className="field">
						<label>Image Search</label>
						<input 
							type="text" 
							onChange={this.handleSearch}
							value={this.state.term}
						/>
					</div>
				</form>
			</div>
		);
	}

	handleSubmit = event => {
		event.preventDefault();
		this.props.onSubmit(this.state.term);
	};

	handleSearch = e => {
		this.setState({ term: e.target.value });
	};
	
}