import React from 'react';

const styles = {
	imageInShowcase: {
		margin: 'auto',
		display: 'block'
	}
};

export default class ImageInShowcase extends React.Component {
	renderContent() {
		const { image } = this.props;
		switch (image) {
			case undefined || null:
				return;
			default:
				return (
					<div>
						<img
							style={styles.imageInShowcase}
							alt="img in showcase"
							src={`https://farm${image.farm}.staticflickr.com/${
								image.server
							}/${image.id}_${image.secret}_z.jpg`}
						/>
					</div>
				);
		}
	}
	render() {
		return <div>{this.renderContent()}</div>;
	}
}
