import React, { useEffect, useReducer } from "react";
import Card from "../Components/Card";
import dataReducer, { initialDataState } from "../reducers/Dentists";
import { getAllDentists } from "../services/dentists";
import SkeletonCard from "../Components/SkeletonCard";

const Home = () => {
  const [state, dispatch] = useReducer(dataReducer, initialDataState);
  const dentists = state.data;

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_DATA" });
      try {
        const response = await getAllDentists();
        setTimeout(() => {
          dispatch({ type: "FETCH_DATA_SUCCESS", payload: response });
        }, 1500);
      } catch (error) {
        dispatch({ type: "FETCH_DATA_ERROR", payload: error.message });
      }
    };

    fetchData();
  }, []);


  return (
    <main className="">
      <h1>Listado de Dentistas</h1>
      <div className="card-grid">
        {state.loading ? 
          Array.from({length: 10}, (_, index) => (
            <SkeletonCard key={index}/>
          )
        ) : (
          dentists &&
          dentists.map((user, index) => <Card key={index} user={user} />)
        )}
      </div>
    </main>
  );
};

export default Home;
