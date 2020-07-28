import React, { useState } from 'react';
import {
  Row,
  Card,
  CardTitle,
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
  CardHeader,
  Table,
  InputGroup,
  InputGroupAddon,
  Input,
  Button,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import { injectIntl } from 'react-intl';
import Breadcrumb from '../../../../containers/navs/Breadcrumb';
import {
  Separator,
  Colxx,
} from '../../../../components/common/CustomBootstrap';
import IntlMessages from '../../../../helpers/IntlMessages';
import GlideComponentThumbs from '../../../../components/carousel/GlideComponentThumbs';
import { detailImages, detailThumbs } from '../../../../data/carouselItems';
import { detailsQuestionsData } from '../../../../data/questions';
import CommentWithLikes from '../../../../components/pages/CommentWithLikes';
import { commentWithLikesData } from '../../../../data/comments';
import QuestionAnswer from '../../../../components/pages/QuestionAnswer';
import GalleryDetail from '../../../../containers/pages/GalleryDetail';

const DetailsPages = ({ match, intl }) => {
  const [activeTab, setActiveTab] = useState('details');

  const { messages } = intl;
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <h1>Magdalena Cake</h1>
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
          <Separator className="mb-5" />

          <Row>
            <Colxx xxs="12" xl="8" className="col-left">
              <Card className="mb-4">
                <CardBody>
                  <GlideComponentThumbs
                    settingsImages={{
                      bound: true,
                      rewind: false,
                      focusAt: 0,
                      startAt: 0,
                      gap: 5,
                      perView: 1,
                      data: detailImages,
                    }}
                    settingsThumbs={{
                      bound: true,
                      rewind: false,
                      focusAt: 0,
                      startAt: 0,
                      gap: 10,
                      perView: 5,
                      data: detailThumbs,
                      breakpoints: {
                        576: {
                          perView: 4,
                        },
                        420: {
                          perView: 3,
                        },
                      },
                    }}
                  />
                </CardBody>
              </Card>
              <Card className="mb-4">
                <CardHeader>
                  <Nav tabs className="card-header-tabs ">
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: activeTab === 'details',
                          'nav-link': true,
                        })}
                        onClick={() => setActiveTab('details')}
                        to="#"
                        location={{}}
                      >
                        <IntlMessages id="pages.details-title" />
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: activeTab === 'comments',
                          'nav-link': true,
                        })}
                        onClick={() => setActiveTab('comments')}
                        to="#"
                        location={{}}
                      >
                        <IntlMessages id="pages.comments-title" />
                        (19)
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: activeTab === 'questions',
                          'nav-link': true,
                        })}
                        onClick={() => setActiveTab('questions')}
                        to="#"
                        location={{}}
                      >
                        <IntlMessages id="pages.questions-title" />
                        (6)
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>

                <TabContent activeTab={activeTab}>
                  <TabPane tabId="details">
                    <Row>
                      <Colxx sm="12">
                        <CardBody>
                          <p className="font-weight-bold">
                            Augue Vitae Commodo
                          </p>
                          <p>
                            Vivamus ultricies augue vitae commodo condimentum.
                            Nullamfaucibus eros eu mauris feugiat, eget
                            consectetur tortor tempus. Sed volutpatmollis dui
                            eget fringilla. Vestibulum blandit urna ut tellus
                            lobortis tristique.Vestibulum ante ipsum primis in
                            faucibus orci luctus et ultrices posuere
                            cubiliaCurae; Pellentesque quis cursus mauris. Nam
                            in ornare erat. Vestibulum convallisenim ac massa
                            dapibus consectetur. Maecenas facilisis eros ac
                            felis mattis, egetauctor sapien varius. <br />
                            <br />
                            Nulla non purus fermentum, pulvinar dui condimentum,
                            malesuada nibh. Sed viverra quam urna, at
                            condimentum ante viverra non. Mauris posuere erat
                            sapien, a convallis libero lobortis sit amet.
                            Suspendisse in orci tellus.
                          </p>
                          <br />
                          <p className="font-weight-bold">
                            Phasellus Efficitur
                          </p>
                          <p>
                            Tellus a sem condimentum, vitae convallis sapien
                            feugiat.Aenean non nibh nec nunc aliquam iaculis. Ut
                            quis suscipit nunc. Duis at lectusa est aliquam
                            venenatis vitae eget arcu. Sed egestas felis eget
                            convallismaximus. Curabitur maximus, ligula vel
                            sagittis iaculis, risus nisi tinciduntsem, ut
                            ultricies libero nulla eu ligula. Nam ultricies
                            mollis nulla, sedlaoreet leo convallis ac. Mauris
                            nisl risus, tincidunt ac diam aliquet,convallis
                            pellentesque nisi. Nam sit amet libero at odio
                            malesuada ultricies avitae dolor. Cras in viverra
                            felis, non consequat quam. Praesent a orci
                            enim.Vivamus porttitor nisi at nisl egestas iaculis.
                            Nullam commodo eget duisollicitudin sagittis. Duis
                            id nibh mollis, hendrerit metus
                            consectetur,ullamcorper risus. Morbi elementum
                            ultrices nunc, quis porta nisi ornare sitamet.
                            <br />
                            <br />
                            Etiam tincidunt orci in nisi aliquam placerat.
                            Aliquam finibus in sem utvehicula. Morbi eget
                            consectetur leo. Quisque consectetur lectus eros,
                            sedsodales libero ornare cursus. Etiam elementum ut
                            dolor eget hendrerit.Suspendisse eu lacus eu eros
                            lacinia feugiat sit amet non purus.
                            <br />
                            <br />
                            Pellentesque quis cursus mauris. Nam in ornare erat.
                            Vestibulum convallis enim ac massa dapibus
                            consectetur. Maecenas facilisis eros ac felis
                            mattis, eget auctor sapien varius.
                          </p>
                          <br />
                          <p className="font-weight-bold">Elementum Ultrices</p>
                          <Table borderless>
                            <thead>
                              <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                              </tr>
                              <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                              </tr>
                              <tr>
                                <th scope="row">3</th>
                                <td colSpan="2">Larry the Bird</td>
                                <td>@twitter</td>
                              </tr>
                            </tbody>
                          </Table>
                        </CardBody>
                      </Colxx>
                    </Row>
                  </TabPane>
                  <TabPane tabId="comments">
                    <Row>
                      <Colxx sm="12">
                        <CardBody>
                          {commentWithLikesData.map((item) => {
                            return (
                              <CommentWithLikes
                                data={item}
                                key={`comments_${item.key}`}
                              />
                            );
                          })}
                          <InputGroup className="comment-contaiener">
                            <Input placeholder={messages['pages.addComment']} />
                            <InputGroupAddon addonType="append">
                              <Button color="primary">
                                <span className="d-inline-block">
                                  {messages['pages.send']}
                                </span>{' '}
                                <i className="simple-icon-arrow-right ml-2" />
                              </Button>
                            </InputGroupAddon>
                          </InputGroup>
                        </CardBody>
                      </Colxx>
                    </Row>
                  </TabPane>
                  <TabPane tabId="questions">
                    <Row>
                      <Colxx sm="12">
                        <CardBody>
                          {detailsQuestionsData.map((item) => {
                            return (
                              <QuestionAnswer
                                data={item}
                                key={`qa_${item.key}`}
                              />
                            );
                          })}
                        </CardBody>
                      </Colxx>
                    </Row>
                  </TabPane>
                </TabContent>
              </Card>
            </Colxx>

            <Colxx xxs="12" xl="4" className="col-right">
              <Card className="mb-4">
                <CardBody>
                  <div className="mb-3">
                    <div className="post-icon mr-3 d-inline-block">
                      <NavLink to="#" location={{}}>
                        <i className="simple-icon-heart mr-1" />
                      </NavLink>
                      <span>4 {messages['pages.likes']}</span>
                    </div>

                    <div className="post-icon mr-3 d-inline-block">
                      <NavLink to="#" location={{}}>
                        <i className="simple-icon-bubble mr-1" />
                      </NavLink>
                      <span>2 {messages['pages.comments-title']}</span>
                    </div>
                  </div>
                  <p className="mb-3">
                    Vivamus ultricies augue vitae commodo condimentum. Nullam
                    faucibus eros eu mauris feugiat, eget consectetur tortor
                    tempus.
                    <br />
                    <br />
                    Sed volutpat mollis dui eget fringilla. Vestibulum blandit
                    urna ut tellus lobortis tristique. Vestibulum ante ipsum
                    primis in faucibus orci luctus et ultrices posuere cubilia
                    Curae; Pellentesque quis cursus mauris.
                    <br />
                    <br />
                    Nulla non purus fermentum, pulvinar dui condimentum,
                    malesuada nibh. Sed viverra quam urna, at condimentum ante
                    viverra non. Mauris posuere erat sapien, a convallis libero
                    lobortis sit amet. Suspendisse in orci tellus.
                  </p>
                  <p className="text-muted text-small mb-2">
                    {messages['forms.tags']}
                  </p>
                  <p className="mb-3">
                    <Badge color="outline-secondary" className="mb-1 mr-1" pill>
                      FRONTEND
                    </Badge>
                    <Badge color="outline-secondary" className="mb-1 mr-1" pill>
                      JAVASCRIPT
                    </Badge>
                    <Badge color="outline-secondary" className="mb-1 mr-1" pill>
                      SECURITY
                    </Badge>
                    <Badge color="outline-secondary" className="mb-1 mr-1" pill>
                      DESIGN
                    </Badge>
                  </p>
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
            </Colxx>
          </Row>
        </Colxx>
      </Row>
    </>
  );
};
export default injectIntl(DetailsPages);
