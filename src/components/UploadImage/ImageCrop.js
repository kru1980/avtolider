import React, { Component } from "react";
import { Modal } from "antd";
import ReactCrop, { makeAspectCrop } from "react-image-crop";

class ImageCrop extends Component {
  state = {
    crop: {
      x: 0,
      y: 0,
      aspect: 4 / 3
    },
    pixelCrop: null,
    base64Crop: null
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
      image,
      pixelCrop: {
        x: 0,
        y: 0,
        width: image.naturalWidth,
        height: image.naturalWidth / 1.33
      }
    });
  };

  onCropChange = crop => {
    this.setState({ crop });
  };
  onCropComplete = (crop, pixelCrop) => {
    console.log("onCropComplete, pixelCrop:", pixelCrop);
    this.setState({
      pixelCrop
    });
  };
  getCroppedImg = (image, pixelCrop, fileName) => {
    const canvas = document.createElement("canvas");
    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      image,
      pixelCrop.x,
      pixelCrop.y,
      pixelCrop.width,
      pixelCrop.height,
      0,
      0,
      pixelCrop.width,
      pixelCrop.height
    );

    const base64Crop = canvas.toDataURL("image/jpeg");
    this.setState({
      base64Crop: base64Crop
    });

    return new Promise((resolve, reject) => {
      canvas.toBlob(file => {
        file.name = fileName.name;
        resolve(file);
      }, fileName.type);
    });
  };
  saveCroppedImg = async () => {
    const croppedImg = await this.getCroppedImg(
      this.state.image,
      this.state.pixelCrop,
      this.props.file
    );
    this.props.saveFile(croppedImg);
    this.props.handleOk(this.state.base64Crop);
  };
  render() {
    return (
      <Modal
        title="Отредактируйте изображение"
        visible={this.props.visible}
        onOk={this.saveCroppedImg}
        // onCancel={this.handleCancel}
      >
        {this.props.image && (
          <ReactCrop
            {...this.state}
            src={this.props.image}
            onImageLoaded={this.onImageLoaded}
            onComplete={this.onCropComplete}
            onChange={this.onCropChange}
          />
        )}
      </Modal>
    );
  }
}

export default ImageCrop;
