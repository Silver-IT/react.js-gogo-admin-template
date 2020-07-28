/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import { NavLink } from 'react-router-dom';
import { Row } from 'reactstrap';
import { Colxx } from '../../components/common/CustomBootstrap';

const images1 = [
  '/assets/img/tea-loaf.jpg',
  '/assets/img/magdalena.jpg',
  '/assets/img/marble-cake.jpg',
  '/assets/img/parkin.jpg',
  '/assets/img/napoleonshat.jpg',
  '/assets/img/fruitcake.jpg',
];

const thumbs1 = [
  '/assets/img/tea-loaf-thumb.jpg',
  '/assets/img/magdalena-thumb.jpg',
  '/assets/img/marble-cake-thumb.jpg',
  '/assets/img/parkin-thumb.jpg',
  '/assets/img/napoleonshat-thumb.jpg',
  '/assets/img/fruitcake-thumb.jpg',
];

const images2 = [
  '/assets/img/fruitcake.jpg',
  '/assets/img/napoleonshat.jpg',
  '/assets/img/tea-loaf.jpg',
  '/assets/img/magdalena.jpg',
];

const thumbs2 = [
  '/assets/img/fruitcake-thumb.jpg',
  '/assets/img/napoleonshat-thumb.jpg',
  '/assets/img/tea-loaf-thumb.jpg',
  '/assets/img/magdalena-thumb.jpg',
];

const GalleryProfile = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [openedGallery, setOpenedGallery] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const onThumbClick = (index, gallery) => {
    setPhotoIndex(index);
    setIsOpen(true);
    setOpenedGallery(gallery);
  };

  const getGallery = () => {
    if (openedGallery === 1) {
      return images1;
    }
    return images2;
  };

  return (
    <>
      <Row>
        <Colxx xxs="12">
          <h5 className="mb-4">25 July 2019</h5>
        </Colxx>
      </Row>
      <Row className="gallery gallery-page mb-5">
        {thumbs1.map((item, index) => {
          return (
            <Colxx xxs="6" lg="2" md="4" key={index}>
              <NavLink
                to="#"
                onClick={() => onThumbClick(index, 1)}
                location={{}}
              >
                <img
                  className="img-fluid border-radius"
                  src={item}
                  alt="thumbnail"
                />
              </NavLink>
            </Colxx>
          );
        })}
      </Row>
      <Row>
        <Colxx xxs="12">
          <h5 className="mb-4">14 April 2019</h5>
        </Colxx>
      </Row>
      <Row className="gallery gallery-page mb-5">
        {thumbs2.map((item, index) => {
          return (
            <Colxx xxs="6" lg="3" md="3" key={index}>
              <NavLink
                to="#"
                onClick={() => onThumbClick(index, 2)}
                location={{}}
              >
                <img
                  className="img-fluid border-radius"
                  src={item}
                  alt="thumbnail"
                />
              </NavLink>
            </Colxx>
          );
        })}
      </Row>

      {isOpen && (
        <Lightbox
          mainSrc={getGallery()[photoIndex]}
          nextSrc={getGallery()[(photoIndex + 1) % getGallery().length]}
          prevSrc={
            getGallery()[
              (photoIndex + getGallery().length - 1) % getGallery().length
            ]
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + getGallery().length - 1) % getGallery().lengt
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % getGallery().length)
          }
        />
      )}
    </>
  );
};

export default GalleryProfile;
