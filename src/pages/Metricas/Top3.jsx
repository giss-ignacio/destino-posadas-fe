import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  Tooltip,
  ColumnSeries,
  DataLabel,
} from "@syncfusion/ej2-react-charts";

import { useEffect, useState } from "react";

const Top3 = () => {
  //states
  const [personalHotel1, setPersonalHotel1] = useState([]);
  const [limpiezaHotel1, setLimpiezaHotel1] = useState([]);
  const [precioCalidadHotel1, setPrecioCalidadHotel1] = useState([]);
  const [ubicacionHotel1, setUbicacionHotel1] = useState([]);
  const [wifiHotel1, setWifiHotel1] = useState([]);
  const [totalHotel1, setTotalHotel1] = useState([]);
  const [nombreHotel1, setNombreHotel1] = useState([]);

  const [personalHotel2, setPersonalHotel2] = useState([]);
  const [limpiezaHotel2, setLimpiezaHotel2] = useState([]);
  const [precioCalidadHotel2, setPrecioCalidadHotel2] = useState([]);
  const [ubicacionHotel2, setUbicacionHotel2] = useState([]);
  const [wifiHotel2, setWifiHotel2] = useState([]);
  const [totalHotel2, setTotalHotel2] = useState([]);
  const [nombreHotel2, setNombreHotel2] = useState([]);

  const [personalHotel3, setPersonalHotel3] = useState([]);
  const [limpiezaHotel3, setLimpiezaHotel3] = useState([]);
  const [precioCalidadHotel3, setPrecioCalidadHotel3] = useState([]);
  const [ubicacionHotel3, setUbicacionHotel3] = useState([]);
  const [wifiHotel3, setWifiHotel3] = useState([]);
  const [totalHotel3, setTotalHotel3] = useState([]);
  const [nombreHotel3, setNombreHotel3] = useState([]);

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const data = await fetch("http://localhost:3009/api/fedata/top3hoteles");
    const data2 = await data.json();

    let mostrar = data2[0];
    console.log(mostrar.hotel1.total);
    //seteo
    setPersonalHotel1(mostrar.hotel1.personal);
    setLimpiezaHotel1(mostrar.hotel1.limpieza);
    setPrecioCalidadHotel1(mostrar.hotel1.precioCalidad);
    setUbicacionHotel1(mostrar.hotel1.ubicacion);
    setWifiHotel1(mostrar.hotel1.wifi);
    setTotalHotel1(mostrar.hotel1.total);
    setNombreHotel1(mostrar.hotel1.nombre);

    setPersonalHotel2(mostrar.hotel2.personal);
    setLimpiezaHotel2(mostrar.hotel2.limpieza);
    setPrecioCalidadHotel2(mostrar.hotel2.precioCalidad);
    setUbicacionHotel2(mostrar.hotel2.ubicacion);
    setWifiHotel2(mostrar.hotel2.wifi);
    setTotalHotel2(mostrar.hotel2.total);
    setNombreHotel2(mostrar.hotel2.nombre);

    setPersonalHotel3(mostrar.hotel3.personal);
    setLimpiezaHotel3(mostrar.hotel3.limpieza);
    setPrecioCalidadHotel3(mostrar.hotel3.precioCalidad);
    setUbicacionHotel3(mostrar.hotel3.ubicacion);
    setWifiHotel3(mostrar.hotel3.wifi);
    setTotalHotel3(mostrar.hotel3.total);
    setNombreHotel3(mostrar.hotel3.nombre);
  };

  const barChartData2 = [
    [
      { x: "HOTEL 1: " + nombreHotel1, y: personalHotel1 },
      { x: "HOTEL 2: " + nombreHotel2, y: personalHotel2 },
      { x: "HOTEL 3: " + nombreHotel3, y: personalHotel3 },
    ],
    [
      { x: "HOTEL 1: " + nombreHotel1, y: limpiezaHotel1 },
      { x: "HOTEL 2: " + nombreHotel2, y: limpiezaHotel2 },
      { x: "HOTEL 3: " + nombreHotel3, y: limpiezaHotel3 },
    ],
    [
      { x: "HOTEL 1: " + nombreHotel1, y: precioCalidadHotel1 },
      { x: "HOTEL 2: " + nombreHotel2, y: precioCalidadHotel2 },
      { x: "HOTEL 3: " + nombreHotel3, y: precioCalidadHotel3 },
    ],
    [
      { x: "HOTEL 1: " + nombreHotel1, y: ubicacionHotel1 },
      { x: "HOTEL 2: " + nombreHotel2, y: ubicacionHotel2 },
      { x: "HOTEL 3: " + nombreHotel3, y: ubicacionHotel3 },
    ],
    [
      { x: "HOTEL 1: " + nombreHotel1, y: wifiHotel1 },
      { x: "HOTEL 2: " + nombreHotel2, y: wifiHotel2 },
      { x: "HOTEL 3: " + nombreHotel3, y: wifiHotel3 },
    ],
    [
      { x: "HOTEL 1: " + nombreHotel1, y: totalHotel1 },
      { x: "HOTEL 2: " + nombreHotel2, y: totalHotel2 },
      { x: "HOTEL 3: " + nombreHotel3, y: totalHotel3 },
    ],
  ];
  return (
    <div className="md:m-10 m-4 md:mt-40 mt-20">
      <div className=" w-full">
        <ChartComponent
          id="charts"
          style={{ textAlign: "center" }}
          primaryXAxis={{
            valueType: "Category",
            interval: 1,
            majorGridLines: { width: 0 },
          }}
          primaryYAxis={{
            majorGridLines: { width: 0 },
            majorTickLines: { width: 0 },
            lineStyle: { width: 0 },
            labelStyle: { color: "transparent" },
          }}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          title="Top 3 - Mejores Hoteles"
        >
          <Inject
            services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]}
          />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={barChartData2[0]}
              xName="x"
              yName="y"
              name="Personal"
              type="Column"
              marker={{
                dataLabel: {
                  visible: true,
                  position: "Top",
                  font: { fontWeight: "600", color: "#ffffff" },
                },
              }}
            ></SeriesDirective>
            <SeriesDirective
              dataSource={barChartData2[1]}
              xName="x"
              yName="y"
              name="Limpieza"
              type="Column"
              marker={{
                dataLabel: {
                  visible: true,
                  position: "Top",
                  font: { fontWeight: "600", color: "#ffffff" },
                },
              }}
            ></SeriesDirective>
            <SeriesDirective
              dataSource={barChartData2[2]}
              xName="x"
              yName="y"
              name="Precio/Calidad"
              type="Column"
              marker={{
                dataLabel: {
                  visible: true,
                  position: "Top",
                  font: { fontWeight: "600", color: "#ffffff" },
                },
              }}
            ></SeriesDirective>

            <SeriesDirective
              dataSource={barChartData2[3]}
              xName="x"
              yName="y"
              name="Ubicación"
              type="Column"
              marker={{
                dataLabel: {
                  visible: true,
                  position: "Top",
                  font: { fontWeight: "600", color: "#ffffff" },
                },
              }}
            ></SeriesDirective>

            <SeriesDirective
              dataSource={barChartData2[4]}
              xName="x"
              yName="y"
              name="Wi-fi"
              type="Column"
              marker={{
                dataLabel: {
                  visible: true,
                  position: "Top",
                  font: { fontWeight: "600", color: "#ffffff" },
                },
              }}
            ></SeriesDirective>

            <SeriesDirective
              dataSource={barChartData2[5]}
              xName="x"
              yName="y"
              name="Total"
              type="Column"
              marker={{
                dataLabel: {
                  visible: true,
                  position: "Top",
                  font: { fontWeight: "600", color: "#ffffff" },
                },
              }}
            ></SeriesDirective>
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Top3;
