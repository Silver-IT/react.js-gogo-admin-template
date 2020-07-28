/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Row, Card, CardBody, Badge } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { Colxx } from '../../components/common/CustomBootstrap';
import orders from '../../data/orders';

const OrderItem = ({ name, address, date, status, statusColor }) => {
  return (
    <Card className="d-flex flex-row mb-3">
      <div className="d-flex flex-grow-1 min-width-zero">
        <CardBody className="align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">
          <NavLink
            to="#"
            location={{}}
            className="list-item-heading mb-1 truncate w-40 w-xs-100"
          >
            {name}
          </NavLink>
          <p className="mb-1 text-muted text-small w-15 w-xs-100">{address}</p>
          <p className="mb-1 text-muted text-small w-15 w-xs-100">{date}</p>

          <div className="w-15 w-xs-100 text-right">
            <Badge color={statusColor} pill>
              {status}
            </Badge>
          </div>
        </CardBody>
      </div>
    </Card>
  );
};

const Orders = () => {
  return (
    <Row>
      <Colxx>
        {orders.map((order, index) => {
          return <OrderItem key={`order_${index}`} {...order} />;
        })}
      </Colxx>
    </Row>
  );
};

export default Orders;
