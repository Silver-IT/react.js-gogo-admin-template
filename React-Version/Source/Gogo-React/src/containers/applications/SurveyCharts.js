import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';

import { Colxx } from '../../components/common/CustomBootstrap';
import { ThemeColors } from '../../helpers/ThemeColors';
import { DoughnutChart } from '../../components/charts';

const colors = ThemeColors();

const ageChartData = {
  labels: ['12-24', '24-30', '30-40', '40-50', '50-60'],
  datasets: [
    {
      label: '',
      borderColor: [
        colors.themeColor1,
        colors.themeColor2,
        colors.themeColor3,
        colors.themeColor4,
        colors.themeColor5,
      ],
      backgroundColor: [
        colors.themeColor1_10,
        colors.themeColor2_10,
        colors.themeColor3_10,
        colors.themeColor4_10,
        colors.themeColor5_10,
      ],
      borderWidth: 2,
      data: [15, 25, 20, 30, 14],
    },
  ],
};
const genderChartData = {
  labels: ['Male', 'Female', 'Other'],
  datasets: [
    {
      label: '',
      borderColor: [colors.themeColor1, colors.themeColor2, colors.themeColor3],
      backgroundColor: [
        colors.themeColor1_10,
        colors.themeColor2_10,
        colors.themeColor3_10,
      ],
      borderWidth: 2,
      data: [85, 45, 20],
    },
  ],
};
const workChartData = {
  labels: [
    'Employed for wages',
    'Self-employed',
    'Looking for work',
    'Retired',
  ],
  datasets: [
    {
      label: '',
      borderColor: [
        colors.themeColor1,
        colors.themeColor2,
        colors.themeColor3,
        colors.themeColor4,
      ],
      backgroundColor: [
        colors.themeColor1_10,
        colors.themeColor2_10,
        colors.themeColor3_10,
        colors.themeColor4_10,
      ],
      borderWidth: 2,
      data: [15, 25, 20, 8],
    },
  ],
};
const codingChartData = {
  labels: ['Python', 'JavaScript', 'PHP', 'Java', 'C#'],
  datasets: [
    {
      label: '',
      borderColor: [
        colors.themeColor1,
        colors.themeColor2,
        colors.themeColor3,
        colors.themeColor4,
        colors.themeColor5,
      ],
      backgroundColor: [
        colors.themeColor1_10,
        colors.themeColor2_10,
        colors.themeColor3_10,
        colors.themeColor4_10,
        colors.themeColor4_10,
      ],
      borderWidth: 2,
      data: [15, 25, 20, 8, 25],
    },
  ],
};

const SurveyCharts = () => {
  return (
    <Colxx xxs="12" lg="8">
      <Card className="mb-4">
        <CardBody>
          <CardTitle>How old are you?</CardTitle>
          <div className="chart-container">
            <DoughnutChart shadow data={ageChartData} />
          </div>
        </CardBody>
      </Card>

      <Card className="mb-4">
        <CardBody>
          <CardTitle>What is your gender?</CardTitle>
          <div className="chart-container">
            <DoughnutChart shadow data={genderChartData} />
          </div>
        </CardBody>
      </Card>

      <Card className="mb-4">
        <CardBody>
          <CardTitle>What is your employment status?</CardTitle>
          <div className="chart-container">
            <DoughnutChart shadow data={workChartData} />
          </div>
        </CardBody>
      </Card>

      <Card className="mb-4">
        <CardBody>
          <CardTitle>What programming languages do you use?</CardTitle>
          <div className="chart-container">
            <DoughnutChart shadow data={codingChartData} />
          </div>
        </CardBody>
      </Card>
    </Colxx>
  );
};

export default SurveyCharts;
