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
		if (this.state.currentImage === this.props.images.length - 1) return;

		this.gotoNext();
	}

	render () {
    const images = this.props.images;
		return (
			<div className="gallery">
        <div className="gallery-tiles">
          { images.map((obj, i) => {
      			return (
      				<a
      					href={obj.src}
      					className="gallery-thumbnail"
      					key={i}
      					onClick={(e) => this.openLightbox(i, e)}
      				>
      					<img src={obj.thumbnail} alt="gallery" />
      				</a>
      			)
      		})
        }
        </div>
				<Lightbox
					currentImage={this.state.currentImage}
					images={this.props.images}
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
		);
	}
}

export default Gallery;
