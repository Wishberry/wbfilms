import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Lightbox from 'react-images';

class Gallery extends Component {
	constructor () {
		super();

		this.state = {
			lightboxIsOpen: false,
			currentImage: 0,
		};
	}
	openLightbox = (index, event) => {
		event.preventDefault();
		this.setState({
			currentImage: index,
			lightboxIsOpen: true,
		});
	}
	closeLightbox = () => {
		this.setState({
			currentImage: 0,
			lightboxIsOpen: false,
		});
	}
	gotoPrevious = () => {
		this.setState({
			currentImage: this.state.currentImage - 1,
		});
	}
	gotoNext = () => {
		this.setState({
			currentImage: this.state.currentImage + 1,
		});
	}
	gotoImage = (index) => {
		this.setState({
			currentImage: index,
		});
	}
	handleClickImage = () => {
		if (this.state.currentImage === this.props.tiles.length) return;

		this.gotoNext();
	}

	render () {
    const tiles = this.props.tiles;
		let images = [
			{
				src: this.props.poster,
				thumbnail: this.props.poster
			},
			...tiles
		];
		return (
			<div className="photo-gallery">
				<div
					className="poster"
					href={this.props.poster}
					onClick={(e) => this.openLightbox(0, e)}
				>
					<h3>Film Poster</h3>
					<img src={this.props.poster} alt="poster" />
				</div>
				<div className="photo-thumbnails">
					<div className="gallery">
		        <div className="gallery-tiles">
		          { tiles.map((obj, i) => {
		      			return (
		      				<a
		      					href={obj.src}
		      					className="gallery-thumbnail"
		      					key={i}
		      					onClick={(e) => this.openLightbox((i + 1), e)}
		      				>
		      					<img src={obj.thumbnail} alt="gallery" />
		      				</a>
		      			)
		      		})
		        }
		        </div>
					</div>
					<Lightbox
						currentImage={this.state.currentImage}
						images={images}
						isOpen={this.state.lightboxIsOpen}
						onClickImage={this.handleClickImage}
						onClickNext={this.gotoNext}
						onClickPrev={this.gotoPrevious}
						onClickThumbnail={this.gotoImage}
						onClose={this.closeLightbox}
						showThumbnails={true}
	          backdropClosesModal={true}
					/>
				</div>
			</div>
		);
	}
}

export default Gallery;
