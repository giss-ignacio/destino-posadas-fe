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
import { useEffect, useState } from "react";

const Distribucion = () => {
  //porcentajes
  const [hotel, setHotel] = useState([]);
  const [residencial, setResidencial] = useState([]);
  const [hosteria, setHosteria] = useState([]);
  const [apartHotel, setApartHotel] = useState([]);
  //cantidades
  const [hotelCant, setHotelCant] = useState([]);
  const [residencialCant, setResidencialCant] = useState([]);
  const [hosteriaCant, setHosteriaCant] = useState([]);
  const [apartHotelCant, setApartHotelCant] = useState([]);

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const data = await fetch(
      "http://localhost:3009/api/fedata/distribucionAlojamientos"
    );
    const data2 = await data.json();
    let mostrar = data2[0];

    //seteo porcentajes
    setHotel(mostrar.Hoteles);
    setResidencial(mostrar.Residenciales);
    setHosteria(mostrar.Hosterias);
    setApartHotel(mostrar.ApartHoteles);

    //seteo cantidad de hoteles
    setHotelCant(mostrar.HotelesCant);
    setResidencialCant(mostrar.ResidencialesCant);
    setHosteriaCant(mostrar.HosteriasCant);
    setApartHotelCant(mostrar.ApartHotelesCant);
  };

  const pieChartData2 = [
    { x: "Hotel ,cantidad: " + hotelCant, y: hotel, text: hotel + "%" },
    {
      x: "Residencial ,cantidad: " + residencialCant,
      y: residencial,
      text: residencial + "%",
    },
    {
      x: "Hostería ,cantidad: " + hosteriaCant,
      y: hosteria,
      text: hosteria + "%",
    },
    {
      x: "Apart Hotel ,cantidad: " + apartHotelCant,
      y: apartHotel,
      text: apartHotel + "%",
    },
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

        <div>
          <br />
          <h1>
            Muestra la cantidad y el porcentaje de cada tipo de alojamiento de
            Posadas.
          </h1>
        </div>
      </div>
    </div>
  );
};
export default Distribucion;
