import React from "react";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationLegend,
  PieSeries,
  AccumulationDataLabel,
  Inject,
} from "@syncfusion/ej2-react-charts";
import { pieChartData } from "../../data/dummy";
import { useEffect, useState } from "react";

const Distribucion = () => {
  // const [hoteles, setHoteles] = useState([]);
  const [hotel, setHotel] = useState([]);
  const [residencial, setResidencial] = useState([]);
  const [hosteria, setHosteria] = useState([]);
  const [apartHotel, setApartHotel] = useState([]);

  useEffect(() => {
    // const endPoint = "http://localhost:3009/api/fedata/hoteles";
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const data = await fetch("http://localhost:3009/api/fedata/hoteles");
    const data2 = await data.json();

    let mostrar = data2[0];
    console.log(mostrar);

    // setHoteles(mostrar);
    console.log(mostrar[0].Categoria.value);
    setHotel(mostrar[0].Categoria.value);
    setResidencial(10);
    setHosteria(20);
    setApartHotel(30);
  };

  const pieChartData2 = [
    { x: "Hotel", y: hotel, text: hotel + "%" },
    { x: "Residencial", y: residencial, text: residencial + "%" },
    { x: "Hostería", y: hosteria, text: hosteria + "%" },
    { x: "Apart Hotel", y: apartHotel, text: apartHotel + "%" },
  ];

  return (
    <div className="md:m-10 m-4 md:mt-40 mt-20">
      <div className="w-full">
        <AccumulationChartComponent
          id="pie-chart"
          title="Distribución de alojamientos por segmento"
          legendSettings={{
            visible: true,
            position: "Top",
          }}
          enableSmartLabels={true}
        >
          <Inject
            services={[AccumulationLegend, PieSeries, AccumulationDataLabel]}
          />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              name="Project"
              dataSource={pieChartData2}
              xName="x"
              yName="y"
              innerRadius="40%"
              startAngle={0}
              endAngle={360}
              radius="70%"
              explode={true}
              explodeOffset="10%"
              explodeIndex={3}
              dataLabel={{
                visible: true,
                name: "text",
                position: "Inside",
                font: {
                  fontWeight: "600",
                  color: "#ffffff",
                },
              }}
            ></AccumulationSeriesDirective>
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>
    </div>
  );
};
export default Distribucion;
