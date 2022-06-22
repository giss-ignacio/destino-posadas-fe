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
import { stackedChartData } from "../data/dummy";
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
    // const endPoint = "http://localhost:3009/api/fedata/hoteles";
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const data = await fetch("http://localhost:3009/api/fedata/hoteles");
    const data2 = await data.json();

    let mostrar = data2[0];
    console.log(mostrar);

    setPersonal(mostrar[0].Categoria.value);
    setLimpieza(10);
    setPrecioCalidad(57);
    setUbicacion(70);
    setWifi(88);
    setTotal(99);
  };

  const stackedChartData2 = [
    [
      { x: "Total", y: total },
      // { x: "Edificios con valor arquitectónico", y: 40 },
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
        maximum: 200,
        interval: 100,
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
