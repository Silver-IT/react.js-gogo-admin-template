import React from 'react';
import { Row, Card, CardBody, CardTitle } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import LinesEllipsis from 'react-lines-ellipsis';
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC';
import Breadcrumb from '../../../../containers/navs/Breadcrumb';
import {
  Separator,
  Colxx,
} from '../../../../components/common/CustomBootstrap';
import SingleLightbox from '../../../../components/pages/SingleLightbox';
import VideoPlayer from '../../../../components/common/VideoPlayer';
import { blogData, blogCategories } from '../../../../data/blog';
import IntlMessages from '../../../../helpers/IntlMessages';

const recentPosts = blogData.slice(0, 4);
const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis);

const BlogDetail = ({ match }) => {
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.blog-detail" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>

      <Row>
        <Colxx xxs="12" md="12" xl="8" className="col-left">
          <Card className="mb-4">
            <SingleLightbox
              thumb="/assets/img/detail-5.jpg"
              large="/assets/img/detail-5.jpg"
              className="responsive border-0 card-img-top mb-3"
            />
            <CardBody>
              <div className="mb-5">
                <h5 className="card-title">Game Changing Features</h5>
                <p>
                  Blended value human-centered social innovation resist scale
                  and impact issueoutcomesbandwidth efficient. A; social return
                  on investment, change-makers, support a,co-createcommitment
                  because sustainable. Rubric when vibrant black lives matter
                  benefitcorporation human-centered. Save the world,
                  problem-solvers support silo massincarceration. Accessibility
                  empower communities changemaker, low-hanging
                  fruitaccessibility, thought partnership impact investing
                  program areas invest.Contextualizeoptimism unprecedented
                  challenge, empower inclusive. Living a fully ethical life
                  theresistance segmentation social intrapreneurship efficient
                  inspire external partners.Systems thinking correlation, social
                  impact; when revolutionary bandwidth. Engaging,revolutionary
                  engaging; empower communities policymaker shared unit of
                  analysistechnology inspiring social entrepreneurship.
                </p>
                <p>
                  Mass incarceration, preliminary thinking systems thinking
                  vibrant thought leadershipcorporate social responsibility.
                  Green space global, policymaker; shared
                  valuedisruptsegmentation social capital. Thought partnership,
                  optimism citizen-centeredcommitment,relief scale and impact
                  the empower communities circular. Contextualize boots on
                  theground; uplift big data, co-creation co-create segmentation
                  youth inspire. Innovateinnovate overcome injustice.
                </p>
              </div>
              <div className="mb-5">
                <h5 className="card-title">Unprecedented Challenge</h5>
                <ul className="list-unstyled">
                  <li>Preliminary thinking systems</li>
                  <li>Bandwidth efficient</li>
                  <li>Green space</li>
                  <li>Social impact</li>
                  <li>Thought partnership</li>
                  <li>Fully ethical life</li>
                </ul>
              </div>
              <div>
                <h5 className="card-title">Revolutionary Bandwidth</h5>
                <p>
                  Blended value human-centered social innovation resist scale
                  and impact issueoutcomes bandwidth efficient. A; social return
                  on investment, change-makers, supporta, co-create commitment
                  because sustainable. Rubric when vibrant black lives
                  matterbenefit corporation human-centered. Save the world,
                  problem-solvers support silomass incarceration. Accessibility
                  empower communities changemaker, low-hanging
                  fruitaccessibility, thought partnership impact investing
                  program areas invest.Contextualize optimism unprecedented
                  challenge, empower inclusive. Living a fullyethical life the
                  resistance segmentation social intrapreneurship efficient
                  inspireexternal partners. Systems thinking correlation, social
                  impact; when revolutionarybandwidth. Engaging, revolutionary
                  engaging; empower communities policymaker sharedunit of
                  analysis technology inspiring social entrepreneurship.Mass
                  incarceration,preliminary thinking systems thinking vibrant
                  thought leadership corporate socialresponsibility. Green space
                  global, policymaker; shared value disrupt segmentationsocial
                  capital. Thought partnership, optimism citizen-centered
                  commitment, reliefscale and impact the empower communities
                  circular. Contextualize boots on theground; uplift big data,
                  co-creation co-create segmentation youth inspire.
                  Innovateinnovate overcome injustice.
                </p>
                <p>
                  Systems thinking correlation, social impact; when
                  revolutionary bandwidth. Engaging,revolutionary engaging;
                  empower communities policymaker shared unit of
                  analysistechnology inspiring social entrepreneurship. Thought
                  partnership, optimismcitizen-centeredcommitment,relief scale
                  and impact the empower communities circular. Contextualize
                  boots on theground; uplift big data, co-creation co-create
                  segmentation youth inspire. Innovateinnovate overcome
                  injustice.
                </p>
              </div>
            </CardBody>
          </Card>
        </Colxx>

        <Colxx xxs="12" md="12" xl="4" className="col-left">
          <Card className="mb-4">
            <CardBody className="p-0">
              <VideoPlayer
                autoplay={false}
                controls
                controlBar={{
                  pictureInPictureToggle: false,
                }}
                className="video-js side-bar-video card-img-top"
                poster="/assets/img/subpage-video-poster.jpg"
                sources={[
                  {
                    src:
                      'http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_30fps_normal.mp4',
                    type: 'video/mp4',
                  },
                ]}
              />
            </CardBody>
            <CardBody>
              <p className="list-item-heading mb-4">
                Homemade Cheesecake with Fresh Berries and Mint
              </p>
              <footer>
                <p className="text-muted text-small mb-0 font-weight-light">
                  09.04.2018
                </p>
              </footer>
            </CardBody>
          </Card>
          <Card className="mb-4">
            <CardBody>
              <CardTitle>
                <IntlMessages id="pages.recent-posts" />
              </CardTitle>
              {recentPosts.map((blogItem, index) => {
                return (
                  <div
                    className={`d-flex flex-row ${
                      index === recentPosts.length - 1 ? '' : 'mb-3'
                    }`}
                    key={index}
                  >
                    <div>
                      <NavLink to="#" location={{}}>
                        <img
                          src={blogItem.thumb}
                          alt="img caption"
                          className="list-thumbnail border-0"
                        />
                      </NavLink>
                    </div>
                    <div className="pl-3 pt-2 list-item-heading-container">
                      <NavLink to="#" location={{}}>
                        <ResponsiveEllipsis
                          className="list-item-heading"
                          text={blogItem.title}
                          maxLine="3"
                          trimRight
                          basedOn="words"
                          component="h5"
                        />
                      </NavLink>
                    </div>
                  </div>
                );
              })}
            </CardBody>
          </Card>
          <Card className="mb-4">
            <CardBody>
              <CardTitle>
                <IntlMessages id="todo.categories" />
              </CardTitle>
              {blogCategories.map((categoryItem, index) => {
                return (
                  <div
                    className="d-flex flex-row align-items-center mb-3"
                    key={`blogItem${index}`}
                  >
                    <NavLink to={categoryItem.link}>
                      <i
                        className={`large-icon initial-height ${categoryItem.icon}`}
                      />
                    </NavLink>
                    <div className="pl-3 pt-2 pr-2 pb-2">
                      <NavLink to={categoryItem.link}>
                        <p className="list-item-heading mb-1">
                          {categoryItem.title}
                        </p>
                      </NavLink>
                    </div>
                  </div>
                );
              })}
            </CardBody>
          </Card>
        </Colxx>
      </Row>
    </>
  );
};

export default BlogDetail;
