/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
import React, { useEffect, useRef, useState } from 'react';
import { Chart } from 'chart.js';

import { smallLineChartOptions } from './config';

const addCommas = (nStr) => {
  nStr += '';
  const x = nStr.split('.');
  let x1 = x[0];
  const x2 = x.length > 1 ? `.${x[1]}` : '';
  const rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1,$2');
  }
  return x1 + x2;
};

const Scatter = ({ data }) => {
  const chartContainer = useRef(null);
  const [, setChartInstance] = useState(null);
  const [currentValue, setCurrentValue] = useState('');
  const [currentLabel, setCurrentLabel] = useState('');

  const changeState = (yLabel, xLabel) => {
    setCurrentValue(yLabel);
    setCurrentLabel(xLabel);
  };

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      Chart.controllers.lineWithLine = Chart.controllers.line;
      Chart.controllers.lineWithLine = Chart.controllers.line.extend({
        draw(ease) {
          Chart.controllers.line.prototype.draw.call(this, ease);
          const {
            chart: { ctx, tooltip, scales },
          } = this;

          if (tooltip._active && tooltip._active[0]) {
            const activePoint = tooltip._active[0];
            const { x } = activePoint.tooltipPosition();
            const topY = scales['y-axis-0'].top;
            const bottomY = scales['y-axis-0'].bottom;
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(x, topY);
            ctx.lineTo(x, bottomY);
            ctx.lineWidth = 1;
            ctx.strokeStyle = 'rgba(0,0,0,0.1)';
            ctx.stroke();
            ctx.restore();
          }
        },
      });
      const context = chartContainer.current.getContext('2d');
      const newChartInstance = new Chart(context, {
        type: 'lineWithLine',
        options: {
          ...smallLineChartOptions,
          tooltips: {
            intersect: false,
            enabled: false,
            custom(tooltipModel) {
              if (tooltipModel && tooltipModel.dataPoints) {
                const { yLabel } = tooltipModel.dataPoints[0];
                const { xLabel } = tooltipModel.dataPoints[0];
                const label = tooltipModel.body[0].lines[0].split(':')[0];
                changeState(`$${addCommas(yLabel)}`, `${label}-${xLabel}`);
              }
            },
          },
        },
        plugins: [
          {
            afterInit(chart, _options) {
              const yLabel = chart.data.datasets[0].data[0];
              const xLabel = chart.data.labels[0];
              const { label } = chart.data.datasets[0];
              changeState(`$${addCommas(yLabel)}`, `${label}-${xLabel}`);
            },
          },
        ],
        data,
      });
      setChartInstance(newChartInstance);
    }
  }, [chartContainer, data]);

  return (
    <>
      <div>
        <p className="lead color-theme-1 mb-1 value">{currentValue}</p>
        <p className="mb-0 label text-small">{currentLabel}</p>
      </div>
      <div className="chart">
        <canvas ref={chartContainer} />
      </div>
    </>
  );
};

export default Scatter;
