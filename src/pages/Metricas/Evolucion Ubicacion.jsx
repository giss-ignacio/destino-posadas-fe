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

import { useEffect, useState } from "react";

const EvolucionUbicacion = () => {
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
      "http://localhost:3009/api/fedata/evolucionMensualPorConcepto?concepto=Ubicacion"
    );
    const data2 = await data.json();
    const obj = data2[0];
    // setMaxNov(obj.maxNov);
    setHotel1Mes1(obj[0][10]);
    setHotel1Mes2(obj[0][11]);
    setHotel1Mes3(obj[0][0]);
    setHotel1Mes4(obj[0][1]);

    setHotel2Mes1(obj[1][10]);
    setHotel2Mes2(obj[1][11]);
    setHotel2Mes3(obj[1][0]);
    setHotel2Mes4(obj[1][1]);

    setHotel3Mes1(obj[2][10]);
    setHotel3Mes2(obj[2][11]);
    setHotel3Mes3(obj[2][0]);
    setHotel3Mes4(obj[2][1]);

    setHotel4Mes1(obj[3][10]);
    setHotel4Mes2(obj[3][11]);
    setHotel4Mes3(obj[3][0]);
    setHotel4Mes4(obj[3][1]);
  };
  const lineChartData = [
    [
      { x: new Date(2021, 11, 1), y: hotel1Mes1 },
      { x: new Date(2021, 11, 30), y: hotel1Mes2 },
      { x: new Date(2022, 1, 1), y: hotel1Mes3 },
      { x: new Date(2022, 2, 1), y: hotel1Mes4 },
    ],
    [
      { x: new Date(2021, 11, 1), y: hotel2Mes1 },
      { x: new Date(2021, 11, 30), y: hotel2Mes2 }, //no hay dato, repito el anterior
      { x: new Date(2022, 1, 1), y: hotel2Mes3 },
      { x: new Date(2022, 2, 1), y: hotel2Mes4 },
    ],
    [
      { x: new Date(2021, 11, 1), y: hotel3Mes1 },
      { x: new Date(2021, 11, 30), y: hotel3Mes2 },
      { x: new Date(2022, 1, 1), y: hotel3Mes3 },
      { x: new Date(2022, 2, 1), y: hotel3Mes4 },
    ],
    [
      { x: new Date(2021, 11, 1), y: hotel4Mes1 },
      { x: new Date(2021, 11, 30), y: hotel4Mes2 },
      { x: new Date(2022, 1, 1), y: hotel4Mes3 },
      { x: new Date(2022, 2, 1), y: hotel4Mes4 },
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
            intervalType: "Months",
            edgeLabelPlacement: "Shift",
            majorGridLines: { width: 0 },
          }}
          primaryYAxis={{
            labelFormat: "{value}",
            rangePadding: "None",
            minimum: 7,
            maximum: 9,
            interval: 5,
            lineStyle: { width: 5 },
            majorTickLines: { width: 10 },
            minorTickLines: { width: 10 },
          }}
          chartArea={{ border: { width: 1 } }}
          tooltip={{ enable: true }}
          title="Puntuación de la ubicación según tipo de alojamiento"
        >
          <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={lineChartData[0]}
              xName="x"
              yName="y"
              name="Hotel"
              width={5}
              marker={{ visible: true, width: 10, height: 10 }}
              type="Line"
            ></SeriesDirective>
            <SeriesDirective
              dataSource={lineChartData[1]}
              xName="x"
              yName="y"
              name="Residencial"
              width={5}
              marker={{ visible: true, width: 10, height: 10 }}
              type="Line"
            ></SeriesDirective>
            <SeriesDirective
              dataSource={lineChartData[2]}
              xName="x"
              yName="y"
              name="Apart Hotel"
              width={5}
              marker={{ visible: true, width: 10, height: 10 }}
              type="Line"
            ></SeriesDirective>
            <SeriesDirective
              dataSource={lineChartData[3]}
              xName="x"
              yName="y"
              name="Hostería"
              width={5}
              marker={{ visible: true, width: 10, height: 10 }}
              type="Line"
            ></SeriesDirective>
          </SeriesCollectionDirective>
        </ChartComponent>
        <div>
          <br />
          <h1>
            Un gráfico que muestra la fluctuación de los últimos 4 meses en
            escala del 0 al 10 para los distintos tipos de alojamiento. De esa
            forma se puede monitorear rápidamente a nivel general cómo puntúa
            cada tipo de alojamiento según el puntaje de ubicación.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default EvolucionUbicacion;
