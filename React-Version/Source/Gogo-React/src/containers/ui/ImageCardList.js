import React from 'react';
import {
  Row,
  Card,
  CustomInput,
  CardTitle,
  FormGroup,
  Badge,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

import IntlMessages from '../../helpers/IntlMessages';
import { Colxx } from '../../components/common/CustomBootstrap';

const ImageCardList = () => {
  return (
    <Row>
      <Colxx xxs="12">
        <CardTitle className="mb-4">
          <IntlMessages id="cards.image-card-list" />
        </CardTitle>
        <Row>
          <Colxx xxs="12">
            <Card className="d-flex flex-row mb-3">
              <NavLink to="#" location={{}} className="d-flex">
                <img
                  alt="Thumbnail"
                  src="/assets/img/chocolate-cake-thumb.jpg"
                  className="list-thumbnail responsive border-0 card-img-left"
                />
              </NavLink>
              <div className="pl-2 d-flex flex-grow-1 min-width-zero">
                <div className="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
                  <NavLink to="#" location={{}} className="w-40 w-sm-100">
                    <p className="list-item-heading mb-1 truncate">
                      Chocolate Cake
                    </p>
                  </NavLink>
                  <p className="mb-1 text-muted text-small w-15 w-sm-100">
                    Cakes
                  </p>
                  <p className="mb-1 text-muted text-small w-15 w-sm-100">
                    09.04.2018
                  </p>
                  <div className="w-15 w-sm-100">
                    <Badge color="primary" pill>
                      PROCESSED
                    </Badge>
                  </div>
                </div>
                <div className="custom-control custom-checkbox pl-1 align-self-center pr-4">
                  <FormGroup className="mb-0">
                    <CustomInput type="checkbox" id="check1" label="" />
                  </FormGroup>
                </div>
              </div>
            </Card>
          </Colxx>
          <Colxx xxs="12">
            <Card className="d-flex flex-row mb-3">
              <NavLink to="#" location={{}} className="d-flex">
                <img
                  alt="Thumbnail"
                  src="/assets/img/cheesecake-thumb.jpg"
                  className="list-thumbnail responsive border-0 card-img-left"
                />
              </NavLink>
              <div className="pl-2 d-flex flex-grow-1 min-width-zero">
                <div className="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
                  <NavLink to="#" location={{}} className="w-40 w-sm-100">
                    <p className="list-item-heading mb-1 truncate">
                      Cheesecake
                    </p>
                  </NavLink>
                  <p className="mb-1 text-muted text-small w-15 w-sm-100">
                    Cupcakes
                  </p>
                  <p className="mb-1 text-muted text-small w-15 w-sm-100">
                    09.04.2018
                  </p>
                  <div className="w-15 w-sm-100">
                    <Badge color="secondary" pill>
                      ON HOLD
                    </Badge>
                  </div>
                </div>
                <div className="custom-control custom-checkbox pl-1 align-self-center pr-4">
                  <FormGroup className="mb-0">
                    <CustomInput type="checkbox" id="check2" label="" />
                  </FormGroup>
                </div>
              </div>
            </Card>
          </Colxx>
        </Row>
      </Colxx>
    </Row>
  );
};

export default ImageCardList;
