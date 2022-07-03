import React from "react";
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
} from "@syncfusion/ej2-react-charts";
import { stackedChartData } from "../data/Estructura";
import { useEffect, useState } from "react";

const StackedChart = () => {
  // const [hoteles, setHoteles] = useState([]);
  const [personal, setPersonal] = useState([]);
  const [limpieza, setLimpieza] = useState([]);
  const [precioCalidad, setPrecioCalidad] = useState([]);
  const [ubicacion, setUbicacion] = useState([]);
  const [wifi, setWifi] = useState([]);
  const [total, setTotal] = useState([]);

  useEffect(() => {
    obtenerDatos();
  });

  const obtenerDatos = async () => {
    const data = await fetch(
      // "http://192.168.0.10:3009/api/fedata/promedioPosadas"
      `http://${process.env.REACT_APP_IPLOCAL}:3009/api/fedata/promedioPosadas`


    );
    const data2 = await data.json();

    setPersonal(data2.personal);
    setLimpieza(data2.limpieza);
    setPrecioCalidad(data2.precioCalidad);
    setUbicacion(data2.ubicacion);
    setWifi(data2.wifi);
    setTotal(data2.total);
  };

  const stackedChartData2 = [
    [
      { x: "Total", y: total },
      { x: "Wi-fi", y: wifi },
      { x: "Ubicacion", y: ubicacion },
      { x: "Precio/calidad", y: precioCalidad },
      { x: "Limpieza", y: limpieza },
      { x: "Personal", y: personal },
    ],
  ];
  return (
    <ChartComponent
      id="charts"
      primaryXAxis={{
        majorGridLines: { width: 0 },
        minorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 },
        interval: 1,
        lineStyle: { width: 0 },
        labelIntersectAction: "Rotate45",
        valueType: "Category",
      }}
      primaryYAxis={{
        lineStyle: { width: 0 },
        minimum: 0,
        maximum: 10,
        interval: 5,
        majorTickLines: { width: 0 },
        majorGridLines: { width: 1 },
        minorGridLines: { width: 1 },
        minorTickLines: { width: 0 },
        labelFormat: "{value}",
      }}
      width={"400px"}
      height={"70%"}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
    >
      <Inject services={[BarSeries, Legend, Tooltip, DataLabel, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective
          dataSource={stackedChartData2[0]}
          xName="x"
          yName="y"
          name="Promedio General de Posadas"
          type="Bar"
        ></SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default StackedChart;
