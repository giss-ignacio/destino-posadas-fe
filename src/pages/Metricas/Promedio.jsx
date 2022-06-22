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

const Promedio = () => {
  var axios = require("axios");

  var config = {
    method: "get",
    url: "http://localhost:3009/api/fedata/hoteles",
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      let dataMock = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });

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
          title="Promedios - Hoteles"
        >
          <Inject
            services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]}
          />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={barChartData[0]}
              xName="x"
              yName="y"
              name="hotel_clean"
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
              dataSource={barChartData[1]}
              xName="x"
              yName="y"
              name="hotel_comfort"
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
              dataSource={barChartData[2]}
              xName="x"
              yName="y"
              name="hotel_services"
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
              dataSource={barChartData[3]}
              xName="x"
              yName="y"
              name="hotel_location"
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
              dataSource={barChartData[4]}
              xName="x"
              yName="y"
              name="hotel_staff"
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
              dataSource={barChartData[5]}
              xName="x"
              yName="y"
              name="total"
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
              dataSource={barChartData[6]}
              xName="x"
              yName="y"
              name="hotel_value"
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
              dataSource={barChartData[7]}
              xName="x"
              yName="y"
              name="hotel_wifi"
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

export default Promedio;
