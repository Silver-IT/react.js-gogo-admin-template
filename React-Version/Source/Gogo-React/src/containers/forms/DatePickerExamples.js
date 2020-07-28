/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { injectIntl } from 'react-intl';
import { Row, Card, CardBody, CardTitle } from 'reactstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import IntlMessages from '../../helpers/IntlMessages';
import { Colxx } from '../../components/common/CustomBootstrap';

const DatePickerExamples = ({ intl }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [startDateTime, setStartDateTime] = useState(new Date());
  const [startDateRange, setStartDateRange] = useState(new Date());
  const [endDateRange, setEndDateRange] = useState(new Date());
  const [embeddedDate, setEmbeddedDate] = useState(new Date());
  const { messages } = intl;

  return (
    <Row>
      <Colxx xxs="12" xl="8" className="mb-4">
        <Card>
          <CardBody>
            <CardTitle>
              <IntlMessages id="form-components.date-picker" />
            </CardTitle>
            <label>
              <IntlMessages id="form-components.date" />
            </label>
            <div className="mb-5">
              <DatePicker
                selected={startDate}
                onChange={setStartDate}
                placeholderText={messages['forms.date']}
              />
            </div>
            <label>
              <IntlMessages id="form-components.date-range" />
            </label>
            <Row className="mb-5">
              <Colxx xxs="6">
                <DatePicker
                  selected={startDateRange}
                  selectsStart
                  startDate={startDateRange}
                  endDate={endDateRange}
                  onChange={setStartDateRange}
                  placeholderText={messages['form-components.start']}
                />
              </Colxx>
              <Colxx xxs="6">
                <DatePicker
                  selected={endDateRange}
                  selectsEnd
                  startDate={startDateRange}
                  endDate={endDateRange}
                  onChange={setEndDateRange}
                  placeholderText={messages['form-components.end']}
                />
              </Colxx>
            </Row>

            <label>
              <IntlMessages id="form-components.date-with-time" />
            </label>
            <DatePicker
              className="mb-5"
              selected={startDateTime}
              onChange={setStartDateTime}
              placeholderText={messages['forms.date']}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="LLL"
              timeCaption="Time"
            />
          </CardBody>
        </Card>
      </Colxx>

      <Colxx xxs="12" xl="4" className="mb-4">
        <Card className="h-100">
          <CardBody>
            <CardTitle>
              <IntlMessages id="form-components.embedded" />
            </CardTitle>
            <DatePicker
              calendarClassName="embedded"
              inline
              selected={embeddedDate}
              onChange={setEmbeddedDate}
            />
          </CardBody>
        </Card>
      </Colxx>
    </Row>
  );
};
export default injectIntl(DatePickerExamples);
