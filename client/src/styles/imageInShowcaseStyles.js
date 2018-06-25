const imageInShowcaseStyles = {
	imageInShowcase: {
		display: 'block',
		marginLeft: 'auto',
		marginRight: 'auto',
		paddingTop: '80px',
		paddingBottom: '5px',
		position: 'relative',
		width: 'auto',
		maxWidth: '100%',
		maxHeight: '500px'
	},
	text: {
		color: '#fff',
		padding: '5px',
		textAlign: 'center'
	},
	textPosition: {
		position: 'absolute',
		bottom: 25,
		marginLeft: 'auto',
		marginRight: 'auto',
		left: 0,
		right: 0
	},
	'@media screen and (max-width: 900px)': {
		imageInShowcase: {
			width: '70%'
		}
	}
};

export default imageInShowcaseStyles;
