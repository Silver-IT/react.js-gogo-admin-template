import React from 'react';
import { Row } from 'reactstrap';
import {
  Colxx,
  Separator,
} from '../../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../../containers/navs/Breadcrumb';

import IconCards from '../../../../containers/ui/IconCards';
import ImageCards from '../../../../containers/ui/ImageCards';
import ImageOverlayCard from '../../../../containers/ui/ImageOverlayCard';
import ImageCardList from '../../../../containers/ui/ImageCardList';
import TabCardExamples from '../../../../containers/ui/TabCardExamples';
import UserCardExamples from '../../../../containers/ui/UserCardExamples';

const CardsUi = ({ match }) => {
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.cards" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <IconCards />
      <ImageCards />
      <ImageOverlayCard />
      <ImageCardList />
      <TabCardExamples />
      <UserCardExamples />
    </>
  );
};

export default CardsUi;
