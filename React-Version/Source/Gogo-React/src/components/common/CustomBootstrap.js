import React from 'react';
import { Col } from 'reactstrap';

const Colxx = (props) => (
  <Col {...props} widths={['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl']} />
);
const Separator = ({ className }) => (
  <div className={`separator ${className}`} />
);
export { Colxx, Separator };
