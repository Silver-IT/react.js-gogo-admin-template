import React from 'react';
import { Row, Card, CardBody, CardTitle } from 'reactstrap';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';
import IntlMessages from '../../../../helpers/IntlMessages';
import {
  Colxx,
  Separator,
} from '../../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../../containers/navs/Breadcrumb';

const MapWithAMarker = withScriptjs(
  withGoogleMap(() => (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
      <Marker position={{ lat: -34.397, lng: 150.644 }} />
    </GoogleMap>
  ))
);

const MapsUi = ({ match }) => {
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.maps" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12">
          <Card className="mb-4">
            <CardBody>
              <CardTitle>
                <IntlMessages id="maps.google" />
              </CardTitle>
              <MapWithAMarker
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCO8MfadmlotuuHC8wmjwL_46I5QAMIiRU&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div className="map-item" />}
                containerElement={<div className="map-item" />}
                mapElement={<div className="map-item" />}
              />
            </CardBody>
          </Card>

          <Card className="mb-4">
            <CardBody>
              <CardTitle>
                <IntlMessages id="maps.yandex" />
              </CardTitle>
              <div className="map-item">
                <YMaps query={{ lang: 'en-US' }}>
                  <Map
                    className="map-item"
                    defaultState={{ center: [-34.397, 150.644], zoom: 9 }}
                  >
                    <Placemark defaultGeometry={[-34.397, 150.644]} />
                  </Map>
                </YMaps>
              </div>
            </CardBody>
          </Card>
        </Colxx>
      </Row>
    </>
  );
};
export default MapsUi;
