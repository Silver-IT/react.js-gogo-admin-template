import React, { useState } from 'react';
import {
  Button,
  ButtonGroup,
  ButtonToolbar,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ButtonDropdown,
  Row,
  Card,
  CardBody,
  CardTitle,
} from 'reactstrap';

import IntlMessages from '../../../../helpers/IntlMessages';
import {
  Colxx,
  Separator,
} from '../../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../../containers/navs/Breadcrumb';
import StateButtonExample from '../../../../containers/ui/StateButtonExample';

const ButtonsUi = ({ match }) => {
  const [nestingDropdownOpen, setNestingDropdownOpen] = useState(false);
  const [checkedCheckboxes, setCheckedCheckboxes] = useState([]);
  const [selectedRadio, setSelectedRadio] = useState(0);

  const checkButtonCheck = (i) => {
    const checkedItems = [...checkedCheckboxes];
    const index = checkedItems.indexOf(i);
    if (index === -1) {
      checkedItems.push(i);
    } else {
      checkedItems.splice(index, 1);
    }
    setCheckedCheckboxes(checkedItems);
  };

  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.buttons" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" className="mb-4">
          <Card>
            <CardBody>
              <CardTitle>
                <IntlMessages id="button.rounded" />
              </CardTitle>
              <Button color="primary" className="mb-2">
                <IntlMessages id="button.primary" />
              </Button>{' '}
              <Button color="secondary" className="mb-2">
                <IntlMessages id="button.secondary" />
              </Button>{' '}
              <Button color="success" className="mb-2">
                <IntlMessages id="button.success" />
              </Button>{' '}
              <Button color="info" className="mb-2">
                <IntlMessages id="button.info" />
              </Button>{' '}
              <Button color="warning" className="mb-2">
                <IntlMessages id="button.warning" />
              </Button>{' '}
              <Button color="danger" className="mb-2">
                <IntlMessages id="button.danger" />
              </Button>{' '}
              <Button color="light" className="mb-2">
                <IntlMessages id="button.light" />
              </Button>{' '}
              <Button color="dark" className="mb-2">
                <IntlMessages id="button.dark" />
              </Button>
            </CardBody>
          </Card>
        </Colxx>

        <Colxx xxs="12" className="mb-4">
          <Card>
            <CardBody>
              <CardTitle>
                <IntlMessages id="button.outline" />
              </CardTitle>
              <Button outline color="primary" className="mb-2">
                <IntlMessages id="button.primary" />
              </Button>{' '}
              <Button outline color="secondary" className="mb-2">
                <IntlMessages id="button.secondary" />
              </Button>{' '}
              <Button outline color="success" className="mb-2">
                <IntlMessages id="button.success" />
              </Button>{' '}
              <Button outline color="info" className="mb-2">
                <IntlMessages id="button.info" />
              </Button>{' '}
              <Button outline color="warning" className="mb-2">
                <IntlMessages id="button.warning" />
              </Button>{' '}
              <Button outline color="danger" className="mb-2">
                <IntlMessages id="button.danger" />
              </Button>{' '}
              <Button outline color="light" className="mb-2">
                <IntlMessages id="button.light" />
              </Button>{' '}
              <Button outline color="dark" className="mb-2">
                <IntlMessages id="button.dark" />
              </Button>
            </CardBody>
          </Card>
        </Colxx>

        <StateButtonExample />

        <Colxx xxs="12" className="mb-4">
          <Card>
            <CardBody>
              <CardTitle>
                <IntlMessages id="button.sizes" />
              </CardTitle>
              <div className="mb-4">
                <h6 className="mb-2">
                  <IntlMessages id="button.large-button" />
                </h6>
                <Button color="primary" size="lg" className="mb-2">
                  <IntlMessages id="button.large-button" />
                </Button>{' '}
                <Button color="secondary" size="lg" className="mb-2">
                  <IntlMessages id="button.large-button" />
                </Button>
              </div>
              <div className="mb-4">
                <h6 className="mb-2">
                  <IntlMessages id="button.small-button" />
                </h6>
                <Button color="primary" size="sm" className="mb-2">
                  <IntlMessages id="button.small-button" />
                </Button>{' '}
                <Button color="secondary" size="sm" className="mb-2">
                  <IntlMessages id="button.small-button" />
                </Button>
              </div>
              <div className="mb-4">
                <h6 className="mb-2">
                  <IntlMessages id="button.extra-small-button" />
                </h6>
                <Button color="primary" size="xs" className="mb-2">
                  <IntlMessages id="button.extra-small-button" />
                </Button>{' '}
                <Button color="secondary" size="xs" className="mb-2">
                  <IntlMessages id="button.extra-small-button" />
                </Button>
              </div>
              <div className="mb-4">
                <h6 className="mb-2">
                  <IntlMessages id="button.block-button" />
                </h6>
                <Button color="primary" block className="mb-2">
                  <IntlMessages id="button.block-button" />
                </Button>{' '}
                <Button color="secondary" block className="mb-2">
                  <IntlMessages id="button.block-button" />
                </Button>
              </div>
            </CardBody>
          </Card>
        </Colxx>

        <Colxx xxs="12" className="mb-4">
          <Card>
            <CardBody>
              <CardTitle>
                <IntlMessages id="button.states" />
              </CardTitle>
              <div className="mb-4">
                <h6 className="mb-2">
                  <IntlMessages id="button.active" />
                </h6>
                <Button color="primary" href="#" className="mb-2">
                  <IntlMessages id="button.primary-link" />
                </Button>{' '}
                <Button color="secondary" href="#" className="mb-2">
                  <IntlMessages id="button.link" />
                </Button>
              </div>
              <div className="mb-4">
                <h6 className="mb-2">
                  <IntlMessages id="button.disabled" />
                </h6>
                <Button color="primary" disabled className="mb-2">
                  <IntlMessages id="button.primary-button" />
                </Button>{' '}
                <Button color="secondary" disabled className="mb-2">
                  <IntlMessages id="button.button" />
                </Button>
              </div>
            </CardBody>
          </Card>
        </Colxx>

        <Colxx xxs="12" className="mb-4">
          <Card>
            <CardBody>
              <CardTitle>
                <IntlMessages id="button.button-groups" />
              </CardTitle>
              <div className="mb-4">
                <h6 className="mb-2">
                  <IntlMessages id="button.basic" />
                </h6>
                <ButtonGroup className="mb-2">
                  <Button color="primary">
                    <IntlMessages id="button.left" />
                  </Button>
                  <Button color="primary">
                    <IntlMessages id="button.middle" />
                  </Button>
                  <Button color="primary">
                    <IntlMessages id="button.right" />
                  </Button>
                </ButtonGroup>
              </div>
              <div className="mb-4">
                <h6 className="mb-2">
                  <IntlMessages id="button.toolbar" />
                </h6>
                <ButtonToolbar>
                  <ButtonGroup className="mb-2 mr-1">
                    <Button color="primary">1</Button>
                    <Button color="primary">2</Button>
                    <Button color="primary">3</Button>
                    <Button color="primary">4</Button>
                  </ButtonGroup>
                  <ButtonGroup className="mb-2 mr-1">
                    <Button color="primary">5</Button>
                    <Button color="primary">6</Button>
                    <Button color="primary">7</Button>
                  </ButtonGroup>
                  <ButtonGroup className="mb-2">
                    <Button color="primary">8</Button>
                  </ButtonGroup>
                </ButtonToolbar>
              </div>
              <div className="mb-4">
                <h6 className="mb-2">
                  <IntlMessages id="button.sizes" />
                </h6>
                <ButtonGroup size="lg" className="mb-2 mr-1">
                  <Button color="primary">1</Button>
                  <Button color="primary">2</Button>
                </ButtonGroup>
                <ButtonGroup className="mb-2 mr-1">
                  <Button color="primary">1</Button>
                  <Button color="primary">2</Button>
                  <Button color="primary">3</Button>
                </ButtonGroup>
                <ButtonGroup size="sm" className="mb-2">
                  <Button color="primary">1</Button>
                  <Button color="primary">2</Button>
                  <Button color="primary">3</Button>
                </ButtonGroup>
              </div>
            </CardBody>
          </Card>
        </Colxx>

        <Colxx xxs="12" className="mb-4">
          <Card>
            <CardBody>
              <CardTitle>
                <IntlMessages id="button.nesting" />
              </CardTitle>
              <ButtonGroup className="mb-2">
                <Button>1</Button>
                <Button>2</Button>
                <ButtonDropdown
                  isOpen={nestingDropdownOpen}
                  toggle={() => setNestingDropdownOpen(!nestingDropdownOpen)}
                >
                  <DropdownToggle caret>
                    <IntlMessages id="button.dropdown" />
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>
                      <IntlMessages id="button.dropdown-link" />
                    </DropdownItem>
                    <DropdownItem>
                      <IntlMessages id="button.dropdown-link" />
                    </DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
              </ButtonGroup>
            </CardBody>
          </Card>
        </Colxx>

        <Colxx xxs="12" className="mb-4">
          <Card>
            <CardBody>
              <CardTitle>
                <IntlMessages id="button.checkbox-radio-button" />
              </CardTitle>
              <div className="mb-4">
                <h6 className="mb-2">
                  <IntlMessages id="button.checkbox" />
                </h6>
                <ButtonGroup>
                  <Button
                    className="mb-2"
                    color="primary"
                    onClick={() => checkButtonCheck(1)}
                    active={checkedCheckboxes.includes(1)}
                  >
                    <IntlMessages id="button.checkbox" />
                  </Button>
                  <br />
                  <Button
                    color="primary"
                    className="mb-2"
                    onClick={() => checkButtonCheck(2)}
                    active={checkedCheckboxes.includes(2)}
                  >
                    <IntlMessages id="button.checkbox" />
                  </Button>
                </ButtonGroup>
              </div>
              <div className="mb-4">
                <h6 className="mb-2">
                  <IntlMessages id="button.radio-button" />
                </h6>
                <ButtonGroup>
                  <Button
                    color="primary"
                    onClick={() => setSelectedRadio(1)}
                    active={selectedRadio === 1}
                  >
                    <IntlMessages id="button.radio" />
                  </Button>
                  <Button
                    color="primary"
                    onClick={() => setSelectedRadio(2)}
                    active={selectedRadio === 2}
                  >
                    <IntlMessages id="button.radio" />
                  </Button>
                  <Button
                    color="primary"
                    onClick={() => setSelectedRadio(3)}
                    active={selectedRadio === 3}
                  >
                    <IntlMessages id="button.radio" />
                  </Button>
                </ButtonGroup>
              </div>
            </CardBody>
          </Card>
        </Colxx>

        <Colxx xxs="12" className="mb-4">
          <Card>
            <CardBody>
              <CardTitle>
                <IntlMessages id="button.default" />
              </CardTitle>
              <Button color="primary" className="default mb-2">
                <IntlMessages id="button.primary" />
              </Button>{' '}
              <Button color="secondary" className="default mb-2">
                <IntlMessages id="button.secondary" />
              </Button>{' '}
              <Button color="success" className="default mb-2">
                <IntlMessages id="button.success" />
              </Button>{' '}
              <Button color="info" className="default mb-2">
                <IntlMessages id="button.info" />
              </Button>{' '}
              <Button color="warning" className="default mb-2">
                <IntlMessages id="button.warning" />
              </Button>{' '}
              <Button color="danger" className="default mb-2">
                <IntlMessages id="button.danger" />
              </Button>{' '}
              <Button color="light" className="default mb-2">
                <IntlMessages id="button.light" />
              </Button>{' '}
              <Button color="dark" className="default mb-2">
                <IntlMessages id="button.dark" />
              </Button>
            </CardBody>
          </Card>
        </Colxx>
      </Row>
    </>
  );
};
export default ButtonsUi;
