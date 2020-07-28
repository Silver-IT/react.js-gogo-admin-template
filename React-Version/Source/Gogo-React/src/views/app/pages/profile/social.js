import React, { useState } from 'react';
import {
  Row,
  Card,
  CardBody,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  TabContent,
  TabPane,
  Badge,
  CardTitle,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import GalleryDetail from '../../../../containers/pages/GalleryDetail';
import GalleryProfile from '../../../../containers/pages/GalleryProfile';
import Breadcrumb from '../../../../containers/navs/Breadcrumb';
import { Colxx } from '../../../../components/common/CustomBootstrap';
import IntlMessages from '../../../../helpers/IntlMessages';
import SingleLightbox from '../../../../components/pages/SingleLightbox';
import whotoFollowData from '../../../../data/follow';
import UserFollow from '../../../../components/common/UserFollow';
import UserCardBasic from '../../../../components/cards/UserCardBasic';
import recentPostsData from '../../../../data/recentposts';
import RecentPost from '../../../../components/common/RecentPost';
import posts from '../../../../data/posts';
import Post from '../../../../components/cards/Post';

const friendsData = whotoFollowData.slice();
const followData = whotoFollowData.slice(0, 5);

const ProfileSocial = ({ match }) => {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <>
      <Row>
        <Colxx xxs="12">
          <h1>Sarah Kortney </h1>
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
                  active: activeTab === 'profile',
                  'nav-link': true,
                })}
                onClick={() => setActiveTab('profile')}
                to="#"
                location={{}}
              >
                <IntlMessages id="pages.profile" />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({
                  active: activeTab === 'images',
                  'nav-link': true,
                })}
                onClick={() => setActiveTab('images')}
                to="#"
                location={{}}
              >
                <IntlMessages id="pages.images" />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({
                  active: activeTab === 'friends',
                  'nav-link': true,
                })}
                onClick={() => setActiveTab('friends')}
                to="#"
                location={{}}
              >
                <IntlMessages id="pages.friends" />
              </NavLink>
            </NavItem>
          </Nav>

          <TabContent activeTab={activeTab}>
            <TabPane tabId="profile">
              <Row>
                <Colxx xxs="12" className="mb-5">
                  <Card>
                    <SingleLightbox
                      thumb="/assets/img/social-header.jpg"
                      large="/assets/img/social-header.jpg"
                      className="social-header card-img"
                    />
                  </Card>
                </Colxx>
                <Colxx xxs="12" lg="5" xl="4" className="col-left">
                  <SingleLightbox
                    thumb="/assets/img/profile-pic-l.jpg"
                    large="/assets/img/profile-pic.jpg"
                    className="img-thumbnail card-img social-profile-img"
                  />

                  <Card className="mb-4">
                    <CardBody>
                      <div className="text-center pt-4">
                        <p className="list-item-heading pt-2">Sarah Cortney</p>
                      </div>
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
                            <NavLink to="#">
                              <i className="simple-icon-social-facebook" />
                            </NavLink>
                          </li>
                          <li className="list-inline-item">
                            <NavLink to="#">
                              <i className="simple-icon-social-twitter" />
                            </NavLink>
                          </li>
                          <li className="list-inline-item">
                            <NavLink to="#">
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
                        <IntlMessages id="pages.similar-projects" />
                      </CardTitle>
                      <GalleryDetail />
                    </CardBody>
                  </Card>

                  <Card className="mb-4">
                    <CardBody>
                      <CardTitle>
                        <IntlMessages id="pages.who-to-follow" />
                      </CardTitle>
                      <div className="remove-last-border remove-last-margin remove-last-padding">
                        {followData.map((itemData) => {
                          return (
                            <UserFollow
                              data={itemData}
                              key={`follow_${itemData.key}`}
                            />
                          );
                        })}
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
                <Colxx xxs="12" lg="7" xl="8" className="col-right">
                  {posts.map((itemData) => {
                    return (
                      <Post
                        data={itemData}
                        key={`post_${itemData.key}`}
                        className="mb-4"
                      />
                    );
                  })}
                </Colxx>
              </Row>
            </TabPane>
            <TabPane tabId="images">
              <GalleryProfile />
            </TabPane>
            <TabPane tabId="friends">
              <Row>
                {friendsData.map((itemData) => {
                  return (
                    <Colxx
                      xxs="12"
                      md="6"
                      lg="4"
                      key={`friend_${itemData.key}`}
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
export default ProfileSocial;
