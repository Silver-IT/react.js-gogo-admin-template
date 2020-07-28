/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Row, Card, CardBody } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Breadcrumb from '../../../../containers/navs/Breadcrumb';
import {
  Separator,
  Colxx,
} from '../../../../components/common/CustomBootstrap';
import knowledgeBaseData from '../../../../data/knowledgebase';

const KnowledgeBase = ({ match }) => {
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.faq" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row className="equal-height-container">
        {knowledgeBaseData.map((item, index) => {
          return (
            <Colxx
              md="12"
              xl="6"
              className="mb-4 col-item"
              key={`knowledgebase_${index}`}
            >
              <Card>
                <CardBody>
                  <div className="text-center">
                    <i className={`${item.icon} large-icon`} />
                    <h5 className="mb-0 font-weight-semibold color-theme-1 mb-4">
                      {item.title}
                    </h5>
                  </div>
                  <div className="pl-3 pr-3 pt-3 pb-0 d-flex flex-column flex-grow-1">
                    <p className="text-muted mb-4">{item.detail}</p>
                    <ul className="list-unstyled mb-0">
                      {item.subtitles.map((subitem, subIndex) => {
                        return (
                          <li key={`knowledgebaseSub_${subIndex}`}>
                            <NavLink to={subitem.link} className="btn-link">
                              {subitem.title}
                            </NavLink>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </CardBody>
              </Card>
            </Colxx>
          );
        })}
      </Row>
    </>
  );
};
export default KnowledgeBase;
