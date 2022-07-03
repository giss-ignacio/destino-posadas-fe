//import React from 'react';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  SplineAreaSeries,
  Legend,
} from "@syncfusion/ej2-react-charts";
import { React, useEffect, useState } from "react";

const Wifi = () => {
  const [wifi1Mes1, setWifi1Mes1] = useState([]);
  const [wifi1Mes2, setWifi1Mes2] = useState([]);
  const [wifi1Mes3, setWifi1Mes3] = useState([]);
  const [wifi1Mes4, setWifi1Mes4] = useState([]);

  const [wifi2Mes1, setWifi2Mes1] = useState([]);
  const [wifi2Mes2, setWifi2Mes2] = useState([]);
  const [wifi2Mes3, setWifi2Mes3] = useState([]);
  const [wifi2Mes4, setWifi2Mes4] = useState([]);

  const [wifi3Mes1, setWifi3Mes1] = useState([]);
  const [wifi3Mes2, setWifi3Mes2] = useState([]);
  const [wifi3Mes3, setWifi3Mes3] = useState([]);
  const [wifi3Mes4, setWifi3Mes4] = useState([]);

  const [wifi4Mes1, setWifi4Mes1] = useState([]);
  const [wifi4Mes2, setWifi4Mes2] = useState([]);
  const [wifi4Mes3, setWifi4Mes3] = useState([]);
  const [wifi4Mes4, setWifi4Mes4] = useState([]);
  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const data = await fetch(
      // "http://192.168.0.10:3009/api/fedata/evolucionMensualPorConcepto?concepto=WiFi"
      `http://${process.env.REACT_APP_IPLOCAL}:3009/api/fedata/evolucionMensualPorConcepto?concepto=WiFi`
    );
    const data2 = await data.json();
    let obj = data2[0];
    setWifi1Mes1(obj[0][10]);
    setWifi1Mes2(obj[0][11]);
    setWifi1Mes3(obj[0][0]);
    setWifi1Mes4(obj[0][1]);

    setWifi2Mes1(obj[1][10]);
    setWifi2Mes2(obj[1][11]);
    setWifi2Mes3(obj[1][0]);
    setWifi2Mes4(obj[1][1]);

    setWifi3Mes1(obj[2][10]);
    setWifi3Mes2(obj[2][11]);
    setWifi3Mes3(obj[2][0]);
    setWifi3Mes4(obj[2][1]);

    setWifi4Mes1(obj[3][10]);
    setWifi4Mes2(obj[3][11]);
    setWifi4Mes3(obj[3][0]);
    setWifi4Mes4(obj[3][1]);
  };
  var respuesta = [
    [
      //Hoteles  - Verde
      { x: new Date(2021, 11, 1), y: wifi1Mes1 },
      { x: new Date(2021, 11, 30), y: wifi1Mes2 },
      { x: new Date(2022, 1, 1), y: wifi1Mes3 },
      { x: new Date(2022, 2, 1), y: wifi1Mes4 },
    ],
    [
      //Recidencial  - Negro
      { x: new Date(2021, 11, 1), y: wifi2Mes1 },
      { x: new Date(2021, 11, 30), y: wifi2Mes2 },
      { x: new Date(2022, 1, 1), y: wifi2Mes3 },
      { x: new Date(2022, 2, 1), y: wifi2Mes4 },
    ],
    [
      //APART  - Azul
      { x: new Date(2021, 11, 1), y: wifi3Mes1 },
      { x: new Date(2021, 11, 30), y: wifi3Mes2 },
      { x: new Date(2022, 1, 1), y: wifi3Mes3 },
      { x: new Date(2022, 2, 1), y: wifi3Mes4 },
    ],
    [
      // Hostería  - Violeta
      { x: new Date(2021, 11, 1), y: wifi4Mes1 },
      { x: new Date(2021, 11, 30), y: wifi4Mes2 },
      { x: new Date(2022, 1, 1), y: wifi4Mes3 },
      { x: new Date(2022, 2, 1), y: wifi4Mes4 },
    ],
  ];

  return (
    <div className="md:m-10 m-4 md:mt-40 mt-20">
      <div className="w-full">
        <ChartComponent
          id="charts"
          style={{ textAlign: "center" }}
          primaryXAxis={{
            valueType: "DateTime",
            labelFormat: "y/MM",
            majorGridLines: { width: 0 },
            intervalType: "Months",
            edgeLabelPlacement: "Shift",
          }}
          primaryYAxis={{
            labelFormat: "{value}",
            lineStyle: { width: 0 },
            minimum: 6,
            maximum: 10,
            interval: 1,
            majorTickLines: { width: 0 },
            minorTickLines: { width: 0 },
          }}
          chartArea={{ border: { width: 0 } }}
          title="Valoración promedio de WiFi por tipo de Alojamiento"
        >
          <Inject services={[SplineAreaSeries, DateTime, Legend]} />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={respuesta[0]}
              xName="x"
              yName="y"
              name="Hotel"
              opacity={0.5}
              type="SplineArea"
              width={2}
            ></SeriesDirective>
            <SeriesDirective
              dataSource={respuesta[1]}
              xName="x"
              yName="y"
              name="Residencial"
              opacity={0.5}
              type="SplineArea"
              width={2}
            ></SeriesDirective>
            <SeriesDirective
              dataSource={respuesta[2]}
              xName="x"
              yName="y"
              name="Apart Hotel"
              opacity={0.5}
              type="SplineArea"
              width={2}
            ></SeriesDirective>
            <SeriesDirective
              dataSource={respuesta[3]}
              xName="x"
              yName="y"
              name="Hostería"
              opacity={0.5}
              type="SplineArea"
              width={2}
            ></SeriesDirective>
          </SeriesCollectionDirective>
        </ChartComponent>
        <div>
          <br />
          <h1>
            Detalla la fluctuación del promedio del puntaje de wifi, según el
            tipo de alojamiento.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Wifi;
