import React from 'react'
import Link from 'gatsby-link'
import Gallery from 'react-grid-gallery';

class PhotoGallery extends React.PureComponent {

  render() {
    const tileStyles = {
      width: "20vw",
      height: "20vw",
      position: "relative",
      overflow: "hidden",
      marginRight: "2rem",
    }
    const thumbnailStyles = {
      height: "100%",
      width: "auto",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    }

    function tileFunc() {
      if (this.props.index === 1 || this.props.index === 2){
        return {
          width: "30vw",
          height: "20vw",
          position: "relative",
          overflow: "hidden",
        }
      }
      return tileStyles;
    }

    function thumbnailFunc() {
      return thumbnailStyles;
    }
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
        tileViewportStyle={tileFunc}
        thumbnailStyle={thumbnailFunc}
      />
    );
  }
}


export default PhotoGallery
