import React, { useState } from 'react';
import { Row, Card, CardBody } from 'reactstrap';
import { ReactSortable } from 'react-sortablejs';
import IntlMessages from '../../../../helpers/IntlMessages';
import {
  Colxx,
  Separator,
} from '../../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../../containers/navs/Breadcrumb';

const SortableUi = ({ match }) => {
  const [listColumns, setListColumns] = useState([
    {
      icon: 'iconsminds-clock',
      title: 'Pending Orders',
      value: 14,
      id: 1,
    },
    {
      icon: 'iconsminds-basket-coins',
      title: 'Completed Orders',
      value: 32,
      id: 2,
    },
    {
      icon: 'iconsminds-arrow-refresh',
      title: 'Refund Requests',
      value: 74,
      id: 3,
    },
    {
      icon: 'iconsminds-mail-read',
      title: 'New Comments',
      value: 25,
      id: 4,
    },
  ]);
  const [listBasic, setListBasic] = useState([
    {
      id: 1,
      title: 'Angel Cake',
    },
    {
      id: 2,
      title: 'Bibingka',
    },
    {
      id: 3,
      title: 'Cremeschnitte',
    },
    {
      id: 4,
      title: 'Faworki',
    },
  ]);

  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.sortable" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12">
          <h5 className="mb-4">
            <IntlMessages id="sortable.columns" />
          </h5>
          <ReactSortable
            className="row icon-cards-row mb-2"
            list={listColumns}
            setList={(list) => setListColumns(list)}
          >
            {listColumns.map((item) => (
              <Colxx
                key={`column_${item.id}`}
                xxs="6"
                sm="4"
                md="3"
                className="mb-4"
              >
                <Card>
                  <CardBody className="text-center">
                    <i className={item.icon} />
                    <p className="card-text font-weight-semibold mb-0">
                      {item.title}
                    </p>
                    <p className="lead text-center">{item.value}</p>
                  </CardBody>
                </Card>
              </Colxx>
            ))}
          </ReactSortable>
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12">
          <h5 className="mb-4">
            <IntlMessages id="sortable.basic" />
          </h5>

          <Card className="mb-4">
            <CardBody>
              <ReactSortable
                list={listBasic}
                setList={(list) => setListBasic(list)}
                tag="ul"
                className="list-unstyled"
              >
                {listBasic.map((item) => (
                  <li key={`basic_${item.id}`}>
                    <p>
                      {item.id}. {item.title}
                    </p>
                  </li>
                ))}
              </ReactSortable>
            </CardBody>
          </Card>
        </Colxx>
      </Row>
    </>
  );
};

export default SortableUi;
