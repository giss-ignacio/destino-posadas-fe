//import React from 'react';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  SplineAreaSeries,
  Legend,
} from "@syncfusion/ej2-react-charts";

import { React, useEffect, useState } from "react";

const Wifi = () => {
  const [valor, setValor] = useState([]);

  var x
  useEffect(() => {
    obtenerDatos();
  }, []);
 // let m = "Enero";
 
 const obtenerDatos = async () => {
   const data = await fetch("http://localhost:3009/api/fedata/getServiciosHistorico2022?c=WiFi");
   const data2 = await data.json();
   setValor(data2[0])
   x = data2[0]
   console.log("Valor de data2 :")
   console.log(data2[0])
 };
 
 var respuesta =
 [
     [
     //Verde  Hoteles
     { x: new Date(2021, 7, 1), y: 9.1 },
     { x: new Date(2021, 8, 1), y: 3.4 },
     { x: new Date(2021, 9, 1), y: 3.4 },
     { x: new Date(2021, 10, 1), y: 1.6 },
     { x: new Date(2021, 11, 1), y: 2.3 },
     { x: new Date(2022, 0, 1), y: 2.5 },
     { x: new Date(2022, 1, 1), y: 2.9 },
     { x: new Date(2022, 2, 1), y: 3.8 },
     { x: new Date(2022, 3, 1), y: 1.4 },
     { x: new Date(2022, 4, 1), y: 3.1 },
     { x: new Date(2022, 5, 1), y: 9 },
   ],
   [
     //Verde  Recidencial
     { x: new Date(2021, 7, 1), y: 5 },
     { x: new Date(2021, 8, 1), y: 3.4 },
     { x: new Date(2021, 9, 1), y: 5.4 },
     { x: new Date(2021, 10, 1), y: 1.6 },
     { x: new Date(2021, 11, 1), y: 5.3 },
     { x: new Date(2022, 0, 1), y: 2.5 },
     { x: new Date(2022, 1, 1), y: 5.9 },
     { x: new Date(2022, 2, 1), y: 3.8 },
     { x: new Date(2022, 3, 1), y: 1.4 },
     { x: new Date(2022, 4, 1), y: 3.1 },
     { x: new Date(2022, 5, 1), y: 9 },
   ],
   [
     //Gris APART
     { x: new Date(2021, 7, 1), y: 5.9 },
     { x: new Date(2021, 8, 1), y: 5.3 },
     { x: new Date(2021, 9, 1), y: 4.8 },
     { x: new Date(2021, 10, 1), y: 4.3 },
     { x: new Date(2021, 11, 1), y: 5 },
     { x: new Date(2022, 0, 1), y: 5 },
     { x: new Date(2022, 1, 1), y: 5 },
     { x: new Date(2022, 2, 1), y: 8 },
     { x: new Date(2022, 3, 1), y: 8 },
     { x: new Date(2022, 4, 1), y: 8 },
     { x: new Date(2022, 5, 1), y: 9 },
   ],
   [
     //azul
     { x: new Date(2021, 7, 1), y: 0.8 },
     { x: new Date(2021, 8, 1), y: 1.3 },
     { x: new Date(2021, 9, 1), y: 1.1 },
     { x: new Date(2021, 10, 1), y: 1.6 },
     { x: new Date(2021, 11, 1), y: 2 },
     { x: new Date(2022, 0, 1), y: 1.7 },
     { x: new Date(2022, 1, 1), y: 2.3 },
     { x: new Date(2022, 2, 1), y: 2.7 },
     { x: new Date(2022, 3, 1), y: 1.1 },
     { x: new Date(2022, 4, 1), y: 2.3 },
     { x: new Date(2022, 5, 1), y: 9 },
   ],
 ];
 
 //const RRSS = () => {
   return (
     <div className='md:m-10 m-4 md:mt-40 mt-20'>
       <div className='w-full'>
         <ChartComponent
           id='charts'
           style={{ textAlign: 'center' }}
           primaryXAxis={{
             valueType: 'DateTime',
             labelFormat: 'y/MM',
             majorGridLines: { width: 0 },
             intervalType: 'Months',
             //intervalType: 'Years',
             edgeLabelPlacement: 'Shift',
           }}
           primaryYAxis={{
             labelFormat: '{value}',
             lineStyle: { width: 0 },
             maximum: 10,
             interval: 1,
             majorTickLines: { width: 0 },
             minorTickLines: { width: 0 },
           }}
           chartArea={{ border: { width: 0 } }}
           title='Valoración promedio de WiFi por tipo de Alojamiento'
         >
           <Inject services={[SplineAreaSeries, DateTime, Legend]} />
           <SeriesCollectionDirective>
             <SeriesDirective
               dataSource={respuesta[0]}
               xName='x'
               yName='y'
               name='Hotel'
               opacity={0.5}
               type='SplineArea'
               width={2}
             ></SeriesDirective>
             <SeriesDirective
               dataSource={respuesta[1]}
               xName='x'
               yName='y'
               name='Residencial'
               opacity={0.5}
               type='SplineArea'
               width={2}
             ></SeriesDirective>
             <SeriesDirective
               dataSource={respuesta[2]}
               xName='x'
               yName='y'
               name='Apart Hotel'
               opacity={0.5}
               type='SplineArea'
               width={2}
             ></SeriesDirective>
             <SeriesDirective
               dataSource={respuesta[3]}
               xName='x'
               yName='y'
               name='Hosteria'
               opacity={0.5}
               type='SplineArea'
               width={2}
             ></SeriesDirective>
           </SeriesCollectionDirective>
         </ChartComponent>
       </div>
     </div>
   );
 };

export default Wifi;
