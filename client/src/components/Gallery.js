import React from 'react';
import flow from 'lodash/flow';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';
import { displayCurrentImage, fetchImages } from 'actions';
//components
import Description from 'components/Description';

//styles
const styles = {
	containerGallery: {
		padding: '30px 20px 100px 20px'
	},
	containerImage: {
		width: 'calc(20% - 8px)',
		display: 'inline-block',
		padding: '4px'
	},
	image: {
		width: '100%',
		height: 'auto',
		cursor: 'pointer'
	},
	'@media screen and (max-width: 1028px)': {
		containerImage: {
			width: 'calc(25% - 8px)'
		}
	},
	'@media screen and (max-width: 750px)': {
		containerImage: {
			width: 'calc(33% - 8px)'
		}
	},
	'@media screen and (max-width: 500px)': {
		containerImage: {
			width: 'calc(50% - 8px)'
		}
	}
};

class Gallery extends React.Component {
	onDisplayImage = (image, i) => () => {
		const { displayCurrentImage, history } = this.props;
		let imageAttributes = {
			id: image.id,
			secret: image.secret
		};
		displayCurrentImage(imageAttributes, history, i);
	};
	onLoadMoreImages = pageNumber => () => {
		const { fetchImages } = this.props;
		let page = { perPage: 10, page: pageNumber };
		fetchImages(page);
	};
	render() {
		const { images, classes } = this.props;
		return (
			<div className={classes.containerGallery}>
				<Description />
				<ul>
					{images.imagesCollection.map((image, i) => {
						return (
							<li
								className={classes.containerImage}
								key={i}
								onClick={this.onDisplayImage(image, i)}>
								<img
									className={classes.image}
									alt="greece"
									src={`https://farm${image.farm}.staticflickr.com/${
										image.server
									}/${image.id}_${image.secret}_q.jpg`}
								/>
							</li>
						);
					})}
				</ul>
				<button onClick={this.onLoadMoreImages(images.page + 1)}>
					Load more images
				</button>
			</div>
		);
	}
}

const mapStateToProps = ({ images }) => ({ images });

export default flow(
	connect(mapStateToProps, { displayCurrentImage, fetchImages }),
	injectSheet(styles),
	withRouter
)(Gallery);
