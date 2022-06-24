import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  ColumnSeries,
  Category,
  Tooltip,
  Legend,
  RangeColorSettingsDirective,
  RangeColorSettingDirective,
} from "@syncfusion/ej2-react-charts";
import { colorMappingData } from "../../data/dummy";

import axios from "axios";
import { useEffect, useState } from "react";

const Promedio = () => {
  const [personal, setPersonal] = useState([]);
  const [limpieza, setLimpieza] = useState([]);
  const [precioCalidad, setPrecioCalidad] = useState([]);
  const [ubicacion, setUbicacion] = useState([]);
  const [wifi, setWifi] = useState([]);
  const [total, setTotal] = useState([]);

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const data = await fetch("http://localhost:3009/api/fedata/promedioPosadas");
    const data2 = await data.json();


    setPersonal(data2.personal);
    setLimpieza(data2.limpieza);
    setPrecioCalidad(data2.precioCalidad);
    setUbicacion(data2.ubicacion);
    setWifi(data2.wifi);
    setTotal(data2.total);
  };

  const colorMappingData2 = [
    [
      //ajustes numeros de promedio(calificacion)
      { x: "Personal", y: personal },
      { x: "Limpieza", y: limpieza },
      { x: "Precio/Calidad", y: precioCalidad },
      { x: "Ubicación", y: ubicacion },
      { x: "Wi-fi", y: wifi },
      { x: "Total", y: total },
      // { x: "July", y: 29.4 },
      // { x: "Aug", y: 29.6 },
      // { x: "Sep", y: 25.8 },
      // { x: "Oct", y: 21.1 },
      // { x: "Nov", y: 15.5 },
      // { x: "Dec", y: 9.9 },
    ],
    ["#FFFF99"],
    ["#FFA500"],
    ["#FF4040"],
  ];

  return (
    <div className="md:m-10 m-4 md:mt-40 mt-20">
      <div className="w-full">
        <ChartComponent
          id="charts"
          style={{ textAlign: "center" }}
          primaryXAxis={{
            valueType: "Category",
            majorGridLines: { width: 0 },
            title: "",
          }}
          primaryYAxis={{
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 },
            minorTickLines: { width: 0 },
            labelFormat: "{value}", //aca saque el º
            title: "Calificación",
          }}
          // title="PROMEDIO GENERAL"
          title={"Promedio General de Posadas"}
          chartArea={{ border: { width: 0 } }}
          legendSettings={{
            mode: "Range",
          }}
          tooltip={{
            enable: true,
          }}
        >
          <Inject services={[ColumnSeries, Tooltip, Category, Legend]} />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={colorMappingData2[0]}
              name=""
              xName="x"
              yName="y"
              type="Column"
              animation={{ enable: false }}
              cornerRadius={{
                topLeft: 10,
                topRight: 10,
              }}
            ></SeriesDirective>
          </SeriesCollectionDirective>
          <RangeColorSettingsDirective>
            <RangeColorSettingDirective
              label="1°C to 10°C"
              start={1}
              end={10}
              colors={colorMappingData2[4]}
            ></RangeColorSettingDirective>
            <RangeColorSettingDirective
              label="11°C to 20°C"
              start={11}
              end={20}
              colors={colorMappingData2[4]}
            ></RangeColorSettingDirective>
            <RangeColorSettingDirective
              label="21°C to 30°C"
              start={21}
              end={30}
              colors={colorMappingData2[4]}
            ></RangeColorSettingDirective>
          </RangeColorSettingsDirective>
        </ChartComponent>
      </div>
    </div>
  );
};
export default Promedio;
