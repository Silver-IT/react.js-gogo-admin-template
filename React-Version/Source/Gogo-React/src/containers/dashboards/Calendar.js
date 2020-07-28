import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import CalendarToolbar from '../../components/CalendarToolbar';
import IntlMessages from '../../helpers/IntlMessages';
import data from '../../data/events';

import { getDirection } from '../../helpers/Utils';

const localizer = momentLocalizer(moment);

const CalendarCard = () => {
  return (
    <Card>
      <CardBody>
        <CardTitle>
          <IntlMessages id="dashboards.calendar" />
        </CardTitle>
        <Calendar
          localizer={localizer}
          style={{ minHeight: '500px' }}
          events={data}
          rtl={getDirection().isRtl}
          views={['month']}
          components={{
            toolbar: CalendarToolbar,
          }}
        />
      </CardBody>
    </Card>
  );
};
export default CalendarCard;
