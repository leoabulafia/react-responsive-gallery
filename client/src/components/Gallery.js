import React from 'react';
import flow from 'lodash/flow';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';
//actions
import { displayCurrentImage, fetchImages } from 'actions';
//styles
import galleryStyles from 'styles/galleryStyles';
//components
import Description from 'components/Description';

class Gallery extends React.Component {
	onDisplayImage = (image, i) => () => {
		const { displayCurrentImage, history } = this.props;
		let imageAttributes = {
			id: image.id,
			secret: image.secret
		};
		console.log(imageAttributes);
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
								<div className={classes.hoverImage}>
									<div className={classes.textInImage}>{image.ownername}</div>
									<img
										className={classes.image}
										alt="greece"
										src={`https://farm${image.farm}.staticflickr.com/${
											image.server
										}/${image.id}_${image.secret}_q.jpg`}
									/>
								</div>
							</li>
						);
					})}
				</ul>
				<button
					className={classes.loadMoreButton}
					onClick={this.onLoadMoreImages(images.page + 1)}>
					Load more images...
				</button>
			</div>
		);
	}
}

const mapStateToProps = ({ images }) => ({ images });

export default flow(
	connect(mapStateToProps, { displayCurrentImage, fetchImages }),
	injectSheet(galleryStyles),
	withRouter
)(Gallery);
