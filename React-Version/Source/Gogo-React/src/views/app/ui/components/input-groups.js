import React from 'react';
import {
  Row,
  Card,
  CardBody,
  CardTitle,
  InputGroup,
  InputGroupAddon,
  Input,
  InputGroupText,
  Button,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  CustomInput,
  UncontrolledDropdown,
} from 'reactstrap';
import { injectIntl } from 'react-intl';
import IntlMessages from '../../../../helpers/IntlMessages';

import {
  Colxx,
  Separator,
} from '../../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../../containers/navs/Breadcrumb';

const InputGroupsUi = ({ intl, match }) => {
  const { messages } = intl;

  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.input-groups" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>

      <Row>
        <Colxx xxs="12">
          <Card className="mb-4">
            <CardBody>
              <CardTitle>
                <IntlMessages id="input-groups.basic" />
              </CardTitle>

              <InputGroup className="mb-3">
                <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                <Input placeholder={messages['user.username']} />
              </InputGroup>

              <InputGroup className="mb-3">
                <Input placeholder={messages['user.username']} />
                <InputGroupAddon addonType="append">
                  @example.com
                </InputGroupAddon>
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroupAddon addonType="prepend">
                  https://example.com/users/
                </InputGroupAddon>
                <Input />
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                <Input type="number" step="1" />
                <InputGroupAddon addonType="append">.00</InputGroupAddon>
              </InputGroup>

              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  With textarea
                </InputGroupAddon>
                <Input type="textarea" name="text" />
              </InputGroup>
            </CardBody>
          </Card>

          <Card className="mb-4">
            <CardBody>
              <CardTitle>
                <IntlMessages id="input-groups.sizing" />
              </CardTitle>

              <InputGroup size="sm" className="mb-3">
                <InputGroupAddon addonType="prepend">
                  <span className="input-group-text">
                    <IntlMessages id="input-groups.small" />
                  </span>
                </InputGroupAddon>
                <Input />
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroupAddon addonType="prepend">
                  <span className="input-group-text">
                    <IntlMessages id="input-groups.default" />
                  </span>
                </InputGroupAddon>
                <Input />
              </InputGroup>

              <InputGroup size="lg">
                <InputGroupAddon addonType="prepend">
                  <span className="input-group-text">
                    <IntlMessages id="input-groups.large" />
                  </span>
                </InputGroupAddon>
                <Input />
              </InputGroup>
            </CardBody>
          </Card>

          <Card className="mb-4">
            <CardBody>
              <CardTitle>
                <IntlMessages id="input-groups.checkboxes-and-radios" />
              </CardTitle>

              <InputGroup className="mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <Input
                      addon
                      type="checkbox"
                      aria-label="Checkbox for following text input"
                    />
                  </InputGroupText>
                </InputGroupAddon>
                <Input />
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <Input
                      addon
                      type="radio"
                      aria-label="Radio for following text input"
                    />
                  </InputGroupText>
                </InputGroupAddon>
                <Input />
              </InputGroup>
            </CardBody>
          </Card>

          <Card className="mb-4">
            <CardBody>
              <CardTitle>
                <IntlMessages id="input-groups.multiple-inputs" />
              </CardTitle>

              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <span className="input-group-text">
                    <IntlMessages id="input-groups.first-and-last-name" />
                  </span>
                </InputGroupAddon>
                <Input />
                <Input />
              </InputGroup>
            </CardBody>
          </Card>

          <Card className="mb-4">
            <CardBody>
              <CardTitle>
                <IntlMessages id="input-groups.multiple-addons" />
              </CardTitle>

              <InputGroup className="mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>$</InputGroupText>
                  <InputGroupText>0.00</InputGroupText>
                </InputGroupAddon>
                <Input />
              </InputGroup>

              <InputGroup>
                <Input />
                <InputGroupAddon addonType="append">
                  <InputGroupText>$</InputGroupText>
                  <InputGroupText>0.00</InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </CardBody>
          </Card>

          <Card className="mb-4">
            <CardBody>
              <CardTitle>
                <IntlMessages id="input-groups.button-addons" />
              </CardTitle>

              <InputGroup className="mb-3">
                <InputGroupAddon addonType="prepend">
                  <Button outline color="secondary">
                    <IntlMessages id="input-groups.button" />
                  </Button>
                </InputGroupAddon>
                <Input />
              </InputGroup>

              <InputGroup className="mb-3">
                <Input />
                <InputGroupAddon addonType="append">
                  <Button outline color="secondary">
                    <IntlMessages id="input-groups.button" />
                  </Button>
                </InputGroupAddon>
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroupAddon addonType="prepend">
                  <Button outline color="secondary">
                    <IntlMessages id="input-groups.button" />
                  </Button>
                  <Button outline color="secondary">
                    <IntlMessages id="input-groups.button" />
                  </Button>
                </InputGroupAddon>
                <Input />
              </InputGroup>

              <InputGroup>
                <Input />
                <InputGroupAddon addonType="append">
                  <Button outline color="secondary">
                    <IntlMessages id="input-groups.button" />
                  </Button>
                  <Button outline color="secondary">
                    <IntlMessages id="input-groups.button" />
                  </Button>
                </InputGroupAddon>
              </InputGroup>
            </CardBody>
          </Card>

          <Card className="mb-4">
            <CardBody>
              <CardTitle>
                <IntlMessages id="input-groups.buttons-with-dropdowns" />
              </CardTitle>
              <InputGroup className="mb-3">
                <UncontrolledDropdown addonType="prepend">
                  <DropdownToggle caret outline color="secondary">
                    <IntlMessages id="input-groups.dropdown" />
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>
                      <IntlMessages id="input-groups.header" />
                    </DropdownItem>
                    <DropdownItem disabled>
                      <IntlMessages id="input-groups.action" />
                    </DropdownItem>
                    <DropdownItem>
                      <IntlMessages id="input-groups.another-action" />
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      <IntlMessages id="input-groups.another-action" />
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <Input />
              </InputGroup>

              <InputGroup className="mb-3">
                <Input />
                <UncontrolledDropdown addonType="append">
                  <DropdownToggle caret outline color="secondary">
                    <IntlMessages id="input-groups.dropdown" />
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>
                      <IntlMessages id="input-groups.header" />
                    </DropdownItem>
                    <DropdownItem disabled>
                      <IntlMessages id="input-groups.action" />
                    </DropdownItem>
                    <DropdownItem>
                      <IntlMessages id="input-groups.another-action" />
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      <IntlMessages id="input-groups.another-action" />
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </InputGroup>
            </CardBody>
          </Card>

          <Card className="mb-4">
            <CardBody>
              <CardTitle>
                <IntlMessages id="input-groups.custom-file-input" />
              </CardTitle>

              <InputGroup className="mb-3">
                <InputGroupAddon addonType="prepend">Upload</InputGroupAddon>
                <CustomInput
                  type="file"
                  id="exampleCustomFileBrowser1"
                  name="customFile"
                />
              </InputGroup>

              <InputGroup className="mb-3">
                <CustomInput
                  type="file"
                  id="exampleCustomFileBrowser2"
                  name="customFile"
                />
                <InputGroupAddon addonType="append">Upload</InputGroupAddon>
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroupAddon addonType="prepend">
                  <Button outline color="secondary">
                    <IntlMessages id="input-groups.button" />
                  </Button>
                </InputGroupAddon>
                <CustomInput
                  type="file"
                  id="exampleCustomFileBrowser3"
                  name="customFile"
                />
              </InputGroup>

              <InputGroup>
                <CustomInput
                  type="file"
                  id="exampleCustomFileBrowser4"
                  name="customFile"
                />
                <InputGroupAddon addonType="append">
                  <Button outline color="secondary">
                    <IntlMessages id="input-groups.button" />
                  </Button>
                </InputGroupAddon>
              </InputGroup>
            </CardBody>
          </Card>
        </Colxx>
      </Row>
    </>
  );
};
export default injectIntl(InputGroupsUi);
