/* eslint-disable no-param-reassign */
import React from 'react';
import { Card, CardBody, Row } from 'reactstrap';
import { Wizard, Steps, Step } from 'react-albus';
import { injectIntl } from 'react-intl';
import IntlMessages from '../../helpers/IntlMessages';
import BottomNavigation from '../../components/wizard/BottomNavigation';
import TopNavigation from '../../components/wizard/TopNavigation';
import { Colxx } from '../../components/common/CustomBootstrap';

const Layouts = ({ intl }) => {
  const topNavClick = (stepItem, push) => {
    push(stepItem.id);
  };

  const onClickNext = (goToNext, steps, step) => {
    step.isDone = true;
    if (steps.length - 1 <= steps.indexOf(step)) {
      return;
    }
    goToNext();
  };

  const onClickPrev = (goToPrev, steps, step) => {
    if (steps.indexOf(step) <= 0) {
      return;
    }
    goToPrev();
  };

  const { messages } = intl;
  return (
    <Row>
      <Colxx xxs="12" xl="6" className="mb-5">
        <Card>
          <CardBody className="wizard wizard-default">
            <Wizard>
              <TopNavigation
                className="justify-content-between"
                disableNav={false}
                topNavClick={topNavClick}
              />
              <Steps>
                <Step
                  id="step1"
                  name={messages['wizard.step-name-1']}
                  desc={messages['wizard.step-desc-1']}
                >
                  <div className="wizard-basic-step text-center">
                    <p>
                      <IntlMessages id="wizard.content-1" />
                    </p>
                  </div>
                </Step>
                <Step
                  id="step2"
                  name={messages['wizard.step-name-2']}
                  desc={messages['wizard.step-desc-2']}
                >
                  <div className="wizard-basic-step text-center">
                    <p>
                      <IntlMessages id="wizard.content-2" />
                    </p>
                  </div>
                </Step>
                <Step
                  id="step3"
                  name={messages['wizard.step-name-3']}
                  desc={messages['wizard.step-desc-3']}
                  hideTopNav
                >
                  <div className="wizard-basic-step text-center">
                    <h2 className="mb-2">
                      <IntlMessages id="wizard.content-thanks" />
                    </h2>
                    <p>
                      <IntlMessages id="wizard.content-3" />
                    </p>
                  </div>
                </Step>
              </Steps>
              <BottomNavigation
                onClickNext={onClickNext}
                onClickPrev={onClickPrev}
                className="justify-content-between"
                prevLabel={messages['wizard.prev']}
                nextLabel={messages['wizard.next']}
              />
            </Wizard>
          </CardBody>
        </Card>
      </Colxx>
      <Colxx xxs="12" xl="6">
        <Card>
          <CardBody className="wizard wizard-default">
            <Wizard>
              <TopNavigation
                className="justify-content-start"
                disableNav={false}
                topNavClick={topNavClick}
              />
              <Steps>
                <Step
                  id="step1"
                  name={messages['wizard.step-name-1']}
                  desc={messages['wizard.step-desc-1']}
                >
                  <div className="wizard-basic-step">
                    <p>
                      <IntlMessages id="wizard.content-1" />
                    </p>
                  </div>
                </Step>
                <Step
                  id="step2"
                  name={messages['wizard.step-name-2']}
                  desc={messages['wizard.step-desc-2']}
                >
                  <div className="wizard-basic-step">
                    <p>
                      <IntlMessages id="wizard.content-2" />
                    </p>
                  </div>
                </Step>
                <Step
                  id="step3"
                  name={messages['wizard.step-name-3']}
                  desc={messages['wizard.step-desc-3']}
                  hideTopNav
                >
                  <div className="wizard-basic-step">
                    <h2 className="mb-2">
                      <IntlMessages id="wizard.content-thanks" />
                    </h2>
                    <p>
                      <IntlMessages id="wizard.content-3" />
                    </p>
                  </div>
                </Step>
              </Steps>
              <BottomNavigation
                onClickNext={onClickNext}
                onClickPrev={onClickPrev}
                className="justify-content-start"
                prevLabel={messages['wizard.prev']}
                nextLabel={messages['wizard.next']}
              />
            </Wizard>
          </CardBody>
        </Card>
      </Colxx>
    </Row>
  );
};
export default injectIntl(Layouts);
