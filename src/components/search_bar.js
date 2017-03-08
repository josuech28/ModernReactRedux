import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			term: ''
		};
	}

	render() {
		return (
			<div>
		 		<input 
		 		value={this.state.term}
		 		onChange= {event => this.state({term: event.target.value })} />
		 	</div>
		 	);
	}
}

export default SearchBar;