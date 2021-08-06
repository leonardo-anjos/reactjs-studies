import React from 'react';
import unsplash from './services/api/unsplhash';
import ImageSearch from "./components/Image/Search";
import ImageList from './components/Image/List/List';
import './App.css';

export default class App extends React.Component {
	
	state = {
		images: []
	}
	
	onSearchSubmit = async (term) => {
		const response = await unsplash.get('/search/photos', {
			params: { query: term }
		});
		this.setState({ images: response.data.results })
	}

	render() {
		return(
			<div className="main">
				<div className="ui container">
					<ImageSearch onSubmit={this.onSearchSubmit}/>
					<ImageList images={this.state.images}/>
				</div>
			</div>
		);
	}

};
