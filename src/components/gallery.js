import React from 'react'
import Link from 'gatsby-link'
import Gallery from 'react-grid-gallery';

// const tileView = () =>{
//
// }

class PhotoGallery extends React.PureComponent {

  render() {
    return (
      <Gallery
        images={this.props.images}
        enableLightBox={true}
        backdropClosesModal={true}
        preloadNextImage={true}
        enableKeyboardInput={true}
        showImageCount={true}
        showLightboxThumbnails={true}
        enableImageSelection={false}
        maxRows={2}
        rowHeight={250}
        margin={0}
      />
    );
  }
}


export default PhotoGallery
