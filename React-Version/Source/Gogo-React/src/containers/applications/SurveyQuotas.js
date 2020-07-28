/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Card, CardBody } from 'reactstrap';
import { Colxx } from '../../components/common/CustomBootstrap';
import SurveyQuota from '../../components/applications/SurveyQuota';

import quotas from '../../data/survey.quotas';

const SurveyQuotas = () => {
  return (
    <Colxx xxs="12" lg="4">
      <Card className="mb-4">
        <CardBody>
          <p className="list-item-heading mb-4">Quota</p>
          {quotas.map((quota, index) => (
            <SurveyQuota
              key={`quota_${index}`}
              title={quota.title}
              data={quota.data}
            />
          ))}
        </CardBody>
      </Card>
    </Colxx>
  );
};

export default SurveyQuotas;
