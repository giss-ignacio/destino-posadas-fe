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

const Total = () => {
  const [hotel1Mes1, setHotel1Mes1] = useState([]);
  const [hotel1Mes2, setHotel1Mes2] = useState([]);
  const [hotel1Mes3, setHotel1Mes3] = useState([]);
  const [hotel1Mes4, setHotel1Mes4] = useState([]);

  const [hotel2Mes1, setHotel2Mes1] = useState([]);
  const [hotel2Mes2, setHotel2Mes2] = useState([]);
  const [hotel2Mes3, setHotel2Mes3] = useState([]);
  const [hotel2Mes4, setHotel2Mes4] = useState([]);

  const [hotel3Mes1, setHotel3Mes1] = useState([]);
  const [hotel3Mes2, setHotel3Mes2] = useState([]);
  const [hotel3Mes3, setHotel3Mes3] = useState([]);
  const [hotel3Mes4, setHotel3Mes4] = useState([]);

  const [hotel4Mes1, setHotel4Mes1] = useState([]);
  const [hotel4Mes2, setHotel4Mes2] = useState([]);
  const [hotel4Mes3, setHotel4Mes3] = useState([]);
  const [hotel4Mes4, setHotel4Mes4] = useState([]);

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const data = await fetch(
      "http://localhost:3009/api/fedata/evolucionMensualPuntajes"
    );
    const data2 = await data.json();
    const obj = data2[0];
    // setMaxNov(obj.maxNov);
    setHotel1Mes1(obj[0][0] / 1000);
    setHotel1Mes2(obj[0][1] / 1000);
    setHotel1Mes3(obj[0][10] / 1000);
    setHotel1Mes4(obj[0][11] / 1000);

    setHotel2Mes1(obj[0][0] / 1000);
    setHotel2Mes2(obj[0][1] / 1000);
    setHotel2Mes3(obj[0][10] / 1000);
    setHotel2Mes4(obj[0][11] / 1000);

    setHotel3Mes1(obj[0][0] / 1000);
    setHotel3Mes2(obj[0][1] / 1000);
    setHotel3Mes3(obj[0][10] / 1000);
    setHotel3Mes4(obj[0][11] / 1000);

    setHotel4Mes1(obj[0][0] / 1000);
    setHotel4Mes2(obj[0][1] / 1000);
    setHotel4Mes3(obj[0][10] / 1000);
    setHotel4Mes4(obj[0][11] / 1000);
  };
  const lineChartData = [
    [
      { x: new Date(2022, 1, 1), y: 2 },
      { x: new Date(2022, 1, 15), y: 9 },
      { x: new Date(2022, 2, 1), y: 1 },
      { x: new Date(2022, 2, 15), y: 4 },
    ],
    [
      { x: new Date(2022, 1, 1), y: 3 },
      { x: new Date(2022, 1, 15), y: 5 },
      { x: new Date(2022, 2, 1), y: 5 },
      { x: new Date(2022, 2, 15), y: 6 },
    ],
    [
      { x: new Date(2022, 1, 1), y: 5 },
      { x: new Date(2022, 1, 15), y: 3 },
      { x: new Date(2022, 2, 1), y: 8 },
      { x: new Date(2022, 2, 15), y: 8 },
    ],
    [
      { x: new Date(2022, 1, 1), y: 9 },
      { x: new Date(2022, 1, 15), y: 2 },
      { x: new Date(2022, 2, 1), y: 9 },
      { x: new Date(2022, 2, 15), y: 6 },
    ],
  ];
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
            labelFormat: "{value}",
            rangePadding: "None",
            minimum: 0,
            maximum: 10,
            interval: 5,
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
              name="Residencial"
              width={10}
              marker={{ visible: true, width: 10, height: 10 }}
              type="Line"
            ></SeriesDirective>
            <SeriesDirective
              dataSource={lineChartData[2]}
              xName="x"
              yName="y"
              name="Apart Hotel"
              width={10}
              marker={{ visible: true, width: 10, height: 10 }}
              type="Line"
            ></SeriesDirective>
            <SeriesDirective
              dataSource={lineChartData[3]}
              xName="x"
              yName="y"
              name="Hostería"
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

export default Total;
