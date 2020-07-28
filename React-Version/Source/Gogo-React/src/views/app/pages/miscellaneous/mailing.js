/* eslint-disable react/no-danger */
import React from 'react';
import { Row, Card, CardBody } from 'reactstrap';
import Breadcrumb from '../../../../containers/navs/Breadcrumb';
import {
  Separator,
  Colxx,
} from '../../../../components/common/CustomBootstrap';
import IntlMessages from '../../../../helpers/IntlMessages';

const Mailing = ({ match }) => {
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.mailing" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" className="mb-4">
          <Card className="mb-5">
            <CardBody>
              <IntlMessages id="pages.mailing-info" />
            </CardBody>
          </Card>

          <div
            className="content"
            dangerouslySetInnerHTML={{
              __html: `
                    <div leftmargin="0" marginwidth="0" topmargin="0" marginheight="0" offset="0" style="height:auto !important;width:100% !important; font-family: Helvetica,Arial,sans-serif !important; margin-bottom: 40px;">
                    <center>
                        <table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" style="max-width:600px; background-color:#ffffff;border:1px solid #e4e2e2;border-collapse:separate !important; border-radius:4px;border-spacing:0;color:#242128; margin:0;padding:40px;"
                            heigth="auto">
                            <tbody>
                                <tr>
                                    <td align="left" valign="center" style="padding-bottom:40px;border-top:0;height:100% !important;width:100% !important;">
                                        <img src="https://coloredstrategies.com/mailing/gogo.png" />
                                    </td>
                                    <td align="right" valign="center" style="padding-bottom:40px;border-top:0;height:100% !important;width:100% !important;">
                                        <span style="color: #8f8f8f; font-weight: normal; line-height: 2; font-size: 14px;">02.02.2019</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2" style="padding-top:10px;border-top:1px solid #e4e2e2">
                                        <h3 style="color:#303030; font-size:18px; line-height: 1.6; font-weight:500;">Get
                                            Started</h3>
                                        <p style="color:#8f8f8f; font-size: 14px; padding-bottom: 20px; line-height: 1.4;">
                                            Dynamically target high-payoff intellectual capital for customized
                                            technologies. Objectively integrate emerging core competencies before
                                            process-centric communities. Dramatically evisculate holistic
                                            innovation rather than client-centric data.<br/><br/>Progressively
                                            maintain extensive infomediaries via extensible niches. Dramatically
                                            disseminate standardized metrics after resource-leveling processes.
                                        </p>
                                        <h3 style="color:#303030; font-size:18px; line-height: 1.6; font-weight:500;">Verification
                                            Code</h3>
                                        <p style="background-color:#f1f1f1; padding: 8px 15px; border-radius: 50px; display: inline-block; margin-bottom:20px; font-size: 14px;  line-height: 1.4; font-family: Courier New, Courier, monospace; margin-top:0">148
                                            544 174</p>
            
                                        <h3 style="color:#303030; font-size:18px; line-height: 1.6; font-weight:500;">Steps
                                            to
                                            Follow</h3>
                                        <ol style="color:#8f8f8f; font-size: 14px; padding-bottom: 20px; padding-left:20px; line-height: 1.6">
                                            <li>Preliminary thinking systems</li>
                                            <li>Bandwidth efficient</li>
                                            <li>Green space</li>
                                            <li>Social impact</li>
                                        </ol>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;border-collapse:collapse;">
                                            <tbody>
                                                <tr>
                                                    <td style="padding:15px 0px;" valign="top" align="center">
                                                        <table border="0" cellpadding="0" cellspacing="0" style="border-collapse:separate !important;">
                                                            <tbody>
                                                                <tr>
                                                                    <td align="center" valign="middle" style="padding:13px;">
                                                                        <a href="#" title="START NOW" target="_blank" style="font-size: 14px; line-height: 1.5; font-weight: 700; letter-spacing: 1px; padding: 15px 40px; text-align:center; text-decoration:none; color:#FFFFFF; border-radius: 50px; background-color:#922c88;">START
                                                                            NOW</a>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table style="margin-top:30px; padding-bottom:20px;; margin-bottom: 40px;">
                            <tbody>
                                <tr>
                                    <td align="center" valign="center">
                                        <p style="font-size: 12px; text-decoration: none;line-height: 1; color:#909090; margin-top:0px; margin-bottom:5px; ">
                                            ColoredStrategies Inc, 35 Little Russell St. Bloomsburg London,UK
                                        </p>
                                        <p style="font-size: 12px; line-height:1; color:#909090;  margin-top:5px; margin-bottom:5px;">
                                            <a href="#" style="color: #922c88; text-decoration:none;">Privacy
                                                Policy</a>
                                            | <a href="#" style="color: #922c88; text-decoration:none;">Unscubscribe</a>
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </center>
                </div>
            
                <div leftmargin="0" marginwidth="0" topmargin="0" marginheight="0" offset="0" style="height:auto !important;width:100% !important; font-family: Helvetica,Arial,sans-serif !important;">
                    <center>
                        <table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" style="max-width:600px; background-color:#ffffff;border:1px solid #e4e2e2;border-collapse:separate !important; border-radius:4px;border-spacing:0;color:#242128; margin:0;padding:40px;"
                            heigth="auto">
                            <tbody>
                                <tr>
                                    <td align="left" valign="center" style="padding-bottom:40px;border-top:0;height:100% !important;width:100% !important;">
                                        <img src="https://coloredstrategies.com/mailing/gogo.png" />
                                    </td>
                                    <td align="right" valign="center" style="padding-bottom:40px;border-top:0;height:100% !important;width:100% !important;">
                                        <span style="color: #8f8f8f; font-weight: normal; line-height: 2; font-size: 14px;">02.02.2019</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2" style="padding-top:10px; border-top:1px solid #e4e2e2">
                                        <table>
                                            <tr>
                                                <td colSpan="2" style="padding-bottom:20px;">
                                                    <h3 style="color:#303030; font-size:18px; line-height: 1.6; font-weight:500;">Order
                                                        Summary</h3>
                                                    <p style="color:#8f8f8f; font-size: 14px; padding-bottom: 20px; line-height: 1.4; margin-bottom:0;">
                                                        Dynamically target high-payoff intellectual capital for
                                                        customized technologies. Objectively integrate emerging
                                                        core competencies before process-centric communities.
                                                        Dramatically evisculate holistic innovation rather than
                                                        client-centric data.<br/><br/>Progressively maintain
                                                        extensive infomediaries via extensible niches.
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding-top:0px; padding-bottom:20px; width:140px ">
                                                    <img src="https://coloredstrategies.com/mailing/product-1.jpg" style="width: 113px; height: 85px; object-fit: cover; border-radius: 3px; " />
                                                </td>
                                                <td style="padding-top:0px; padding-bottom:20px;">
                                                    <h4 style="font-size: 16px; line-height: 1; margin-bottom:20px;"><a href="#"
                                                            style="text-decoration: none; color:#303030; font-weight:500;">Marble
                                                            Cake</a></h4>
                                                    <p href="#" style="font-size: 12px; text-decoration: none; line-height: 1; color:#909090; margin-top:0px; margin-bottom:0;">3
                                                        pcs</p>
                                                    <p style="font-size: 12px; line-height: 1; color:#909090; margin-top:5px;">Standart
                                                        Package</p>
                                                </td>
                                                <td style="padding-top:0px; padding-bottom:20px; text-align: right;">
                                                    <p style="font-size: 13px; line-height: 1; color:#922c88;  margin-top:5px; vertical-align:top; white-space:nowrap;">$
                                                        14.82</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan="3" style="border-top:1px solid #e4e2e2">&nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td style="padding-top:0px; padding-bottom:20px; width:140px ">
                                                    <img src="https://coloredstrategies.com/mailing/product-2.jpg" style="width: 113px; height: 85px; object-fit: cover; border-radius: 3px; " />
                                                </td>
                                                <td style="padding-top:0px; padding-bottom:20px;">
                                                    <h4 style="font-size: 16px; line-height: 1; margin-bottom:20px;"><a href="#"
                                                            style="text-decoration: none; color:#303030; font-weight:500;">Chocolate
                                                            Cake</a></h4>
                                                    <p href="#" style="font-size: 12px; text-decoration: none; line-height: 1; color:#909090; margin-top:0px; margin-bottom:0;">2
                                                        pcs</p>
                                                    <p style="font-size: 12px; line-height: 1; color:#909090; margin-top:5px;">Standart
                                                        Package</p>
                                                </td>
                                                <td style="padding-top:0px; padding-bottom:20px; text-align: right;">
                                                    <p style="font-size: 13px; line-height: 1; color:#922c88;  margin-top:5px; vertical-align:top; white-space:nowrap;">$
                                                        4.24</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan="3" style="border-top:1px solid #e4e2e2">&nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td style="padding-top:0px; padding-bottom:20px; width:140px ">
                                                    <img src="https://coloredstrategies.com/mailing/product-3.jpg" style="width: 113px; height: 85px; object-fit: cover; border-radius: 3px; " />
                                                </td>
                                                <td style="padding-top:0px; padding-bottom:20px;">
                                                    <h4 style="font-size: 16px; line-height: 1; margin-bottom:20px;"><a href="#"
                                                            style="text-decoration: none; color:#303030; font-weight:500;">Fat
                                                            Rascal</a></h4>
                                                    <p href="#" style="font-size: 12px; text-decoration: none; line-height: 1; color:#909090; margin-top:0px;  margin-bottom:0;">1
                                                        pcs</p>
                                                    <p style="font-size: 12px; line-height: 1; color:#909090; margin-top:5px;">Standart
                                                        Package</p>
                                                </td>
                                                <td style="padding-top:0px; padding-bottom:20px; text-align: right;">
                                                    <p style="font-size: 13px; line-height: 1; color:#922c88;  margin-top:5px; vertical-align:top; white-space:nowrap;">$
                                                        12.91</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan="3" style="border-top:1px solid #e4e2e2">&nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td style="padding-top:0px; padding-bottom:20px; width:140px ">
                                                    <img src="https://coloredstrategies.com/mailing/product-4.jpg" style="width: 113px; height: 85px; object-fit: cover; border-radius: 3px; " />
                                                </td>
                                                <td style="padding-top:0px; padding-bottom:20px;">
                                                    <h4 style="font-size: 16px; line-height: 1; margin-bottom:20px;"><a href="#"
                                                            style="text-decoration: none; color:#303030; font-weight:500;">Cremeschnitte</a></h4>
                                                    <p href="#" style="font-size: 12px; text-decoration: none; line-height: 1; color:#909090; margin-top:0px; margin-bottom:0;">4
                                                        pcs</p>
                                                    <p style="font-size: 12px; line-height: 1; color:#909090; margin-top:5px;">Standart
                                                        Package</p>
                                                </td>
                                                <td style="padding-top:0px; padding-bottom:20px; text-align: right;">
                                                    <p style="font-size: 13px; line-height: 1; color:#922c88;  margin-top:5px; vertical-align:top; white-space:nowrap;">$
                                                        54.20</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan="3" style="border-top:1px solid #e4e2e2">&nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td colSpan="2" style="padding-top:0px; padding-bottom:5px; text-align: right; color:#909090;">
                                                    <p style="font-size: 12px; line-height: 1; margin-top:5px; vertical-align:top;  margin-bottom: 0;">Subtotal:&nbsp;</p>
                                                </td>
                                                <td style="padding-top:0px; padding-bottom:5px; text-align: right; padding-left: 15px;">
                                                    <p style="font-size: 13px; line-height: 1; margin-top:5px; vertical-align:top; color:#922c88; white-space:nowrap; margin-bottom: 0;">$
                                                        124.20</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan="2" style="padding-top:0px; padding-bottom:5px; text-align: right; color:#909090;">
                                                    <p style="font-size: 12px; line-height: 1; margin-top:5px; vertical-align:top; margin-bottom: 0;">Shipping:&nbsp;</p>
                                                </td>
                                                <td style="padding-top:0px; padding-bottom:5px; text-align: right; padding-left: 15px;">
                                                    <p style="font-size: 13px; line-height: 1; margin-top:5px; vertical-align:top; color:#922c88; white-space:nowrap; margin-bottom: 0;">$
                                                        4.04</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan="2" style="padding-top:0px; padding-bottom:5px; text-align: right; color:#909090;">
                                                    <p style="font-size: 12px; line-height: 1; margin-top:5px; vertical-align:top; margin-bottom: 0;">Taxes:&nbsp;</p>
                                                </td>
                                                <td style="padding-top:0px; padding-bottom:5px; text-align: right; padding-left: 15px;">
                                                    <p style="font-size: 13px; line-height: 1; margin-top:5px; vertical-align:top; color:#922c88; white-space:nowrap; margin-bottom: 0;">$
                                                        9.14</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan="2" style="padding-top:0px; padding-bottom:5px; text-align: right; color:#909090;">
                                                    <p style="font-size: 12px; line-height: 1; margin-top:5px; vertical-align:top; margin-bottom: 0;"><strong>Total:&nbsp;</strong></p>
                                                </td>
                                                <td style="padding-top:0px; padding-bottom:5px; text-align: right; padding-left: 15px;">
                                                    <p style="font-size: 13px; line-height: 1; margin-top:5px; vertical-align:top; color:#922c88; white-space:nowrap; margin-bottom: 0;"><strong>$
                                                            137.38</strong></p>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
            
                        <table style="margin-top:30px; padding-bottom:20px; margin-bottom: 40px;">
                            <tbody>
                                <tr>
                                    <td align="center" valign="center">
                                        <p style="font-size: 12px; text-decoration: none;line-height: 1; color:#909090; margin-top:0px; margin-bottom:5px; ">
                                            ColoredStrategies Inc, 35 Little Russell St. Bloomsburg London,UK
                                        </p>
                                        <p style="font-size: 12px; line-height:1; color:#909090;  margin-top:5px; margin-bottom:5px;">
                                            <a href="#" style="color: #922c88; text-decoration:none;">Privacy
                                                Policy</a>
                                            | <a href="#" style="color: #922c88; text-decoration:none;">Unscubscribe</a>
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </center>
                </div>
            
                <div leftmargin="0" marginwidth="0" topmargin="0" marginheight="0" offset="0" style="height:auto !important;width:100% !important; font-family: Helvetica,Arial,sans-serif !important;">
                    <center>
                        <table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" style="max-width:600px; background-color:#ffffff;border:1px solid #e4e2e2;border-collapse:separate !important; border-radius:4px;border-spacing:0;color:#242128; margin:0;padding:40px;"
                            heigth="auto">
                            <tbody>
                                <tr>
                                    <td align="left" valign="center" style="padding-bottom:40px;border-top:0;height:100% !important;width:100% !important;">
                                        <img src="https://coloredstrategies.com/mailing/gogo.png" />
                                    </td>
                                    <td align="right" valign="center" style="padding-bottom:40px;border-top:0;height:100% !important;width:100% !important;">
                                        <span style="color: #8f8f8f; font-weight: normal; line-height: 2; font-size: 14px;">02.02.2019</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2" style="padding-top:10px;border-top:1px solid #e4e2e2">
                                        <table>
                                            <tr>
                                                <td style="padding-bottom:20px;">
                                                    <h3 style="color:#303030; font-size:18px; line-height: 1.6; font-weight:500;">Latest
                                                        from Blog</h3>
                                                    <p style="color:#8f8f8f; font-size: 14px; padding-bottom: 20px; line-height: 1.4;">
                                                        Dynamically target high-payoff intellectual capital for
                                                        customized technologies. Objectively integrate emerging
                                                        core competencies before process-centric communities.
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding-bottom: 30px;">
                                                    <a href="#">
                                                        <img style="max-width: 100%; object-fit: cover; border-radius: 3px; margin-bottom:5px;"
                                                            src="https://dore-jquery.coloredstrategies.com/img/carousel-1.jpg" />
                                                    </a>
                                                    <h4 style="font-size: 16px; line-height: 1; margin-bottom:5px; margin-top: 10px;"><a
                                                            href="#" style="text-decoration: none; color:#303030; font-weight:500;">Distinctively
                                                            Exploit Optimal Alignments</a></h4>
                                                    <p style="color:#8f8f8f; font-size: 14px; line-height: 1.4; margin-top:10px">
                                                        Objectively integrate emerging
                                                        core competencies before integrate emerging process-centric
                                                        communities.
                                                    </p>
                                                    <p style="font-size: 14px; line-height: 1; margin-top:5px;"><a style="color:#922c88; text-decoration:initial;"
                                                            href="#">Learn
                                                            More</a></p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan="3" style="border-top:1px solid #e4e2e2; padding-bottom:10px;">&nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td style="padding-bottom: 30px;">
                                                    <a href="#">
                                                        <img style="max-width: 100%; object-fit: cover; border-radius: 3px; margin-bottom:5px;"
                                                            src="https://dore-jquery.coloredstrategies.com/img/carousel-2.jpg" />
                                                    </a>
                                                    <h4 style="font-size: 16px; line-height: 1; margin-bottom:5px; margin-top: 10px;"><a
                                                            href="#" style="text-decoration: none; color:#303030; font-weight:500;">Assertively
                                                            Iterate Resource Maximizing</a></h4>
                                                    <p style="color:#8f8f8f; font-size: 14px; line-height: 1.4; margin-top:10px">
                                                        Objectively integrate emerging
                                                        core competencies before integrate emerging process-centric
                                                        communities.
                                                    </p>
                                                    <p style="font-size: 14px; line-height: 1; margin-top:5px;"><a style="color:#922c88; text-decoration:initial;"
                                                            href="#">Learn
                                                            More</a></p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan="3" style="border-top:1px solid #e4e2e2; padding-bottom:10px;">&nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="#">
                                                        <img style="max-width: 100%; object-fit: cover; border-radius: 3px; margin-bottom:5px;"
                                                            src="https://dore-jquery.coloredstrategies.com/img/carousel-3.jpg" />
                                                    </a>
                                                    <h4 style="font-size: 16px; line-height: 1; margin-bottom:5px; margin-top: 10px;"><a
                                                            href="#" style="text-decoration: none; color:#303030; font-weight:500;">Objectively
                                                            Manufactured Products</a></h4>
                                                    <p style="color:#8f8f8f; font-size: 14px; line-height: 1.4; margin-top:10px">
                                                        Objectively integrate emerging
                                                        core competencies before integrate emerging process-centric
                                                        communities.
                                                    </p>
                                                    <p style="font-size: 14px; line-height: 1; margin-top:5px;"><a style="color:#922c88; text-decoration:initial;"
                                                            href="#">Learn
                                                            More</a></p>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
            
                        <table style="margin-top:30px; padding-bottom:20px; margin-bottom: 40px;">
                            <tbody>
                                <tr>
                                    <td align="center" valign="center">
                                        <p style="font-size: 12px; text-decoration: none;line-height: 1; color:#909090; margin-top:0px; margin-bottom:5px; ">
                                            ColoredStrategies Inc, 35 Little Russell St. Bloomsburg London,UK
                                        </p>
                                        <p style="font-size: 12px; line-height:1; color:#909090;  margin-top:5px; margin-bottom:5px;">
                                            <a href="#" style="color: #922c88; text-decoration:none;">Privacy
                                                Policy</a>
                                            | <a href="#" style="color: #922c88; text-decoration:none;">Unscubscribe</a>
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </center>
                </div>
                    `,
            }}
          />
        </Colxx>
      </Row>
    </>
  );
};
export default Mailing;
