import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  HiloSeries,
  Tooltip,
  DateTime,
  Zoom,
  Logarithmic,
  Crosshair,
} from "@syncfusion/ej2-react-charts";
// import { financialChartData } from "../../data/dummy";
import { useEffect, useState } from "react";

const EvolucionPrecios = () => {
  const [maxNov, setMaxNov] = useState([]);
  const [minNov, setMinNov] = useState([]);
  const [maxDic, setMaxDic] = useState([]);
  const [minDic, setMinDic] = useState([]);
  const [maxEne, setMaxEne] = useState([]);
  const [minEne, setMinEne] = useState([]);
  const [maxFeb, setMaxFeb] = useState([]);
  const [minFeb, setMinFeb] = useState([]);

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const data = await fetch(
      "http://localhost:3009/api/fedata/evolucionprecios"
    );
    const data2 = await data.json();
    const obj = data2[0];
    setMaxNov(obj.maxNov);
    setMinNov(obj.minNov);
    setMaxDic(obj.maxDic);
    setMinDic(obj.minDic);
    setMaxEne(obj.maxEne);
    setMinEne(obj.minEne);
    setMaxFeb(obj.maxFeb);
    setMinFeb(obj.minFeb);
  };

  const financialChartData2 = [
    {
      x: new Date("2021-11-02"),
      open: 160.14,
      high: maxNov,
      low: minNov,
      close: 164.05,
      volume: 125610990555,
    },
    {
      x: new Date("2021-12-02"),
      open: 160.14,
      high: maxDic,
      low: minDic,
      close: 164.05,
      volume: 125610990,
    },
    {
      x: new Date("2022-01-02"),
      open: 160.14,
      high: maxEne,
      low: minEne,
      close: 164.05,
      volume: 125610990,
    },
    {
      x: new Date("2022-02-02"),
      open: 16000.14,
      high: maxFeb,
      low: minFeb,
      close: 164.05,
      volume: 125610990,
    },
  ];

  let date1 = new Date("2021, 09, 25");
  let returnValue = financialChartData2.filter(filterValue);
  function filterValue(value) {
    if (value.x >= date1) {
      // eslint-disable-next-line no-sequences
      return value.x, value.high, value.low;
    }
  }
  return (
    <div className="md:m-10 m-4 md:mt-40 mt-20">
      <div className="w-full">
        <ChartComponent
          id="charts"
          style={{ textAlign: "center" }}
          primaryXAxis={{
            valueType: "DateTime",
            minimum: new Date("2021, 10, 15"),
            maximum: new Date("2022, 02, 05"),
            crosshairTooltip: { enable: true },
            majorGridLines: { width: 1 },
          }}
          primaryYAxis={{
            title: "Precio",
            minimum: 1000,
            maximum: 15000,
            interval: 10000,

            lineStyle: { width: 1 },
            majorTickLines: { width: 1 },
          }}
          legendSettings={{ visible: false }}
          chartArea={{ border: { width: 1 } }}
          tooltip={{ enable: true, shared: true }}
          crosshair={{
            enable: true,
            lineType: "Vertical",
            line: { width: 1 },
          }}
          title="Evolución de precios"
        >
          <Inject
            services={[
              HiloSeries,
              Tooltip,
              DateTime,
              Logarithmic,
              Crosshair,
              Zoom,
            ]}
          />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={returnValue}
              xName="x"
              yName="low"
              name="Posadas"
              type="Hilo"
              low="low"
              high="high"
            ></SeriesDirective>
          </SeriesCollectionDirective>
        </ChartComponent>
        <div>
          <br />
          <h1>
            Se muestran los precios mínimos y máximos de todos los tipos de
            alojamiento a lo largo de los meses.
          </h1>
        </div>
      </div>
    </div>
  );
};
export default EvolucionPrecios;
