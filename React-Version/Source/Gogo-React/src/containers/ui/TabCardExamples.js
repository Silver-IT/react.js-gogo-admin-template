import React, { useState } from 'react';
import {
  Row,
  Card,
  CardBody,
  CardTitle,
  CardHeader,
  Nav,
  NavItem,
  TabContent,
  TabPane,
  Button,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

import classnames from 'classnames';
import IntlMessages from '../../helpers/IntlMessages';
import { Colxx } from '../../components/common/CustomBootstrap';

const TabCardExamples = () => {
  const [activeFirstTab, setActiveFirstTab] = useState('1');
  const [activeSecondTab, setActiveSecondTab] = useState('1');

  return (
    <Row>
      <Colxx xxs="12">
        <CardTitle className="mb-4">
          <IntlMessages id="cards.tab-card" />
        </CardTitle>
        <Row>
          <Colxx xxs="12" xs="6" lg="3">
            <Card className="mb-4">
              <CardHeader>
                <Nav tabs className="card-header-tabs ">
                  <NavItem>
                    <NavLink
                      to="#"
                      location={{}}
                      className={classnames({
                        active: activeFirstTab === '1',
                        'nav-link': true,
                      })}
                      onClick={() => {
                        setActiveFirstTab('1');
                      }}
                    >
                      Tab 1
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      to="#"
                      location={{}}
                      className={classnames({
                        active: activeFirstTab === '2',
                        'nav-link': true,
                      })}
                      onClick={() => {
                        setActiveFirstTab('2');
                      }}
                    >
                      Tab 2
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      to="#"
                      location={{}}
                      className={classnames({
                        active: activeFirstTab === '3',
                        'nav-link': true,
                      })}
                      onClick={() => {
                        setActiveFirstTab('3');
                      }}
                    >
                      Tab 3
                    </NavLink>
                  </NavItem>
                </Nav>
              </CardHeader>

              <TabContent activeTab={activeFirstTab}>
                <TabPane tabId="1">
                  <Row>
                    <Colxx sm="12">
                      <CardBody>
                        <CardTitle className="mb-4">
                          Homemade Cheesecake with Fresh Berries and Mint
                        </CardTitle>
                        <Button outline size="sm" color="primary">
                          Edit
                        </Button>
                      </CardBody>
                    </Colxx>
                  </Row>
                </TabPane>
                <TabPane tabId="2">
                  <Row>
                    <Colxx sm="12">
                      <CardBody>
                        <CardTitle className="mb-4">
                          Wedding Cake with Flowers Macarons and Blueberries
                        </CardTitle>
                        <Button outline size="sm" color="primary">
                          Edit
                        </Button>
                      </CardBody>
                    </Colxx>
                  </Row>
                </TabPane>
                <TabPane tabId="3">
                  <Row>
                    <Colxx sm="12">
                      <CardBody>
                        <CardTitle className="mb-4">
                          Cheesecake with Chocolate Cookies and Cream Biscuits
                        </CardTitle>
                        <Button outline size="sm" color="primary">
                          Edit
                        </Button>
                      </CardBody>
                    </Colxx>
                  </Row>
                </TabPane>
              </TabContent>
            </Card>
          </Colxx>

          <Colxx xxs="12" xs="6" lg="3">
            <Card className="mb-4">
              <CardHeader className="pl-0 pr-0">
                <Nav tabs className=" card-header-tabs  ml-0 mr-0">
                  <NavItem className="w-50 text-center">
                    <NavLink
                      to="#"
                      location={{}}
                      className={classnames({
                        active: activeSecondTab === '1',
                        'nav-link': true,
                      })}
                      onClick={() => {
                        setActiveSecondTab('1');
                      }}
                    >
                      Tab 1
                    </NavLink>
                  </NavItem>
                  <NavItem className="w-50 text-center">
                    <NavLink
                      to="#"
                      location={{}}
                      className={classnames({
                        active: activeSecondTab === '2',
                        'nav-link': true,
                      })}
                      onClick={() => {
                        setActiveSecondTab('2');
                      }}
                    >
                      Tab 2
                    </NavLink>
                  </NavItem>
                </Nav>
              </CardHeader>

              <TabContent activeTab={activeSecondTab}>
                <TabPane tabId="1">
                  <Row>
                    <Colxx sm="12">
                      <CardBody>
                        <CardTitle className="mb-4">
                          Homemade Cheesecake with Fresh Berries and Mint
                        </CardTitle>
                        <Button outline size="sm" color="primary">
                          Edit
                        </Button>
                      </CardBody>
                    </Colxx>
                  </Row>
                </TabPane>
                <TabPane tabId="2">
                  <Row>
                    <Colxx sm="12">
                      <CardBody>
                        <CardTitle className="mb-4">
                          Wedding Cake with Flowers Macarons and Blueberries
                        </CardTitle>
                        <Button outline size="sm" color="primary">
                          Edit
                        </Button>
                      </CardBody>
                    </Colxx>
                  </Row>
                </TabPane>
                <TabPane tabId="3">
                  <Row>
                    <Colxx sm="12">
                      <CardBody>
                        <CardTitle className="mb-4">
                          Cheesecake with Chocolate Cookies and Cream Biscuits
                        </CardTitle>
                        <Button outline size="sm" color="primary">
                          Edit
                        </Button>
                      </CardBody>
                    </Colxx>
                  </Row>
                </TabPane>
              </TabContent>
            </Card>
          </Colxx>
        </Row>
      </Colxx>
    </Row>
  );
};

export default TabCardExamples;
