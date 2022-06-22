import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export function GetDataOrion() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const endPoint = "http://localhost:1026/v2/entities/";

    axios
      .get(endPoint)
      .then((res) => {
        const apiData = res.data;
        setData(apiData);
      })
      .catch((error) => {
        alert(<h2>Hubo errores, intenta mas tarde!</h2>);
      });
  }, []);

  return <div>{data}</div>;
}
