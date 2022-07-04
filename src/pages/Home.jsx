import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { BsBoxSeam } from "react-icons/bs";
import { FiBarChart } from "react-icons/fi";
import { HiOutlineRefresh } from "react-icons/hi";
import StackedChart from "../components/StackedChart";
import { useEffect, useState } from "react";

const Home = () => {
  const [promedioPorNoche, setPromedioPorNoche] = useState([]);
  const [totalOpiniones, setTotalOpiniones] = useState([]);
  const [cantidadAlojamientos, setCantidadAlojamientos] = useState([]);
  const [dolar, setDolar] = useState([]);
  const [dolarOficial, setDolarOficial] = useState([]);
  const [euro, setEuro] = useState([]);
  const [euroOficial, setEuroOficial] = useState([]);

  const [fecha, setFecha] = useState([]);
  const [cantServicios, setCantServicios] = useState([0]);

  useEffect(() => {
    obtenerDatos();
  });

  const obtenerDatos = async () => {
    //promedio por noche
    const data = await fetch("http://localhost:3009/api/fedata/promedioNoche");
    const data2 = await data.json();
    let monto = data2[0];
    setPromedioPorNoche(monto);
    //total opiniones
    const opiniones = await fetch(
      "http://localhost:3009/api/fedata/totalOpiniones"
    );
    const opiniones2 = await opiniones.json();
    let totalOpiniones = opiniones2[0];
    setTotalOpiniones(totalOpiniones);
    //cantidad alojamientos
    const datos = await fetch(
      "http://localhost:3009/api/fedata/distribucionAlojamientos"
    );
    const data3 = await datos.json();
    let cantidadAlojamientos =
      data3[0].HotelesCant +
      data3[0].ApartHotelesCant +
      data3[0].ResidencialesCant +
      data3[0].HosteriasCant;

    setCantidadAlojamientos(cantidadAlojamientos);

    //dolar
    const cotizaciones = await fetch("https://api.bluelytics.com.ar/v2/latest");
    const objCotizaciones = await cotizaciones.json();
    setDolar(objCotizaciones.blue.value_avg);
    setDolarOficial(objCotizaciones.oficial.value_avg);
    setEuro(objCotizaciones.oficial_euro.value_avg);
    setEuroOficial(objCotizaciones.blue_euro.value_avg);

    //fecha
    const fechaBd = await fetch(`http://localhost:3009/api/fedata/fecha`);
    const objFechaBd = await fechaBd.json();
    setFecha(objFechaBd[0][0].fecha);

    //cantidad de servicios

    const cantServ = await fetch(
      `http://localhost:3009/api/fedata/promedioPosadas`
    );
    const objProm = await cantServ.json();
    if (objProm.personal != null) {
      setCantServicios(Object.keys(objProm).length);
    }
  };

  const subirData = () => {
    var requestOptions = {
      method: "POST",
      redirect: "follow",
    };

    fetch("http://localhost:3009/api/loader/subirData", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .then(() => obtenerDatos())
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="mt-24">
      <div className="flex flex-wrap justify-center">
        <div className="bg-white rounded-xl w-full lg:w-80 p-8 m-3">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-500">
                Precio promedio de habitación por noche
              </p>
              <p className="text-2xl">${promedioPorNoche}</p>
            </div>
            <button className="text-2xl bg-light-red opacity-0.9 text-white rounded-full  p-4">
              <BsCurrencyDollar />
            </button>
          </div>
        </div>
        <div className="flex m-3 flex-wrap justify-center">
          <div className="bg-white w-56 p-4 rounded-l-2xl border-r-1 border-color">
            <button className="text-2xl text-light-blue bg-icon-light-blue opacity-0.9 rounded-full  p-4">
              <MdOutlineSupervisorAccount />
            </button>
            <p className="mt-3">
              <span className="text-lg font-semibold">{totalOpiniones}</span>
            </p>
            <p className="text-sm text-gray-500 mt-1">Total de opiniones</p>
          </div>
          <div className="bg-white w-56 p-4 border-r-1 border-color">
            <button className="text-2xl text-icon-light-orange bg-icon-light-orange opacity-0.9 rounded-full  p-4">
              <BsBoxSeam />
            </button>
            <p className="mt-3">
              <span className="text-lg font-semibold">
                {cantidadAlojamientos}
              </span>
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Cantidad de alojamientos
            </p>
          </div>{" "}
          <div className="bg-white w-56 p-4 border-r-1 border-color">
            <button className="text-2xl text-icon-light-red bg-icon-light-red opacity-0.9 rounded-full  p-4">
              <FiBarChart />
            </button>
            <p className="mt-3">
              <span className="text-lg font-semibold">{cantServicios}</span>
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Cantidad de servicios analizados
            </p>
          </div>
          <div className="bg-white w-56 p-4 rounded-r-2xl border-r-1 border-color">
            <button
              onClick={() => [
                setFecha(
                  new Date().getDate() +
                    "/" +
                    (new Date().getMonth() + 1) +
                    "/" +
                    new Date().getFullYear()
                ),
                subirData(),
              ]}
              className="text-2xl text-icon-light-green bg-icon-light-green opacity-0.9 rounded-full  p-4"
            >
              <HiOutlineRefresh />
            </button>

            <p className="mt-3">
              <span className="text-lg font-semibold">{fecha}</span>
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Fecha de última actualización
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white m-3 p-4 rounded-2xl w-780 ">
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Resumen</p>
          </div>
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className=" border-r-1 border-color m-4 pr-10">
              <div></div>
              <div className="mt-1">
                <p className="text-gray-500 mt-1">Precio Dolar Oficial</p>
                <p className="text-3xl font-semibold">${dolarOficial}</p>
                <br />
                <p className="text-gray-500 mt-1">Precio Dolar Blue</p>
                <p className="text-3xl font-semibold">${dolar}</p>
                <br />
                <p className="text-gray-500 mt-1">Precio Euro Oficial</p>
                <p className="text-3xl font-semibold">${euroOficial}</p>
                <br />
                <p className="text-gray-500 mt-1">Precio Euro Blue</p>
                <p className="text-3xl font-semibold">${euro}</p>
              </div>
              <div className="mt-10"></div>
            </div>
            <div>
              <StackedChart />
            </div>
          </div>
        </div>
        <div>
          <div className="bg-light-red rounded-xl w-400 p-8 m-3">
            <iframe
              src="https://one-point-map.herokuapp.com/?lat=-27.39&long=-55.92"
              width="339px"
              height="450px"
              title="map"
            />
          </div>
        </div>
      </div>

      <div className="flex gap-10 m-4 flex-wrap justify-center"></div>
    </div>
  );
};

export default Home;
