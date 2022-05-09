import React from 'react';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  BarSeries,
  Tooltip,
  DataLabel,
} from '@syncfusion/ej2-react-charts';
import { stackedChartData } from '../data/dummy';

const StackedChart = () => {
  return (
    <ChartComponent
      id='charts'
      primaryXAxis={{
        majorGridLines: { width: 0 },
        minorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 },
        interval: 1,
        lineStyle: { width: 0 },
        labelIntersectAction: 'Rotate45',
        valueType: 'Category',
      }}
      primaryYAxis={{
        lineStyle: { width: 0 },
        minimum: 0,
        maximum: 200,
        interval: 100,
        majorTickLines: { width: 0 },
        majorGridLines: { width: 1 },
        minorGridLines: { width: 1 },
        minorTickLines: { width: 0 },
        labelFormat: '{value}',
      }}
      width={'400px'}
      height={'70%'}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
    >
      <Inject services={[BarSeries, Legend, Tooltip, DataLabel, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective
          dataSource={stackedChartData[0]}
          xName='x'
          yName='y'
          name='Destinos turísticos'
          type='Bar'
        ></SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default StackedChart;