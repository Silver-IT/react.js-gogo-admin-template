import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import {
  Row,
  Nav,
  NavItem,
  Button,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  TabContent,
  TabPane,
  ButtonDropdown,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

import IntlMessages from '../../../helpers/IntlMessages';
import { Colxx } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import QuestionBuilder from '../../../containers/applications/QuestionBuilder';
import {
  getSurveyDetail,
  deleteSurveyQuestion,
  saveSurvey,
} from '../../../redux/actions';
import SurveyQuotas from '../../../containers/applications/SurveyQuotas';
import SurveyCharts from '../../../containers/applications/SurveyCharts';
import SurveyDetailApplicationMenu from '../../../containers/applications/SurveyDetailApplicationMenu';
import SurveyDetailCard from '../../../components/applications/SurveyDetailCard';

const SurveyDetailApp = ({
  match,
  survey,
  loading,
  getSurveyDetailAction,
  deleteSurveyQuestionAction,
  saveSurveyAction,
}) => {
  const [activeTab, setActiveTab] = useState('details');
  const [dropdownSplitOpen, setDropdownSplitOpen] = useState(false);

  useEffect(() => {
    document.body.classList.add('right-menu');
    getSurveyDetailAction();

    return () => {
      document.body.classList.remove('right-menu');
    };
  }, [getSurveyDetailAction]);

  const addQuestion = () => {
    let nextId = 0;
    if (survey.questions.length > 0) {
      const ordered = survey.questions.slice().sort((a, b) => {
        return a.id < b.id;
      });
      nextId = ordered[0].id + 1;
    }
    const newSurvey = { ...survey };
    newSurvey.questions.push({ id: nextId });
    saveSurveyAction(newSurvey);
  };

  return (
    <>
      <Row className="app-row survey-app">
        <Colxx xxs="12">
          <h1>
            <i className="simple-icon-refresh heading-icon" />{' '}
            <span className="align-middle d-inline-block pt-1">
              Developer Survey
            </span>
          </h1>
          <div className="text-zero top-right-button-container">
            <ButtonDropdown
              className="top-right-button top-right-button-single"
              isOpen={dropdownSplitOpen}
              toggle={() => setDropdownSplitOpen(!dropdownSplitOpen)}
            >
              <Button outline className="flex-grow-1" size="lg" color="primary">
                SAVE
              </Button>
              <DropdownToggle
                size="lg"
                className="dropdown-toggle-split btn-lg"
                caret
                outline
                color="primary"
              />
              <DropdownMenu right>
                <DropdownItem>
                  <IntlMessages id="survey.delete" />
                </DropdownItem>
                <DropdownItem disabled>
                  <IntlMessages id="survey.edit" />
                </DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </div>

          <Breadcrumb match={match} />
          {loading ? (
            <>
              <Nav tabs className="separator-tabs ml-0 mb-5">
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: activeTab === 'details',
                      'nav-link': true,
                    })}
                    location={{}}
                    to="#"
                    onClick={() => setActiveTab('details')}
                  >
                    DETAILS
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    location={{}}
                    to="#"
                    className={classnames({
                      active: activeTab === 'results',
                      'nav-link': true,
                    })}
                    onClick={() => setActiveTab('results')}
                  >
                    RESULTS
                  </NavLink>
                </NavItem>
              </Nav>

              <TabContent activeTab={activeTab}>
                <TabPane tabId="details">
                  <Row>
                    <SurveyDetailCard survey={survey} />

                    <Colxx xxs="12" lg="8">
                      <ul className="list-unstyled mb-4">
                        {survey.questions.map((item, index) => {
                          return (
                            <li data-id={item.id} key={item.id}>
                              <QuestionBuilder
                                order={index}
                                {...item}
                                expanded={!item.title && true}
                                deleteClick={(id) =>
                                  deleteSurveyQuestionAction(id, survey)
                                }
                              />
                            </li>
                          );
                        })}
                      </ul>

                      <div className="text-center">
                        <Button
                          outline
                          color="primary"
                          className="mt-3"
                          onClick={() => addQuestion()}
                        >
                          <i className="simple-icon-plus btn-group-icon" /> Add
                          Question
                        </Button>
                      </div>
                    </Colxx>
                  </Row>
                </TabPane>
                <TabPane tabId="results">
                  <Row>
                    <SurveyQuotas />
                    <SurveyCharts />
                  </Row>
                </TabPane>
              </TabContent>
            </>
          ) : (
            <div className="loading" />
          )}
        </Colxx>
      </Row>
      <SurveyDetailApplicationMenu />
    </>
  );
};

const mapStateToProps = ({ surveyDetailApp }) => {
  const { survey, loading } = surveyDetailApp;
  return { survey, loading };
};
export default connect(mapStateToProps, {
  getSurveyDetailAction: getSurveyDetail,
  deleteSurveyQuestionAction: deleteSurveyQuestion,
  saveSurveyAction: saveSurvey,
})(SurveyDetailApp);
