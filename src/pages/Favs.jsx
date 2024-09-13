import React, { useContext, useEffect, useState } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../global.context";

const Favs = () => {
  const { favDentists } = useContext(ContextGlobal).contextValue;
  const [favorites, setFavorites] = useState(favDentists.sort((a,b)=> a.id - b.id));

  useEffect(() => {
    setFavorites(favDentists);
  }, [favDentists]);

  return (
    <main className="">
      <h1>Dentistas Favoritos</h1>
      {favDentists.length ? (
        <div className="card-grid">
          {favorites &&
            favorites.map((user, index) => (
              <Card key={`${index}-${user.id}`} user={user} />
            ))}
        </div>
      ) : (
        <>No tienes favoritos</>
      )}
    </main>
  );
};

export default Favs;
