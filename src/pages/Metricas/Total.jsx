import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  LineSeries,
  DateTime,
  Legend,
  Tooltip,
} from "@syncfusion/ej2-react-charts";
import { lineChartData } from "../../data/dummy";

//
import axios from "axios";
import { useEffect, useState } from "react";

const Viajeros = () => {
  return (
    <div className="md:m-10 m-4 md:mt-40 mt-20 ">
      <div className="w-full">
        <ChartComponent
          id="charts"
          style={{ textAlign: "center" }}
          primaryXAxis={{
            valueType: "DateTime",
            labelFormat: "y",
            intervalType: "Years",
            edgeLabelPlacement: "Shift",
            majorGridLines: { width: 0 },
          }}
          primaryYAxis={{
            labelFormat: "{value}%",
            rangePadding: "None",
            minimum: 0,
            maximum: 100,
            interval: 20,
            lineStyle: { width: 3 },
            majorTickLines: { width: 10 },
            minorTickLines: { width: 10 },
          }}
          chartArea={{ border: { width: 1 } }}
          tooltip={{ enable: true }}
          title="Promedio - Total"
        >
          <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={lineChartData[0]}
              xName="x"
              yName="y"
              name="Hotel"
              width={10}
              marker={{ visible: true, width: 10, height: 10 }}
              type="Line"
            ></SeriesDirective>
            <SeriesDirective
              dataSource={lineChartData[1]}
              xName="x"
              yName="y"
              name="Apart"
              width={10}
              marker={{ visible: true, width: 10, height: 10 }}
              type="Line"
            ></SeriesDirective>
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Viajeros;
