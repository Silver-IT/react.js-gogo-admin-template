/* eslint-disable react/no-danger */
import React from 'react';
import { Row, Card, CardBody, Table } from 'reactstrap';
import Breadcrumb from '../../../../containers/navs/Breadcrumb';
import {
  Separator,
  Colxx,
} from '../../../../components/common/CustomBootstrap';
import IntlMessages from '../../../../helpers/IntlMessages';

const Invoice = ({ match }) => {
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.invoice" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12">
          <Card className="mb-5">
            <CardBody>
              <IntlMessages id="pages.invoice-info" />
            </CardBody>
          </Card>
        </Colxx>
      </Row>

      <Row>
        <Colxx xxs="12">
          <h3 className="mb-4">
            <IntlMessages id="pages.react-version" />
          </h3>
        </Colxx>
      </Row>

      <Row className="invoice-react">
        <Colxx xxs="12" className="mb-4">
          <Card className="mb-5 invoice-contents">
            <CardBody className="d-flex flex-column justify-content-between">
              <div className="d-flex flex-column">
                <div className="d-flex flex-row justify-content-between pt-2 pb-2">
                  <div className="d-flex align-self-center">
                    <img
                      src="https://coloredstrategies.com/mailing/gogo.png"
                      alt="Logo"
                    />
                  </div>
                  <div className="d-flex w-30 text-right align-self-center">
                    <p className="text-small text-semi-muted mb-0">
                      ColoredStrategies Inc 35 Little Russell St. Bloomsburg
                      London,UK
                      <br />
                      784 451 12 47
                    </p>
                  </div>
                </div>
                <div className="border-bottom pt-4 mb-5" />

                <div className="d-flex flex-row justify-content-between mb-5">
                  <div className="d-flex flex-column w-70 mr-2 p-4 text-semi-muted bg-semi-muted">
                    <p className="mb-0">Latashia Nagy</p>
                    <p className="mb-0">
                      100-148 Warwick Trfy, Kansas City, USA
                    </p>
                  </div>
                  <div className="d-flex w-30 flex-column text-right p-4 text-semi-muted bg-semi-muted">
                    <p className="mb-0">Invoice #: 741</p>
                    <p className="mb-0">02.02.2019</p>
                  </div>
                </div>

                <Table borderless>
                  <thead>
                    <tr>
                      <th className="text-muted text-extra-small mb-2">
                        ITEM NAME
                      </th>
                      <th className="text-muted text-extra-small mb-2">
                        COUNT
                      </th>
                      <th className="text-right text-muted text-extra-small mb-2">
                        PRICE
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Marble Cake</td>
                      <td>3 pcs</td>
                      <td className="text-right">$ 14.82</td>
                    </tr>
                    <tr>
                      <td>Chocolate Cake</td>
                      <td>2 pcs</td>
                      <td className="text-right">$ 8.97</td>
                    </tr>
                    <tr>
                      <td>Fat Rascal</td>
                      <td>2 pcs</td>
                      <td className="text-right">$ 18.24</td>
                    </tr>
                    <tr>
                      <td>Cremeschnitte</td>
                      <td>2 pcs</td>
                      <td className="text-right">$ 4.24</td>
                    </tr>
                    <tr>
                      <td>Cheesecake</td>
                      <td>3 pcs</td>
                      <td className="text-right">$ 6.27</td>
                    </tr>
                    <tr>
                      <td>Magdalena</td>
                      <td>2 pcs</td>
                      <td className="text-right">$ 10.97</td>
                    </tr>
                    <tr>
                      <td>Genoise</td>
                      <td>2 pcs</td>
                      <td className="text-right">$ 21.24</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div className="d-flex flex-column">
                <div className="border-bottom pt-3 mb-5" />
                <Table borderless className="d-flex justify-content-end">
                  <tbody>
                    <tr>
                      <td className="text-semi-muted">Subtotal :</td>
                      <td className="text-right">$ 61.82</td>
                    </tr>
                    <tr>
                      <td className="text-semi-muted">Tax :</td>
                      <td className="text-right">$ 61.82</td>
                    </tr>
                    <tr>
                      <td className="text-semi-muted">Shipping :</td>
                      <td className="text-right">$ 3.21</td>
                    </tr>
                    <tr className="font-weight-bold">
                      <td className="text-semi-muted">Total :</td>
                      <td className="text-right">$ 68.14</td>
                    </tr>
                  </tbody>
                </Table>
                <div className="border-bottom pt-3 mb-5" />
                <p className="text-muted text-small text-center">
                  Invoice was created on a computer and is valid without the
                  signature and seal.{' '}
                </p>
              </div>
            </CardBody>
          </Card>
        </Colxx>
      </Row>

      <Row>
        <Colxx xxs="12">
          <h3 className="mb-4">
            <IntlMessages id="pages.inline-version" />
          </h3>
        </Colxx>
      </Row>

      <Row className="invoice">
        <Colxx xxs="12" className="mb-4">
          <div
            className="content"
            dangerouslySetInnerHTML={{
              __html: `<div className="invoice-contents" style="background-color:#ffffff; height:1200px; max-width:830px; font-family: Helvetica,Arial,sans-serif !important; position: relative;">
                                <table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" style="width:100%; background-color:#ffffff;border-collapse:separate !important; border-spacing:0;color:#242128; margin:0;padding:30px; padding-top: 20px;"
                                    heigth="auto">
        
                                    <tbody>
                                        <tr>
                                            <td align="left" valign="center" style="padding-bottom:35px; padding-top:15px; border-top:0;width:100% !important;">
                                                <img src="https://coloredstrategies.com/mailing/gogo.png" />
                                            </td>
                                            <td align="right" valign="center" style="padding-bottom:20px;border-top:0;width:100% !important;">
                                                <p style="color: #8f8f8f; font-weight: normal; line-height: 1.2; font-size: 12px; white-space: nowrap; ">
                                                    ColoredStrategies Inc<br> 35 Little Russell St. Bloomsburg London,UK<br>784 451 12 47
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="2" style="padding-top:30px; border-top:1px solid #f1f0f0">
                                                <table style="width: 100%;">
                                                    <tbody>
                                                        <tr>
                                                            <td style="vertical-align:middle; border-radius: 3px; padding:30px; background-color: #f9f9f9; border-right: 5px solid white;">
                                                                <p style="color:#303030; font-size: 14px;  line-height: 1.6; margin:0; padding:0;">
                                                                    Latashia Nagy<br>100-148 Warwick Trfy, Kansas City, USA
                                                                </p>
                                                            </td>
        
                                                            <td style="text-align: right; padding-top:0px; padding-bottom:0; vertical-align:middle; padding:30px; background-color: #f9f9f9; border-radius: 3px; border-left: 5px solid white;">
                                                                <p style="color:#8f8f8f; font-size: 14px; padding: 0; line-height: 1.6; margin:0; ">
                                                                    Invoice #: 741<br>
                                                                    02.02.2019
                                                                </p>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <table style="width: 100%; margin-top:40px;">
                                                    <thead>
                                                        <tr>
                                                            <th style="text-align:left; font-size: 10px; color:#8f8f8f; padding-bottom: 15px; padding-top:10px; padding-bottom:10px;">
                                                                ITEM NAME
                                                            </th>
                                                            <th style="text-align:left; font-size: 10px; color:#8f8f8f; padding-bottom: 15px; padding-top:10px; padding-bottom:10px;">
                                                                COUNT
                                                            </th>
                                                            <th style="text-align:right; font-size: 10px; color:#8f8f8f; padding-bottom: 15px; padding-top:10px; padding-bottom:10px;">
                                                                PRICE
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td style="padding-top:0px; padding-bottom:5px; padding-top:10px; padding-bottom:10px;">
                                                                <p style="font-size: 13px; line-height: 1; margin-bottom:0; color:#303030; font-weight:500; margin-top: 10px;">Marble
                                                                    Cake</p>
                                                            </td>
                                                            <td style="padding-top:10px; padding-bottom:10px;">
                                                                <p href="#" style="font-size: 13px; text-decoration: none; line-height: 1; color:#909090; margin-top:0px; margin-bottom:0;">3
                                                                    pcs</p>
                                                            </td>
                                                            <td style="padding-top:0px; padding-bottom:0; text-align: right; padding-top:10px; padding-bottom:10px;">
                                                                <p style="font-size: 13px; line-height: 1; color:#303030; margin-bottom:0; margin-top:0; vertical-align:top; white-space:nowrap;">$
                                                                    14.82</p>
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td style="padding-top:0px; padding-bottom:5px; padding-top:10px; padding-bottom:10px;">
                                                                <p style="font-size: 13px; line-height: 1; margin-bottom:0; color:#303030; font-weight:500; margin-top: 10px;">Chocolate
                                                                    Cake</p>
                                                            </td>
                                                            <td style="padding-top:10px; padding-bottom:10px;">
                                                                <p href="#" style="font-size: 13px; text-decoration: none; line-height: 1; color:#909090; margin-top:0px; margin-bottom:0;">2
                                                                    pcs</p>
                                                            </td>
                                                            <td style="padding-top:0px; padding-bottom:0; text-align: right; padding-top:10px; padding-bottom:10px;">
                                                                <p style="font-size: 13px; line-height: 1; color:#303030; margin-bottom:0; margin-top:0; vertical-align:top; white-space:nowrap;">$
                                                                    8.97</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style="padding-top:0px; padding-bottom:5px; padding-top:10px; padding-bottom:10px;">
                                                                <p style="font-size: 13px; line-height: 1; margin-bottom:0; color:#303030; font-weight:500; margin-top: 10px;">Fat
                                                                    Rascal</p>
                                                            </td>
                                                            <td style="padding-top:10px; padding-bottom:10px;">
                                                                <p href="#" style="font-size: 13px; text-decoration: none; line-height: 1; color:#909090; margin-top:0px; margin-bottom:0;">2
                                                                    pcs</p>
                                                            </td>
                                                            <td style="padding-top:0px; padding-bottom:0; text-align: right; padding-top:10px; padding-bottom:10px;">
                                                                <p style="font-size: 13px; line-height: 1; color:#303030; margin-bottom:0; margin-top:0; vertical-align:top; white-space:nowrap;">$
                                                                    18.24</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style="padding-top:0px; padding-bottom:5px; padding-top:10px; padding-bottom:10px;">
                                                                <p style="font-size: 13px; line-height: 1; margin-bottom:0; color:#303030; font-weight:500; margin-top: 10px;">Cremeschnitte</p>
                                                            </td>
                                                            <td style="padding-top:10px; padding-bottom:10px;">
                                                                <p href="#" style="font-size: 13px; text-decoration: none; line-height: 1; color:#909090; margin-top:0px; margin-bottom:0;">2
                                                                    pcs</p>
                                                            </td>
                                                            <td style="padding-top:0px; padding-bottom:0; text-align: right; padding-top:10px; padding-bottom:10px;">
                                                                <p style="font-size: 13px; line-height: 1; color:#303030; margin-bottom:0; margin-top:0; vertical-align:top; white-space:nowrap;">$
                                                                    4.24</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style="padding-top:0px; padding-bottom:5px; padding-top:10px; padding-bottom:10px;">
                                                                <p style="font-size: 13px; line-height: 1; margin-bottom:0; color:#303030; font-weight:500; margin-top: 10px;">Cheesecake</p>
                                                            </td>
                                                            <td style="padding-top:10px; padding-bottom:10px;">
                                                                <p href="#" style="font-size: 13px; text-decoration: none; line-height: 1; color:#909090; margin-top:0px; margin-bottom:0;">3
                                                                    pcs</p>
                                                            </td>
                                                            <td style="padding-top:0px; padding-bottom:0; text-align: right; padding-top:10px; padding-bottom:10px;">
                                                                <p style="font-size: 13px; line-height: 1; color:#303030; margin-bottom:0; margin-top:0; vertical-align:top; white-space:nowrap;">$
                                                                    6.27</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style="padding-top:0px; padding-bottom:5px; padding-top:10px; padding-bottom:10px;">
                                                                <p style="font-size: 13px; line-height: 1; margin-bottom:0; color:#303030; font-weight:500; margin-top: 10px;">Magdalena</p>
                                                            </td>
                                                            <td style="padding-top:10px; padding-bottom:10px;">
                                                                <p href="#" style="font-size: 13px; text-decoration: none; line-height: 1; color:#909090; margin-top:0px; margin-bottom:0;">2
                                                                    pcs</p>
                                                            </td>
                                                            <td style="padding-top:0px; padding-bottom:0; text-align: right; padding-top:10px; padding-bottom:10px;">
                                                                <p style="font-size: 13px; line-height: 1; color:#303030; margin-bottom:0; margin-top:0; vertical-align:top; white-space:nowrap;">$
                                                                    10.97</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style="padding-top:0px; padding-bottom:5px; padding-top:10px; padding-bottom:10px;">
                                                                <p style="font-size: 13px; line-height: 1; margin-bottom:0; color:#303030; font-weight:500; margin-top: 10px;">Genoise</p>
                                                            </td>
                                                            <td style="padding-top:10px; padding-bottom:10px;">
                                                                <p href="#" style="font-size: 13px; text-decoration: none; line-height: 1; color:#909090; margin-top:0px; margin-bottom:0;">2
                                                                    pcs</p>
                                                            </td>
                                                            <td style="padding-top:0px; padding-bottom:0; text-align: right; padding-top:10px; padding-bottom:10px;">
                                                                <p style="font-size: 13px; line-height: 1; color:#303030; margin-bottom:0; margin-top:0; vertical-align:top; white-space:nowrap;">$
                                                                    21.24</p>
                                                            </td>
                                                        </tr>
                                                        
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
        
                                <table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" style="position:absolute; bottom:0; width:100%; background-color:#ffffff;border-collapse:separate !important; border-spacing:0;color:#242128; margin:0;padding:30px; padding-top: 20px;"
                                    heigth="auto">
                                    <tr>
                                        <td colspan="3" style="border-top:1px solid #f1f0f0">&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td colspan="2" style="width: 100%;padding-top:10px; padding-bottom:10px;">
                                            <p href="#" style="font-size: 13px; text-decoration: none; line-height: 1.6; color:#909090; margin-top:0px; margin-bottom:0; text-align: right;">
                                                Subtotal : </p>
                                        </td>
                                        <td style="padding-top:0px; text-align: right;padding-top:10px; padding-bottom:10px;">
                                            <p style="font-size: 13px; line-height: 1.6; color:#303030; margin-bottom:0; margin-top:0; vertical-align:top; white-space:nowrap; margin-left:15px">$
                                                61.82</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2" style="width: 100%;padding-top:10px; padding-bottom:10px;">
                                            <p href="#" style="font-size: 13px; text-decoration: none; line-height: 1.6; color:#909090; margin-top:0px; margin-bottom:0; text-align: right;">
                                                Tax : </p>
                                        </td>
                                        <td style="padding-top:0px; text-align: right;padding-top:10px; padding-bottom:10px;">
                                            <p style="font-size: 13px; line-height: 1.6; color:#303030; margin-bottom:0; margin-top:0; vertical-align:top; white-space:nowrap; margin-left:15px">$
                                                2.18</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2" style="width: 100%;padding-top:10px; padding-bottom:10px;">
                                            <p href="#" style="font-size: 13px; text-decoration: none; line-height: 1.6; color:#909090; margin-top:0px; margin-bottom:0; text-align: right;">
                                                Shipping : </p>
                                        </td>
                                        <td style="padding-top:0px; text-align: right;padding-top:10px; padding-bottom:10px;">
                                            <p style="font-size: 13px; line-height: 1.6; color:#303030; margin-bottom:0; margin-top:0; vertical-align:top; white-space:nowrap; margin-left:15px">$
                                                3.21</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2" style=" width: 100%; padding-bottom:15px; padding-top:10px;">
                                            <p href="#" style="font-size: 13px; text-decoration: none; line-height: 1.6; color:#909090; margin-top:0px; margin-bottom:0; text-align: right;">
                                                <strong>Total : </strong></p>
                                        </td>
                                        <td style="padding-top:0px; text-align: right; padding-bottom:15px; padding-top:10px;">
                                            <p style="font-size: 13px; line-height: 1.6; color:#303030; margin-bottom:0; margin-top:0; vertical-align:top; white-space:nowrap; margin-left:15px"><strong>$
                                                    68.14</strong></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3" style="border-top:1px solid #f1f0f0">&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td colspan="3" style="text-align:center;">
                                            <p style="color: #909090; font-size:11px; text-align:center;">Invoice was created
                                                on a computer and
                                                is valid without the signature and seal. </p>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                    
                    `,
            }}
          />
        </Colxx>
      </Row>
    </>
  );
};

export default Invoice;
