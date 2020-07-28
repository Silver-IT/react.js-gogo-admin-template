import React, { useState } from 'react';
import {
  Row,
  Card,
  CardBody,
  Nav,
  NavItem,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  TabContent,
  TabPane,
  Badge,
  CardTitle,
  CardSubtitle,
  CardText,
  CardImg,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import Breadcrumb from '../../../../containers/navs/Breadcrumb';
import { Colxx } from '../../../../components/common/CustomBootstrap';
import IntlMessages from '../../../../helpers/IntlMessages';
import SingleLightbox from '../../../../components/pages/SingleLightbox';
import recentPostsData from '../../../../data/recentposts';
import RecentPost from '../../../../components/common/RecentPost';
import productData from '../../../../data/products';
import UserCardBasic from '../../../../components/cards/UserCardBasic';
import friendsData from '../../../../data/follow';

const products = productData.slice(0, 15);

const ProfilePortfolio = ({ match }) => {
  const [activeTab, setActiveTab] = useState('details');

  return (
    <>
      <Row>
        <Colxx xxs="12">
          <h1>Sarah Kortney</h1>
          <div className="text-zero top-right-button-container">
            <UncontrolledDropdown>
              <DropdownToggle
                caret
                color="primary"
                size="lg"
                outline
                className="top-right-button top-right-button-single"
              >
                <IntlMessages id="pages.actions" />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>
                  <IntlMessages id="pages.header" />
                </DropdownItem>
                <DropdownItem disabled>
                  <IntlMessages id="pages.delete" />
                </DropdownItem>
                <DropdownItem>
                  <IntlMessages id="pages.another-action" />
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <IntlMessages id="pages.another-action" />
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>

          <Breadcrumb match={match} />

          <Nav tabs className="separator-tabs ml-0 mb-5">
            <NavItem>
              <NavLink
                className={classnames({
                  active: activeTab === 'details',
                  'nav-link': true,
                })}
                onClick={() => {
                  setActiveTab('details');
                }}
                location={{}}
                to="#"
              >
                <IntlMessages id="pages.details" />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({
                  active: activeTab === 'followers',
                  'nav-link': true,
                })}
                onClick={() => {
                  setActiveTab('followers');
                }}
                location={{}}
                to="#"
              >
                <IntlMessages id="pages.followers" />
              </NavLink>
            </NavItem>
          </Nav>

          <TabContent activeTab={activeTab}>
            <TabPane tabId="details">
              <Row>
                <Colxx xxs="12" lg="4" className="mb-4 col-left">
                  <Card className="mb-4">
                    <div className="position-absolute card-top-buttons">
                      <Button outline color="white" className="icon-button">
                        <i className="simple-icon-pencil" />
                      </Button>
                    </div>
                    <SingleLightbox
                      thumb="/assets/img/profile-pic.jpg"
                      large="/assets/img/profile-pic.jpg"
                      className="card-img-top"
                    />

                    <CardBody>
                      <p className="text-muted text-small mb-2">
                        <IntlMessages id="menu.about" />
                      </p>
                      <p className="mb-3">
                        I’m a web developer. I spend my whole day, practically
                        every day, experimenting with HTML, CSS, and JavaScript;
                        dabbling with Python and Ruby; and inhaling a wide
                        variety of potentially useless information through a few
                        hundred RSS feeds. I build websites that delight and
                        inform. I do it well.
                      </p>
                      <p className="text-muted text-small mb-2">
                        <IntlMessages id="pages.location" />
                      </p>
                      <p className="mb-3">Nairobi, Kenya</p>
                      <p className="text-muted text-small mb-2">
                        <IntlMessages id="pages.responsibilities" />
                      </p>
                      <p className="mb-3">
                        <Badge
                          color="outline-secondary"
                          className="mb-1 mr-1"
                          pill
                        >
                          FRONTEND
                        </Badge>
                        <Badge
                          color="outline-secondary"
                          className="mb-1 mr-1"
                          pill
                        >
                          JAVASCRIPT
                        </Badge>
                        <Badge
                          color="outline-secondary"
                          className="mb-1 mr-1"
                          pill
                        >
                          SECURITY
                        </Badge>
                        <Badge
                          color="outline-secondary"
                          className="mb-1 mr-1"
                          pill
                        >
                          DESIGN
                        </Badge>
                      </p>
                      <p className="text-muted text-small mb-2">
                        <IntlMessages id="menu.contact" />
                      </p>
                      <div className="social-icons">
                        <ul className="list-unstyled list-inline">
                          <li className="list-inline-item">
                            <NavLink to="#" location={{}}>
                              <i className="simple-icon-social-facebook" />
                            </NavLink>
                          </li>
                          <li className="list-inline-item">
                            <NavLink to="#" location={{}}>
                              <i className="simple-icon-social-twitter" />
                            </NavLink>
                          </li>
                          <li className="list-inline-item">
                            <NavLink to="#" location={{}}>
                              <i className="simple-icon-social-instagram" />
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </CardBody>
                  </Card>

                  <Card className="mb-4">
                    <CardBody>
                      <CardTitle>
                        <IntlMessages id="pages.recent-posts" />
                      </CardTitle>
                      <div className="remove-last-border remove-last-margin remove-last-padding">
                        {recentPostsData.map((itemData) => {
                          return (
                            <RecentPost
                              data={itemData}
                              key={`recent_${itemData.key}`}
                            />
                          );
                        })}
                      </div>
                    </CardBody>
                  </Card>
                </Colxx>

                <Colxx xxs="12" lg="8" className="mb-4 col-right">
                  <Row>
                    {products.map((product) => {
                      return (
                        <Colxx
                          xxs="12"
                          lg="6"
                          xl="4"
                          className="mb-4"
                          key={`product_${product.id}`}
                        >
                          <Card>
                            <div className="position-relative">
                              <NavLink
                                to="#"
                                location={{}}
                                className="w-40 w-sm-100"
                              >
                                <CardImg
                                  top
                                  alt={product.title}
                                  src={product.img}
                                />
                              </NavLink>
                            </div>
                            <CardBody>
                              <NavLink
                                to="#"
                                location={{}}
                                className="w-40 w-sm-100"
                              >
                                <CardSubtitle>{product.title}</CardSubtitle>
                              </NavLink>
                              <CardText className="text-muted text-small mb-0 font-weight-light">
                                {product.createDate}
                              </CardText>
                            </CardBody>
                          </Card>
                        </Colxx>
                      );
                    })}
                  </Row>
                </Colxx>
              </Row>
            </TabPane>
            <TabPane tabId="followers">
              <Row>
                {friendsData.map((itemData) => {
                  return (
                    <Colxx
                      xxs="12"
                      md="6"
                      lg="4"
                      key={`frined_${itemData.key}`}
                    >
                      <UserCardBasic data={itemData} />
                    </Colxx>
                  );
                })}
              </Row>
            </TabPane>
          </TabContent>
        </Colxx>
      </Row>
    </>
  );
};
export default ProfilePortfolio;
