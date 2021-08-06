import React, { Component } from "react";
import MapGL, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export class MapDetails extends Component {
	
	state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
			zoom: 14,
			lat: null,
			long: null
    }
  };

  render() {
		return (
			<React.Fragment>
				{this.renderLocation()}
      </React.Fragment>
    );
	}
	
	componentDidMount() {
		this.getPositions();
    window.addEventListener("resize", this._resize);
    this._resize();
	}
	
	getPositions() {
		navigator.geolocation.getCurrentPosition(
			position => this.setState({lat: position.coords.latitude, long: position.coords.longitude})
		);
	}

  componentWillUnmount() {
    window.removeEventListener("resize", this._resize);
  }

  _resize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: window.innerWidth,
        height: window.innerHeight
      }
    });
	};
	
	renderLocation() {
		if(this.state.errorMessage && !this.state.lat && !this.state.long) {
			return( 
				<div>
					<p>Error: {this.state.errorMessage}</p> 
				</div>
			)
		}

		if(!this.state.errorMessage && this.state.lat && this.state.long) {
			console.log(this.state.lat, this.state.long)
			return(
				<MapGL
					{...this.state.viewport}
					onClick={this.handleMapClick}
					mapStyle="mapbox://styles/mapbox/basic-v9"
					mapboxApiAccessToken={
						"pk.eyJ1IjoibGVvbmFyZG9hbmpvcyIsImEiOiJjang2a3ByN2MwMHAxM25ydmozeWUwdGVxIn0.tmyT5XAyaYpGSm1eJea-aA"
					}
					onViewportChange={viewport => this.setState({ viewport })}>
						<Marker
							latitude={this.state.lat}
							longitude={this.state.long}
							captureClick={true}>
							<img
								style={{
									borderRadius: 100,
									width: 48,
									height: 48
								}}
								alt="github-avatar"
								src="https://avatars1.githubusercontent.com/u/14889591?v=4"
							/>
						</Marker>
				</MapGL>
			);
		}
	}
}