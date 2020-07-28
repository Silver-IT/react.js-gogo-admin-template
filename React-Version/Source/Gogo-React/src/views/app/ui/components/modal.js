import React, { useState } from 'react';
import {
  Row,
  Card,
  CardBody,
  CardTitle,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Input,
  Label,
} from 'reactstrap';
import IntlMessages from '../../../../helpers/IntlMessages';
import {
  Colxx,
  Separator,
} from '../../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../../containers/navs/Breadcrumb';

const ModalUi = ({ match }) => {
  const [modalBasic, setModalBasic] = useState(false);
  const [modalLong, setModalLong] = useState(false);
  const [modalBack, setModalBack] = useState(false);
  const [backdrop, setBackdrop] = useState(true);
  const [modalRight, setModalRight] = useState(false);
  const [modalNestedContainer, setModalNestedContainer] = useState(false);
  const [modalNested, setModalNested] = useState(false);
  const [closeAll, setCloseAll] = useState(false);
  const [modalLarge, setModalLarge] = useState(false);
  const [modalSmall, setModalSmall] = useState(false);

  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.modal" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>

      <Row>
        <Colxx xxs="12">
          <Card className="mb-4">
            <CardBody>
              <CardTitle>
                <IntlMessages id="modal.basic" />
              </CardTitle>
              <div>
                <Button
                  color="primary"
                  outline
                  onClick={() => setModalBasic(true)}
                >
                  <IntlMessages id="modal.launch-demo-modal" />
                </Button>
                <Modal
                  isOpen={modalBasic}
                  toggle={() => setModalBasic(!modalBasic)}
                >
                  <ModalHeader>
                    <IntlMessages id="modal.modal-title" />
                  </ModalHeader>
                  <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      color="primary"
                      onClick={() => setModalBasic(false)}
                    >
                      Do Something
                    </Button>{' '}
                    <Button
                      color="secondary"
                      onClick={() => setModalBasic(false)}
                    >
                      Cancel
                    </Button>
                  </ModalFooter>
                </Modal>
              </div>
            </CardBody>
          </Card>

          <Card className="mb-4">
            <CardBody>
              <CardTitle>
                <IntlMessages id="modal.scrolling-long-content" />
              </CardTitle>
              <div>
                <Button
                  color="primary"
                  outline
                  onClick={() => setModalLong(true)}
                >
                  <IntlMessages id="modal.launch-demo-modal" />
                </Button>
                <Modal
                  isOpen={modalLong}
                  toggle={() => setModalLong(!modalLong)}
                >
                  <ModalHeader>Modal title</ModalHeader>
                  <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce in ex imperdiet magna dignissim porta in vel ipsum.
                    Cras et lectus vel magna eleifend faucibus. Proin aliquam
                    fermentum lacus, sit amet molestie ante aliquet nec. Nunc
                    interdum, ante non lobortis feugiat, quam quam ornare nunc,
                    tempus dictum neque odio sed augue. Suspendisse tincidunt
                    tristique laoreet. Orci varius natoque penatibus et magnis
                    dis parturient montes, nascetur ridiculus mus. Aenean
                    condimentum est sit amet justo semper molestie. Integer
                    placerat nulla id tortor molestie, sed laoreet est ornare.
                    Morbi non velit nec purus accumsan commodo et sed nisi.
                    Maecenas sit amet purus scelerisque neque luctus congue.
                    <br /> Nam consequat nunc neque, nec bibendum ante mollis
                    nec. Cras porta ante a ex condimentum imperdiet. Cras
                    vehicula velit in erat semper, sed bibendum ligula vehicula.
                    Fusce hendrerit orci arcu, ut posuere dui volutpat at.
                    Vivamus condimentum porttitor ultricies. Quisque at metus
                    sit amet ipsum convallis lacinia. Nulla elementum ligula
                    eget velit viverra condimentum. Vestibulum pulvinar enim
                    mattis pharetra tristique. Donec hendrerit vitae lorem at
                    malesuada. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Nulla a diam eu sem gravida ultrices.
                    <br /> Nam consequat nunc neque, nec bibendum ante mollis
                    nec. Cras porta ante a ex condimentum imperdiet. Cras
                    vehicula velit in erat semper, sed bibendum ligula vehicula.
                    Fusce hendrerit orci arcu, ut posuere dui volutpat at.
                    Vivamus condimentum porttitor ultricies. Quisque at metus
                    sit amet ipsum convallis lacinia. Nulla elementum ligula
                    eget velit viverra condimentum. Vestibulum pulvinar enim
                    mattis pharetra tristique. Donec hendrerit vitae lorem at
                    malesuada. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Nulla a diam eu sem gravida ultrices.{' '}
                    <br /> Nam consequat nunc neque, nec bibendum ante mollis
                    nec. Cras porta ante a ex condimentum imperdiet. Cras
                    vehicula velit in erat semper, sed bibendum ligula vehicula.
                    Fusce hendrerit orci arcu, ut posuere dui volutpat at.
                    Vivamus condimentum porttitor ultricies. Quisque at metus
                    sit amet ipsum convallis lacinia. Nulla elementum ligula
                    eget velit viverra condimentum. Vestibulum pulvinar enim
                    mattis pharetra tristique. Donec hendrerit vitae lorem at
                    malesuada. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Nulla a diam eu sem gravida ultrices.{' '}
                    <br /> Nam consequat nunc neque, nec bibendum ante mollis
                    nec. Cras porta ante a ex condimentum imperdiet. Cras
                    vehicula velit in erat semper, sed bibendum ligula vehicula.
                    Fusce hendrerit orci arcu, ut posuere dui volutpat at.
                    Vivamus condimentum porttitor ultricies. Quisque at metus
                    sit amet ipsum convallis lacinia. Nulla elementum ligula
                    eget velit viverra condimentum. Vestibulum pulvinar enim
                    mattis pharetra tristique. Donec hendrerit vitae lorem at
                    malesuada. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Nulla a diam eu sem gravida ultrices.{' '}
                    <br /> Nam consequat nunc neque, nec bibendum ante mollis
                    nec. Cras porta ante a ex condimentum imperdiet. Cras
                    vehicula velit in erat semper, sed bibendum ligula vehicula.
                    Fusce hendrerit orci arcu, ut posuere dui volutpat at.
                    Vivamus condimentum porttitor ultricies. Quisque at metus
                    sit amet ipsum convallis lacinia. Nulla elementum ligula
                    eget velit viverra condimentum. Vestibulum pulvinar enim
                    mattis pharetra tristique. Donec hendrerit vitae lorem at
                    malesuada. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Nulla a diam eu sem gravida ultrices.{' '}
                    <br /> Nam consequat nunc neque, nec bibendum ante mollis
                    nec. Cras porta ante a ex condimentum imperdiet. Cras
                    vehicula velit in erat semper, sed bibendum ligula vehicula.
                    Fusce hendrerit orci arcu, ut posuere dui volutpat at.
                    Vivamus condimentum porttitor ultricies. Quisque at metus
                    sit amet ipsum convallis lacinia. Nulla elementum ligula
                    eget velit viverra condimentum. Vestibulum pulvinar enim
                    mattis pharetra tristique. Donec hendrerit vitae lorem at
                    malesuada. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Nulla a diam eu sem gravida ultrices.{' '}
                    <br /> Nam consequat nunc neque, nec bibendum ante mollis
                    nec. Cras porta ante a ex condimentum imperdiet. Cras
                    vehicula velit in erat semper, sed bibendum ligula vehicula.
                    Fusce hendrerit orci arcu, ut posuere dui volutpat at.
                    Vivamus condimentum porttitor ultricies. Quisque at metus
                    sit amet ipsum convallis lacinia. Nulla elementum ligula
                    eget velit viverra condimentum. Vestibulum pulvinar enim
                    mattis pharetra tristique. Donec hendrerit vitae lorem at
                    malesuada. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Nulla a diam eu sem gravida ultrices.{' '}
                    <br /> Nam consequat nunc neque, nec bibendum ante mollis
                    nec. Cras porta ante a ex condimentum imperdiet. Cras
                    vehicula velit in erat semper, sed bibendum ligula vehicula.
                    Fusce hendrerit orci arcu, ut posuere dui volutpat at.
                    Vivamus condimentum porttitor ultricies. Quisque at metus
                    sit amet ipsum convallis lacinia. Nulla elementum ligula
                    eget velit viverra condimentum. Vestibulum pulvinar enim
                    mattis pharetra tristique. Donec hendrerit vitae lorem at
                    malesuada. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Nulla a diam eu sem gravida ultrices.{' '}
                    <br /> Nam consequat nunc neque, nec bibendum ante mollis
                    nec. Cras porta ante a ex condimentum imperdiet. Cras
                    vehicula velit in erat semper, sed bibendum ligula vehicula.
                    Fusce hendrerit orci arcu, ut posuere dui volutpat at.
                    Vivamus condimentum porttitor ultricies. Quisque at metus
                    sit amet ipsum convallis lacinia. Nulla elementum ligula
                    eget velit viverra condimentum. Vestibulum pulvinar enim
                    mattis pharetra tristique. Donec hendrerit vitae lorem at
                    malesuada. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Nulla a diam eu sem gravida ultrices.{' '}
                    <br /> Nam consequat nunc neque, nec bibendum ante mollis
                    nec. Cras porta ante a ex condimentum imperdiet. Cras
                    vehicula velit in erat semper, sed bibendum ligula vehicula.
                    Fusce hendrerit orci arcu, ut posuere dui volutpat at.
                    Vivamus condimentum porttitor ultricies. Quisque at metus
                    sit amet ipsum convallis lacinia. Nulla elementum ligula
                    eget velit viverra condimentum. Vestibulum pulvinar enim
                    mattis pharetra tristique. Donec hendrerit vitae lorem at
                    malesuada. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Nulla a diam eu sem gravida ultrices.
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={() => setModalLong(false)}>
                      Do Something
                    </Button>{' '}
                    <Button
                      color="secondary"
                      onClick={() => setModalLong(false)}
                    >
                      Cancel
                    </Button>
                  </ModalFooter>
                </Modal>
              </div>
            </CardBody>
          </Card>

          <Card className="mb-4">
            <CardBody>
              <CardTitle>
                <IntlMessages id="modal.backdrop" />
              </CardTitle>
              <div>
                <FormGroup className="mr-2">
                  <Label for="backdrop">
                    <IntlMessages id="modal.backdrop-value" />
                  </Label>
                  <Input
                    type="select"
                    name="backdrop"
                    id="backdrop"
                    onChange={(e) => {
                      const val =
                        e.target.value !== 'static'
                          ? JSON.parse(e.target.value)
                          : e.target.value;
                      setBackdrop(val);
                    }}
                  >
                    <option value="true">true</option>
                    <option value="false">false</option>
                    <option value="static">static</option>
                  </Input>
                </FormGroup>

                <Button
                  color="primary"
                  outline
                  onClick={() => setModalBack(true)}
                >
                  <IntlMessages id="modal.launch-demo-modal" />
                </Button>
                <Modal
                  isOpen={modalBack}
                  toggle={() => setModalBack(!modalBack)}
                  backdrop={backdrop}
                >
                  <ModalHeader>Modal title</ModalHeader>
                  <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={() => setModalBack(false)}>
                      Do Something
                    </Button>{' '}
                    <Button
                      color="secondary"
                      onClick={() => setModalBack(false)}
                    >
                      Cancel
                    </Button>
                  </ModalFooter>
                </Modal>
              </div>
            </CardBody>
          </Card>

          <Card className="mb-4">
            <CardBody>
              <CardTitle>
                <IntlMessages id="modal.right-modal" />
              </CardTitle>
              <div>
                <Button
                  color="primary"
                  outline
                  onClick={() => setModalRight(true)}
                >
                  <IntlMessages id="modal.launch-right-modal" />
                </Button>
                <Modal
                  isOpen={modalRight}
                  toggle={() => setModalRight(!modalRight)}
                  wrapClassName="modal-right"
                >
                  <ModalHeader>Modal title</ModalHeader>
                  <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      color="primary"
                      onClick={() => setModalRight(false)}
                    >
                      Do Something
                    </Button>{' '}
                    <Button
                      color="secondary"
                      onClick={() => setModalRight(false)}
                    >
                      Cancel
                    </Button>
                  </ModalFooter>
                </Modal>
              </div>
            </CardBody>
          </Card>

          <Card className="mb-4">
            <CardBody>
              <CardTitle>
                <IntlMessages id="modal.nested-modal" />
              </CardTitle>
              <div>
                <Button
                  color="primary"
                  outline
                  onClick={() => setModalNestedContainer(true)}
                >
                  <IntlMessages id="modal.launch-demo-modal" />
                </Button>

                <Modal
                  isOpen={modalNestedContainer}
                  toggle={() => setModalNestedContainer(!modalNestedContainer)}
                >
                  <ModalHeader>Modal title</ModalHeader>
                  <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                    <br />
                    <div className="text-center m-2">
                      <Button
                        color="primary"
                        outline
                        onClick={() => {
                          setCloseAll(false);
                          setModalNested(true);
                        }}
                      >
                        Show Nested Modal
                      </Button>
                    </div>
                    <Modal
                      isOpen={modalNested}
                      toggle={() => setModalNested(!modalNested)}
                      onClosed={
                        closeAll
                          ? () => setModalNestedContainer(false)
                          : () => {}
                      }
                    >
                      <ModalHeader>Nested Modal title</ModalHeader>
                      <ModalBody>Stuff and things</ModalBody>
                      <ModalFooter>
                        <Button
                          color="primary"
                          onClick={() => setModalNested(false)}
                        >
                          Done
                        </Button>{' '}
                        <Button
                          color="secondary"
                          onClick={() => {
                            setCloseAll(true);
                            setModalNested(false);
                          }}
                        >
                          All Done
                        </Button>
                      </ModalFooter>
                    </Modal>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      color="primary"
                      onClick={() => setModalNestedContainer(false)}
                    >
                      Do Something
                    </Button>{' '}
                    <Button
                      color="secondary"
                      onClick={() => setModalNestedContainer(false)}
                    >
                      Cancel
                    </Button>
                  </ModalFooter>
                </Modal>
              </div>
            </CardBody>
          </Card>

          <Card className="mb-4">
            <CardBody>
              <CardTitle>
                <IntlMessages id="modal.size" />
              </CardTitle>
              <div>
                <Button
                  className="mr-2 mb-2"
                  color="primary"
                  outline
                  onClick={() => setModalLarge(true)}
                >
                  <IntlMessages id="modal.launch-large-modal" />
                </Button>

                <Button
                  className="mb-2"
                  color="primary"
                  outline
                  onClick={() => setModalSmall(true)}
                >
                  <IntlMessages id="modal.launch-small-modal" />
                </Button>

                <Modal
                  isOpen={modalLarge}
                  size="lg"
                  toggle={() => setModalLarge(!modalLarge)}
                >
                  <ModalHeader>Modal title</ModalHeader>
                  <ModalBody>---</ModalBody>
                </Modal>

                <Modal
                  isOpen={modalSmall}
                  size="sm"
                  toggle={() => setModalSmall(!modalSmall)}
                >
                  <ModalHeader>Modal title</ModalHeader>
                  <ModalBody>---</ModalBody>
                </Modal>
              </div>
            </CardBody>
          </Card>
        </Colxx>
      </Row>
    </>
  );
};

export default ModalUi;
