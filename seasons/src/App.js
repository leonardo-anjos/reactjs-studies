import React from 'react';
import SeasonDisplay from './components/Season/Display';
import Spinner from './components/Spinner';
import './App.css';

export default class App extends React.Component {

	state = {
		lat: null,
		long: null,
		errorMessage: ''
	}

	render() {
		return( 
			<div className = "border red">{this.renderContent()}</div>
		);
	}

	renderContent() {
		if(this.state.errorMessage && !this.state.lat && !this.state.long) {
			return( 
				<div>
					<p>Error: {this.state.errorMessage}</p> 
				</div>
			)
		}

		if(!this.state.errorMessage && this.state.lat && this.state.long) {
			return( 
				<SeasonDisplay 
					lat={this.state.lat}
					long={this.state.long}
				/>
			);
		}

		return( 
			<Spinner message = "Please accept location request" />
		);

	}

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			position => this.setState({lat: position.coords.latitude, long: position.coords.longitude}),
			err => {this.setState({err: err.message })}
		);
	};

}