import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDentistById } from "../services/dentists";

const Detail = () => {
  const params = useParams();
  const { id } = params;
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const dentist = await getDentistById(id);
      setData(dentist);
    };

    fetchData();
  }, [params]);

  return (
    <>
      <h1>Datos del dentista ID: {id}</h1>
      {data && (
        <div className="dentist-info">
          <span className="info-title">Nombre: </span>
          <p className="info-data">{data.name}</p>
          <span className="info-title">Usuario: </span>
          <p className="info-data">{data.username}</p>
          <span className="info-title">E-mail: </span>
          <p className="info-data">{data.email}</p>
          <span className="info-title">Teléfono: </span>
          <p className="info-data">{data.phone}</p>
          <span className="info-title">Sitio Web: </span>
          <p className="info-data">{data.website}</p>
        </div>
      )}
    </>
  );
};

export default Detail;
