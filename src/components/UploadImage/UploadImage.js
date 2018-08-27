import React, { Component } from "react";
import Dropzone from "react-dropzone";

import ImageCrop from "./ImageCrop";
import "react-image-crop/dist/ReactCrop.css";
import "./upload_image.css";

class UploadImage extends Component {
  state = {
    visible: false,
    image64Source: null,
    base64Crop: null
  };
  showModal = () => {
    this.setState({
      visible: true
    });
  };
  handleOk = base64Crop => {
    this.setState({
      visible: false,
      base64Crop: base64Crop
    });
  };
  getBase64 = file => {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.setState({
        image64Source: reader.result
      });
    };
    reader.onerror = function(error) {
      console.log("Error: ", error);
    };
  };
  render() {
    let { input, meta, dropzoneOnDrop, saveFile, ...props } = this.props;
    return (
      <div className="upload-image">
        <Dropzone
          className="dropzone"
          onDrop={(acceptedFiles, rejectedFiles, e) => {
            input.onChange(acceptedFiles);
            this.getBase64(acceptedFiles[0]);
            dropzoneOnDrop && dropzoneOnDrop(acceptedFiles, rejectedFiles, e);
            this.showModal();
          }}
          {...props}
        >
          "Всавьте картику"
        </Dropzone>
        {this.state.base64Crop && (
          <img
            className="cropped-image"
            src={this.state.base64Crop}
            alt="base64image"
          />
        )}
        <ImageCrop
          visible={this.state.visible}
          handleOk={this.handleOk}
          image={this.state.image64Source}
          file={this.props.file}
          saveFile={saveFile}
        />
      </div>
    );
  }
}

export default UploadImage;
