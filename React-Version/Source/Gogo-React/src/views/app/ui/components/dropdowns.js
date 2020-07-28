import React, { useState } from 'react';
import {
  Row,
  Card,
  CardBody,
  CardTitle,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  ButtonDropdown,
  Button,
  CardSubtitle,
  UncontrolledDropdown,
} from 'reactstrap';
import {
  Colxx,
  Separator,
} from '../../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../../containers/navs/Breadcrumb';
import IntlMessages from '../../../../helpers/IntlMessages';

const DropDownsUi = ({ match }) => {
  const [dropdownBasicOpen, setDropdownBasicOpen] = useState(false);
  const [dropdownSplitOpen, setDropdownSplitOpen] = useState(false);
  const [isOpenSizingLg, setIsOpenSizingLg] = useState(false);
  const [isOpenSizingSm, setIsOpenSizingSm] = useState(false);
  const [isOpenSizingXs, setIsOpenSizingXs] = useState(false);
  const [btnDropUp, setBtnDropUp] = useState(false);
  const [btnDropLeft, setBtnDropLeft] = useState(false);
  const [btnDropRight, setBtnDropRight] = useState(false);

  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.dropdowns" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row className="mb-4">
        <Colxx xxs="12">
          <Card>
            <CardBody>
              <CardTitle>
                <IntlMessages id="dropdowns.basic" />
              </CardTitle>
              <CardSubtitle>
                <IntlMessages id="dropdowns.controlled" />
              </CardSubtitle>
              <Dropdown
                isOpen={dropdownBasicOpen}
                toggle={() => setDropdownBasicOpen(!dropdownBasicOpen)}
                className="mb-5"
              >
                <DropdownToggle caret color="secondary" outline>
                  <IntlMessages id="dropdowns.dropdown" />
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem header>
                    <IntlMessages id="dropdowns.header" />
                  </DropdownItem>
                  <DropdownItem disabled>
                    <IntlMessages id="dropdowns.action" />
                  </DropdownItem>
                  <DropdownItem>
                    <IntlMessages id="dropdowns.another-action" />
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <IntlMessages id="dropdowns.another-action" />
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>

              <CardSubtitle>
                <IntlMessages id="dropdowns.uncontrolled" />
              </CardSubtitle>
              <UncontrolledDropdown>
                <DropdownToggle caret color="secondary" outline>
                  <IntlMessages id="dropdowns.dropdown" />
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem header>
                    <IntlMessages id="dropdowns.header" />
                  </DropdownItem>
                  <DropdownItem disabled>
                    <IntlMessages id="dropdowns.action" />
                  </DropdownItem>
                  <DropdownItem>
                    <IntlMessages id="dropdowns.another-action" />
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <IntlMessages id="dropdowns.another-action" />
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </CardBody>
          </Card>
        </Colxx>
      </Row>

      <Row className="mb-4">
        <Colxx xxs="12">
          <Card>
            <CardBody>
              <CardTitle>
                <IntlMessages id="dropdowns.split-button" />
              </CardTitle>
              <ButtonDropdown
                isOpen={dropdownSplitOpen}
                toggle={() => setDropdownSplitOpen(!dropdownSplitOpen)}
              >
                <Button color="secondary">
                  <IntlMessages id="dropdowns.action" />
                </Button>
                <DropdownToggle caret color="secondary" />
                <DropdownMenu>
                  <DropdownItem header>
                    <IntlMessages id="dropdowns.header" />
                  </DropdownItem>
                  <DropdownItem disabled>
                    <IntlMessages id="dropdowns.action" />
                  </DropdownItem>
                  <DropdownItem>
                    <IntlMessages id="dropdowns.another-action" />
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <IntlMessages id="dropdowns.another-action" />
                  </DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            </CardBody>
          </Card>
        </Colxx>
      </Row>

      <Row className="mb-4">
        <Colxx xxs="12">
          <Card>
            <CardBody>
              <CardTitle>
                <IntlMessages id="dropdowns.sizing" />
              </CardTitle>
              <ButtonDropdown
                className="mr-1 mb-1"
                isOpen={isOpenSizingLg}
                toggle={() => setIsOpenSizingLg(!isOpenSizingLg)}
              >
                <DropdownToggle caret size="lg" outline color="info">
                  <IntlMessages id="dropdowns.large-button" />
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <IntlMessages id="dropdowns.another-action" />
                  </DropdownItem>
                  <DropdownItem>
                    <IntlMessages id="dropdowns.another-action" />
                  </DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>

              <ButtonDropdown
                className="mr-1 mb-1"
                isOpen={isOpenSizingSm}
                toggle={() => setIsOpenSizingSm(!isOpenSizingSm)}
              >
                <DropdownToggle caret size="sm" outline color="info">
                  <IntlMessages id="dropdowns.small-button" />
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <IntlMessages id="dropdowns.another-action" />
                  </DropdownItem>
                  <DropdownItem>
                    <IntlMessages id="dropdowns.another-action" />
                  </DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>

              <ButtonDropdown
                className="mr-1 mb-1"
                isOpen={isOpenSizingXs}
                toggle={() => setIsOpenSizingXs(!isOpenSizingXs)}
              >
                <DropdownToggle caret size="xs" outline color="info">
                  <IntlMessages id="dropdowns.small-button" />
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <IntlMessages id="dropdowns.another-action" />
                  </DropdownItem>
                  <DropdownItem>
                    <IntlMessages id="dropdowns.another-action" />
                  </DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            </CardBody>
          </Card>
        </Colxx>
      </Row>

      <Row className="mb-4">
        <Colxx xxs="12">
          <Card>
            <CardBody>
              <CardTitle>
                <IntlMessages id="dropdowns.drop-directions" />
              </CardTitle>
              <ButtonDropdown
                direction="up"
                className="mr-1 mb-5"
                isOpen={btnDropUp}
                toggle={() => setBtnDropUp(!btnDropUp)}
              >
                <DropdownToggle caret>
                  <IntlMessages id="dropdowns.dropup" />
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <IntlMessages id="dropdowns.another-action" />
                  </DropdownItem>
                  <DropdownItem>
                    <IntlMessages id="dropdowns.another-action" />
                  </DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>

              <ButtonDropdown
                direction="left"
                className="mr-1 mb-5"
                isOpen={btnDropLeft}
                toggle={() => setBtnDropLeft(!btnDropLeft)}
              >
                <DropdownToggle caret>
                  <IntlMessages id="dropdowns.dropleft" />
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <IntlMessages id="dropdowns.another-action" />
                  </DropdownItem>
                  <DropdownItem>
                    <IntlMessages id="dropdowns.another-action" />
                  </DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>

              <ButtonDropdown
                direction="right"
                className="mr-1 mb-5"
                isOpen={btnDropRight}
                toggle={() => setBtnDropRight(!btnDropRight)}
              >
                <DropdownToggle caret>
                  <IntlMessages id="dropdowns.dropright" />
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <IntlMessages id="dropdowns.another-action" />
                  </DropdownItem>
                  <DropdownItem>
                    <IntlMessages id="dropdowns.another-action" />
                  </DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            </CardBody>
          </Card>
        </Colxx>
      </Row>

      <Row className="mb-4">
        <Colxx xxs="12">
          <Card>
            <CardBody>
              <CardTitle>
                <IntlMessages id="dropdowns.drop-directions" />
              </CardTitle>
              <CardSubtitle>
                <IntlMessages id="dropdowns.left" />
              </CardSubtitle>
              <UncontrolledDropdown className="mb-5">
                <DropdownToggle caret color="secondary" outline>
                  <IntlMessages id="dropdowns.dropdown" />
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem header>
                    <IntlMessages id="dropdowns.header" />
                  </DropdownItem>
                  <DropdownItem disabled>
                    <IntlMessages id="dropdowns.action" />
                  </DropdownItem>
                  <DropdownItem>
                    <IntlMessages id="dropdowns.another-action" />
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <IntlMessages id="dropdowns.another-action" />
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <CardSubtitle>
                <IntlMessages id="dropdowns.right" />
              </CardSubtitle>

              <UncontrolledDropdown>
                <DropdownToggle caret color="secondary" outline>
                  <IntlMessages id="dropdowns.dropdown" />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem header>
                    <IntlMessages id="dropdowns.header" />
                  </DropdownItem>
                  <DropdownItem disabled>
                    <IntlMessages id="dropdowns.action" />
                  </DropdownItem>
                  <DropdownItem>
                    <IntlMessages id="dropdowns.another-action" />
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <IntlMessages id="dropdowns.another-action" />
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </CardBody>
          </Card>
        </Colxx>
      </Row>
    </>
  );
};
export default DropDownsUi;
