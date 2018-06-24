import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
//components
import Gallery from 'components/Gallery';
import Showcase from 'components/Showcase';
//actions
import { fetchImages } from 'actions';

class App extends React.Component {
	componentDidMount() {
		const { images, fetchImages } = this.props;
		let page = {
			perPage: images.perPage,
			page: images.page
		};
		fetchImages(page);
	}
	render() {
		return (
			<BrowserRouter>
				<div>
					<Route exact path="/" component={Gallery} />
					<Route exact path="/gallery/:id" component={Showcase} />
				</div>
			</BrowserRouter>
		);
	}
}

const mapStateToProps = ({ images }) => ({ images });

export default connect(mapStateToProps, { fetchImages })(App);
