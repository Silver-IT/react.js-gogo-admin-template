/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import { NavLink } from 'react-router-dom';

const images = [
  '/assets/img/fruitcake.jpg',
  '/assets/img/napoleonshat.jpg',
  '/assets/img/tea-loaf.jpg',
  '/assets/img/magdalena.jpg',
  '/assets/img/marble-cake.jpg',
  '/assets/img/parkin.jpg',
];

const thumbs = [
  '/assets/img/fruitcake-thumb.jpg',
  '/assets/img/napoleonshat-thumb.jpg',
  '/assets/img/tea-loaf-thumb.jpg',
  '/assets/img/magdalena-thumb.jpg',
  '/assets/img/marble-cake-thumb.jpg',
  '/assets/img/parkin-thumb.jpg',
];

const GalleryDetail = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="row social-image-row gallery">
        {thumbs.map((item, index) => {
          return (
            <div className="col-6" key={index}>
              <NavLink
                to="#"
                onClick={() => {
                  setPhotoIndex(index);
                  setIsOpen(true);
                }}
                location={{}}
              >
                <img
                  className="img-fluid border-radius"
                  src={item}
                  alt="thumbnail"
                />
              </NavLink>
            </div>
          );
        })}
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </div>
  );
};

export default GalleryDetail;
