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
  const [hoteles, setHoteles] = useState([]);
  const [personal, setPersonal] = useState([]);

  useEffect(() => {
    // const endPoint = "http://localhost:3009/api/fedata/hoteles";
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const data = await fetch("http://localhost:3009/api/fedata/hoteles");
    const data2 = await data.json();

    let mostrar = data2[0];
    console.log(mostrar);

    setHoteles(mostrar);
    console.log("NOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO Funciona?");
    console.log(mostrar[0].Categoria.value);
    setPersonal(mostrar[0].Categoria.value);
  };

  const colorMappingData2 = [
    [
      //ajustes numeros de promedio(calificacion)
      { x: "Personal", y: personal },
      { x: "Limpieza", y: 83 },
      { x: "Precio/Calidad", y: 70 },
      { x: "Ubicación", y: 60 },
      { x: "Wi-fi", y: 50 },
      { x: "Total", y: 75 },
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
        {/* <div>
          <ul>
            {hoteles.map((item) => (
              <li key="item.id"> {item.Nombre.value}</li>
            ))}
          </ul>
        </div> */}
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
          title={"h"}
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
