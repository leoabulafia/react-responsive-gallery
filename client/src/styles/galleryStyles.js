const galleryStyles = {
	containerGallery: {
		padding: '30px 20px 100px 20px'
	},
	hoverImage: {
		cursor: 'pointer',
		opacity: 1,
		position: 'relative',
		textAlign: 'center',
		transition: 'opacity 0.4s ease-in-out',
		'&:hover': {
			opacity: 0.5
		},
		'&:hover > div': {
			color: '#fff',
			opacity: 1
		}
	},
	textInImage: {
		fontWeight: 700,
		left: '50%',
		opacity: 0,
		position: 'absolute',
		textTransform: 'uppercase',
		top: '50%',
		transform: 'translate(-50%, -50%)'
	},
	containerImage: {
		display: 'inline-block',
		padding: '4px',
		width: 'calc(20% - 8px)'
	},
	image: {
		height: 'auto',
		width: '100%'
	},
	loadMoreButton: {
		backgroundColor: '#ddd',
		border: 0,
		color: '#000',
		cursor: 'pointer',
		fontWeight: 700,
		margin: '10px 0 10px',
		letterSpacing: '3px',
		padding: '10px',
		textAlign: 'center',
		textTransform: 'uppercase',
		transition: '0.3s',
		width: '100%',
		'&:hover': {
			backgroundColor: '#333',
			color: '#fff'
		}
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

export default galleryStyles;

