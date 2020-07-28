/* eslint-disable prefer-rest-params */
import React, { useEffect, useRef, useState } from 'react';
import { Chart } from 'chart.js';

import { centerTextPlugin } from './util';
import { doughnutChartOptions } from './config';

const Doughnut = ({ data, shadow = false }) => {
  const chartContainer = useRef(null);
  const [, setChartInstance] = useState(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      if (shadow) {
        Chart.defaults.doughnutWithShadow = Chart.defaults.doughnut;
        Chart.controllers.doughnutWithShadow = Chart.controllers.doughnut.extend(
          {
            draw(ease) {
              Chart.controllers.doughnut.prototype.draw.call(this, ease);
              const {
                chart: { ctx },
              } = this;
              ctx.save();
              ctx.shadowColor = 'rgba(0,0,0,0.15)';
              ctx.shadowBlur = 10;
              ctx.shadowOffsetX = 0;
              ctx.shadowOffsetY = 10;
              ctx.responsive = true;
              Chart.controllers.doughnut.prototype.draw.apply(this, arguments);
              ctx.restore();
            },
          }
        );
      }
      const context = chartContainer.current.getContext('2d');
      const newChartInstance = new Chart(context, {
        type: shadow ? 'doughnutWithShadow' : 'doughnut',
        options: doughnutChartOptions,
        plugins: [centerTextPlugin],
        data,
      });
      setChartInstance(newChartInstance);
    }
  }, [chartContainer, data, shadow]);

  return <canvas ref={chartContainer} />;
};

export default Doughnut;
