import React from 'react';
import flow from 'lodash/flow';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';
import ImageInShowcase from 'components/ImageInShowcase';
import { displayCurrentImage } from 'actions';
import showcaseStyles from 'styles/showcaseStyles';

class Showcase extends React.Component {
	/*
		This componentDidUpdate manages both the case when an image should be
		displayed because the user clicked in the gallery, or access to it via url
	*/
	componentDidUpdate(prevProps) {
		const { match, history, displayCurrentImage, images } = this.props;
		let index = parseInt(match.params.id);
		let imageDetails = images.imagesCollection.slice(index, index + 1)[0];
		if (images !== prevProps.images) {
			displayCurrentImage(imageDetails, history, index);
		}
	}

	/*
		onDisplayNew dispatches the displayCurrentImage action. It takes a payload
		that is going to be +1 or -1 to display a prev or next image. The conditional
		is used to check the beginning or final of the images array and avoid undefined
	*/
	onDisplayNew = payload => () => {
		const { history, displayCurrentImage, images, currentImage } = this.props;
		let imagesCollection = images.imagesCollection;
		let index = currentImage.index + payload;
		let imageDetails = imagesCollection.slice(index, index + 1)[0];
		if (index > imagesCollection.length - 1) {
			imageDetails = imagesCollection[0];
			displayCurrentImage(imageDetails, history, 0);
		} else if (index < 0) {
			imageDetails = imagesCollection[imagesCollection.length - 1];
			displayCurrentImage(imageDetails, history, imagesCollection.length - 1);
		} else {
			displayCurrentImage(imageDetails, history, index);
		}
	};

	render() {
		const { classes, currentImage } = this.props;
		return (
			<div className={classes.showcase}>
				<Link className={classes.closeLink} to="/">
					<div
						className={classes.buttonShowcase}
						style={{ right: 10, top: 10 }}>
						x
					</div>
				</Link>

				<ImageInShowcase image={currentImage.imageDetails} />
				<div style={{ width: '80%', margin: 'auto' }}>
					<button
						className={classes.buttonShowcase}
						style={{ left: 10, top: 250 }}
						onClick={this.onDisplayNew(-1)}>
						Previous
					</button>
					<button
						className={classes.buttonShowcase}
						style={{ right: 10, top: 250 }}
						onClick={this.onDisplayNew(1)}>
						Next
					</button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = ({ currentImage, images }) => ({
	currentImage,
	images
});

export default flow(
	connect(mapStateToProps, { displayCurrentImage }),
	injectSheet(showcaseStyles),
	withRouter
)(Showcase);
