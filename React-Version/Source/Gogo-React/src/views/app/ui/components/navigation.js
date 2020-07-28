import React from 'react';
import {
  Row,
  Card,
  CardBody,
  CardTitle,
  Nav,
  NavItem,
  NavLink,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Pagination,
  PaginationItem,
  PaginationLink,
  Breadcrumb,
  BreadcrumbItem,
} from 'reactstrap';
import IntlMessages from '../../../../helpers/IntlMessages';
import {
  Colxx,
  Separator,
} from '../../../../components/common/CustomBootstrap';

import BreadcrumbContainer from '../../../../containers/navs/Breadcrumb';

const NavigationUi = ({ match }) => {
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <BreadcrumbContainer heading="menu.navigation" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>

      <Row>
        <Colxx xxs="12">
          <Card className="mb-4">
            <CardBody>
              <CardTitle>
                <IntlMessages id="nav.basic" />
              </CardTitle>
              <Nav>
                <NavItem>
                  <NavLink active href="#">
                    <IntlMessages id="nav.active" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                    <IntlMessages id="nav.link" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                    <IntlMessages id="nav.link" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="disabled" href="#">
                    <IntlMessages id="nav.disabled" />
                  </NavLink>
                </NavItem>
              </Nav>
            </CardBody>
          </Card>
        </Colxx>
      </Row>

      <Row>
        <Colxx xxs="12">
          <Card className="mb-4">
            <CardBody>
              <CardTitle>
                <IntlMessages id="nav.horizontal-alignment" />
              </CardTitle>

              <Nav className="justify-content-center">
                <NavItem>
                  <NavLink active href="#">
                    <IntlMessages id="nav.active" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                    <IntlMessages id="nav.link" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                    <IntlMessages id="nav.link" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="disabled" href="#">
                    <IntlMessages id="nav.disabled" />
                  </NavLink>
                </NavItem>
              </Nav>

              <Nav className="justify-content-end">
                <NavItem>
                  <NavLink active href="#">
                    <IntlMessages id="nav.active" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                    <IntlMessages id="nav.link" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                    <IntlMessages id="nav.link" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="disabled" href="#">
                    <IntlMessages id="nav.disabled" />
                  </NavLink>
                </NavItem>
              </Nav>
            </CardBody>
          </Card>
        </Colxx>
      </Row>

      <Row>
        <Colxx xxs="12">
          <Card className="mb-4">
            <CardBody>
              <CardTitle>
                <IntlMessages id="nav.vertical-alignment" />
              </CardTitle>

              <Nav className="flex-column">
                <NavItem>
                  <NavLink active href="#">
                    <IntlMessages id="nav.active" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                    <IntlMessages id="nav.link" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                    <IntlMessages id="nav.link" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="disabled" href="#">
                    <IntlMessages id="nav.disabled" />
                  </NavLink>
                </NavItem>
              </Nav>
            </CardBody>
          </Card>
        </Colxx>
      </Row>

      <Row>
        <Colxx xxs="12">
          <Card className="mb-4">
            <CardBody>
              <CardTitle>
                <IntlMessages id="nav.pills" />
              </CardTitle>

              <Nav className="nav-pills">
                <NavItem>
                  <NavLink active href="#">
                    <IntlMessages id="nav.active" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                    <IntlMessages id="nav.link" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                    <IntlMessages id="nav.link" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="disabled" href="#">
                    <IntlMessages id="nav.disabled" />
                  </NavLink>
                </NavItem>
              </Nav>
            </CardBody>
          </Card>
        </Colxx>
      </Row>

      <Row>
        <Colxx xxs="12">
          <Card className="mb-4">
            <CardBody>
              <CardTitle>
                <IntlMessages id="nav.fill-justify" />
              </CardTitle>

              <Nav pills className="nav-fill">
                <NavItem>
                  <NavLink active href="#">
                    <IntlMessages id="nav.active" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                    <IntlMessages id="nav.longer-link" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                    <IntlMessages id="nav.link" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="disabled" href="#">
                    <IntlMessages id="nav.disabled" />
                  </NavLink>
                </NavItem>
              </Nav>
            </CardBody>
          </Card>
        </Colxx>
      </Row>

      <Row>
        <Colxx xxs="12">
          <Card className="mb-4">
            <CardBody>
              <CardTitle>
                <IntlMessages id="nav.pills-dropdowns" />
              </CardTitle>

              <Nav pills>
                <NavItem>
                  <NavLink href="#" active>
                    <IntlMessages id="nav.link" />
                  </NavLink>
                </NavItem>

                <UncontrolledDropdown nav>
                  <DropdownToggle className="nav-link" caret color="empty">
                    <IntlMessages id="nav.dropdown" />
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>
                      <IntlMessages id="nav.header" />
                    </DropdownItem>
                    <DropdownItem disabled>
                      <IntlMessages id="nav.action" />
                    </DropdownItem>
                    <DropdownItem>
                      <IntlMessages id="nav.another-action" />
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      <IntlMessages id="nav.another-action" />
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>

                <NavItem>
                  <NavLink href="#">
                    <IntlMessages id="nav.link" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                    <IntlMessages id="nav.another-link" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="disabled" href="#">
                    <IntlMessages id="nav.disabled-link" />
                  </NavLink>
                </NavItem>
              </Nav>
            </CardBody>
          </Card>
        </Colxx>
      </Row>

      <Row>
        <Colxx xxs="12">
          <Card className="mb-4">
            <CardBody>
              <CardTitle>
                <IntlMessages id="nav.pagination-basic" />
              </CardTitle>

              <Pagination aria-label="Page navigation example">
                <PaginationItem>
                  <PaginationLink className="first" href="#">
                    <i className="simple-icon-control-start" />
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink className="prev" href="#">
                    <i className="simple-icon-arrow-left" />
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem active>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink className="next" href="#">
                    <i className="simple-icon-arrow-right" />
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink className="last" href="#">
                    <i className="simple-icon-control-end" />
                  </PaginationLink>
                </PaginationItem>
              </Pagination>
            </CardBody>
          </Card>
        </Colxx>
      </Row>

      <Row>
        <Colxx xxs="12">
          <Card className="mb-4">
            <CardBody>
              <CardTitle>
                <IntlMessages id="nav.pagination-sizing" />
              </CardTitle>
              <h6 className="mb-3">
                <IntlMessages id="nav.large" />
              </h6>
              <Pagination size="lg" aria-label="Page navigation example">
                <PaginationItem>
                  <PaginationLink className="first" href="#">
                    <i className="simple-icon-control-start" />
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink className="prev" href="#">
                    <i className="simple-icon-arrow-left" />
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem active>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem disabled>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink className="next" href="#">
                    <i className="simple-icon-arrow-right" />
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink className="last" href="#">
                    <i className="simple-icon-control-end" />
                  </PaginationLink>
                </PaginationItem>
              </Pagination>

              <h6 className="mb-3">
                <IntlMessages id="nav.small" />
              </h6>
              <Pagination size="sm" aria-label="Page navigation example">
                <PaginationItem>
                  <PaginationLink className="first" href="#">
                    <i className="simple-icon-control-start" />
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink className="prev" href="#">
                    <i className="simple-icon-arrow-left" />
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem active>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem disabled>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink className="next" href="#">
                    <i className="simple-icon-arrow-right" />
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink className="last" href="#">
                    <i className="simple-icon-control-end" />
                  </PaginationLink>
                </PaginationItem>
              </Pagination>
            </CardBody>
          </Card>
        </Colxx>
      </Row>

      <Row>
        <Colxx xxs="12">
          <Card className="mb-4">
            <CardBody>
              <CardTitle>
                <IntlMessages id="nav.pagination-alignment" />
              </CardTitle>
              <h6 className="mb-3">
                <IntlMessages id="nav.center" />
              </h6>
              <Pagination
                size="sm"
                aria-label="Page navigation example"
                listClassName="justify-content-center"
              >
                <PaginationItem>
                  <PaginationLink className="first" href="#">
                    <i className="simple-icon-control-start" />
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink className="prev" href="#">
                    <i className="simple-icon-arrow-left" />
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem active>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink className="next" href="#">
                    <i className="simple-icon-arrow-right" />
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink className="last" href="#">
                    <i className="simple-icon-control-end" />
                  </PaginationLink>
                </PaginationItem>
              </Pagination>

              <h6 className="mb-3">
                <IntlMessages id="nav.right" />
              </h6>
              <Pagination
                size="sm"
                aria-label="Page navigation example"
                listClassName="justify-content-end"
              >
                <PaginationItem>
                  <PaginationLink className="first" href="#">
                    <i className="simple-icon-control-start" />
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink className="prev" href="#">
                    <i className="simple-icon-arrow-left" />
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem active>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem disabled>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink className="next" href="#">
                    <i className="simple-icon-arrow-right" />
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink className="last" href="#">
                    <i className="simple-icon-control-end" />
                  </PaginationLink>
                </PaginationItem>
              </Pagination>
            </CardBody>
          </Card>
        </Colxx>
      </Row>

      <Row>
        <Colxx xxs="12">
          <Card className="mb-4">
            <CardBody>
              <CardTitle>
                <IntlMessages id="nav.breadcrumb-basic" />
              </CardTitle>
              <Breadcrumb>
                <BreadcrumbItem active>Home</BreadcrumbItem>
              </Breadcrumb>
              <Breadcrumb>
                <BreadcrumbItem>
                  <a href="#/">Home</a>
                </BreadcrumbItem>
                <BreadcrumbItem active>Library</BreadcrumbItem>
              </Breadcrumb>
              <Breadcrumb>
                <BreadcrumbItem>
                  <a href="#/">Home</a>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <a href="#/">Library</a>
                </BreadcrumbItem>
                <BreadcrumbItem active>Data</BreadcrumbItem>
              </Breadcrumb>
            </CardBody>
          </Card>
        </Colxx>
      </Row>
    </>
  );
};

export default NavigationUi;
