import React, { Component } from "react";
import Dropzone from "react-dropzone";
import ReactCrop, { makeAspectCrop } from "react-image-crop";

import "react-image-crop/dist/ReactCrop.css";
import "./upload_image.css";

class UploadImage extends Component {
  state = {
    crop: {
      x: 0,
      y: 0,
      aspect: 4 / 3
    }
    // maxHeight: 80
  };
  onImageLoaded = image => {
    this.setState({
      crop: makeAspectCrop(
        {
          x: 0,
          y: 0,
          aspect: 4 / 3,
          width: 300
        },
        image.naturalWidth / image.naturalHeight
      ),
      image
    });
  };

  onCropChange = crop => {
    this.setState({ crop });
  };
  onCropComplete = (crop, pixelCrop) => {
    console.log("onCropComplete, pixelCrop:", pixelCrop);
  };
  render() {
    let { input, meta, dropzoneOnDrop, image, ...props } = this.props;
    return (
      <Dropzone
        className="dropzone"
        onDrop={(acceptedFiles, rejectedFiles, e) => {
          input.onChange(acceptedFiles);
          dropzoneOnDrop && dropzoneOnDrop(acceptedFiles, rejectedFiles, e);
        }}
        {...props}
      >
        {image ? (
          <ReactCrop
            {...this.state}
            src={image}
            onImageLoaded={this.onImageLoaded}
            onComplete={this.onCropComplete}
            onChange={this.onCropChange}
          />
        ) : (
          "Всавьте картику"
        )}
      </Dropzone>
    );
  }
}

export default UploadImage;
