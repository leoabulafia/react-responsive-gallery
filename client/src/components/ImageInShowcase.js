import React from 'react';
import injectSheet from 'react-jss';
//styles
import imageInShowcaseStyles from 'styles/imageInShowcaseStyles';

class ImageInShowcase extends React.Component {
	renderContent() {
		const { image, classes } = this.props;
		switch (image) {
			case undefined || null:
				return;
			default:
				return (
					<div>
						<img
							className={classes.imageInShowcase}
							alt="img in showcase"
							src={`https://farm${image.farm}.staticflickr.com/${
								image.server
							}/${image.id}_${image.secret}_z.jpg`}
						/>
						<div className={classes.textPosition}>
							<div className={classes.text}>Title: {image.title._content}</div>
							<div className={classes.text}>
								Tags: |
								{image.tags.tag.map((tag, i) => {
									return <span key={i}> {tag.raw} |</span>;
								})}
							</div>
						</div>
					</div>
				);
		}
	}
	render() {
		return <div>{this.renderContent()}</div>;
	}
}

export default injectSheet(imageInShowcaseStyles)(ImageInShowcase);
