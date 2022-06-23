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
import { barChartData } from "../../data/dummy";
// import { GetDataOrion } from "../../components/getDataOrion";
import { useEffect, useState } from "react";

const Top3 = () => {
  //states
  const [personalHotel1, setPersonalHotel1] = useState([]);
  const [limpiezaHotel1, setLimpiezaHotel1] = useState([]);
  const [precioCalidadHotel1, setPrecioCalidadHotel1] = useState([]);
  const [ubicacionHotel1, setUbicacionHotel1] = useState([]);
  const [wifiHotel1, setWifiHotel1] = useState([]);
  const [totalHotel1, setTotalHotel1] = useState([]);

  const [personalHotel2, setPersonalHotel2] = useState([]);
  const [limpiezaHotel2, setLimpiezaHotel2] = useState([]);
  const [precioCalidadHotel2, setPrecioCalidadHotel2] = useState([]);
  const [ubicacionHotel2, setUbicacionHotel2] = useState([]);
  const [wifiHotel2, setWifiHotel2] = useState([]);
  const [totalHotel2, setTotalHotel2] = useState([]);

  const [personalHotel3, setPersonalHotel3] = useState([]);
  const [limpiezaHotel3, setLimpiezaHotel3] = useState([]);
  const [precioCalidadHotel3, setPrecioCalidadHotel3] = useState([]);
  const [ubicacionHotel3, setUbicacionHotel3] = useState([]);
  const [wifiHotel3, setWifiHotel3] = useState([]);
  const [totalHotel3, setTotalHotel3] = useState([]);

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const data = await fetch("http://localhost:3009/api/fedata/top3hoteles");
    const data2 = await data.json();

    let mostrar = data2[0];
    //seteo
    setPersonalHotel1(mostrar[0].Categoria.value);
    setLimpiezaHotel1(10);
    setPrecioCalidadHotel1(20);
    setUbicacionHotel1(30);
    setWifiHotel1(40);
    setTotalHotel1(50);

    setPersonalHotel2(20);
    setLimpiezaHotel2(50);
    setPrecioCalidadHotel2(80);
    setUbicacionHotel2(30);
    setWifiHotel2(40);
    setTotalHotel2(50);

    setPersonalHotel3(mostrar[0].Categoria.value);
    setLimpiezaHotel3(10);
    setPrecioCalidadHotel3(20);
    setUbicacionHotel3(30);
    setWifiHotel3(40);
    setTotalHotel3(50);
  };

  const barChartData2 = [
    [
      { x: "HOTEL 1: NOMBREHOTEL", y: personalHotel1 },
      { x: "HOTEL 2: NOMBREHOTEL", y: personalHotel2 },
      { x: "HOTEL 3: NOMBREHOTEL", y: personalHotel3 },
    ],
    [
      { x: "HOTEL 1: NOMBREHOTEL", y: limpiezaHotel1 },
      { x: "HOTEL 2: NOMBREHOTEL", y: limpiezaHotel2 },
      { x: "HOTEL 3: NOMBREHOTEL", y: limpiezaHotel3 },
    ],
    [
      { x: "HOTEL 1: NOMBREHOTEL", y: precioCalidadHotel1 },
      { x: "HOTEL 2: NOMBREHOTEL", y: precioCalidadHotel2 },
      { x: "HOTEL 3: NOMBREHOTEL", y: precioCalidadHotel3 },
    ],
    [
      { x: "HOTEL 1: NOMBREHOTEL", y: ubicacionHotel1 },
      { x: "HOTEL 2: NOMBREHOTEL", y: ubicacionHotel2 },
      { x: "HOTEL 3: NOMBREHOTEL", y: ubicacionHotel3 },
    ],
    [
      { x: "HOTEL 1: NOMBREHOTEL", y: wifiHotel1 },
      { x: "HOTEL 2: NOMBREHOTEL", y: wifiHotel2 },
      { x: "HOTEL 3: NOMBREHOTEL", y: wifiHotel3 },
    ],
    [
      { x: "HOTEL 1: NOMBREHOTEL", y: totalHotel1 },
      { x: "HOTEL 2: NOMBREHOTEL", y: totalHotel2 },
      { x: "HOTEL 3: NOMBREHOTEL", y: totalHotel3 },
    ],
    // [
    //   { x: "HOTEL 1: NOMBREHOTEL", y: 94 },
    //   { x: "HOTEL 2: NOMBREHOTEL", y: 17 },
    //   { x: "HOTEL 3: NOMBREHOTEL", y: 26 },
    // ],
    // [
    //   { x: "HOTEL 1: NOMBREHOTEL", y: 94 },
    //   { x: "HOTEL 2: NOMBREHOTEL", y: 17 },
    //   { x: "HOTEL 3: NOMBREHOTEL", y: 26 },
    // ],
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
