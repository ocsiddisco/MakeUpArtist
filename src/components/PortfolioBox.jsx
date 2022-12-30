import React, { Component } from "react";
import { images } from "./images";
import { Gallery } from "react-grid-gallery";
import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css'; 





export default class PortfolioBox extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        photoIndex: 0,
        isOpen: false,
      };
    }
  
    render() {
      const { photoIndex, isOpen } = this.state;
  
      return (
        <div className="border-solid border-8 shadow-2xl border-transparent	">
            <Gallery images={images} onClick={() => this.setState({ isOpen: true })}/>
  
            {isOpen && (
                <Lightbox
                mainSrc={images[photoIndex].src}
                nextSrc={images[(photoIndex + 1) % images.length].src}
                prevSrc={images[(photoIndex + images.length - 1) % images.length].src}
                onCloseRequest={() => this.setState({ isOpen: false })}
                onMovePrevRequest={() =>
                    this.setState({
                    photoIndex: (photoIndex + images.length - 1) % images.length,
                    })
                }
                onMoveNextRequest={() =>
                    this.setState({
                    photoIndex: (photoIndex + 1) % images.length,
                    })
                }
                onImageLoad={() => { window.dispatchEvent(new Event('resize')); }}
                />
            )}
        </div>
      );
    }
  }
