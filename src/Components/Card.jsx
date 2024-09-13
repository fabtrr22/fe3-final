import { useContext, useState } from "react";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import picture from "../assets/doctor.png";
import { Link } from "react-router-dom";
import { ContextGlobal } from "../global.context";

const isFav = (data, id)=>{
  return data.some(item => item.id === id);
}

const Card = ({ user }) => {
  const { id, name, username } = user;
  const { addNewFav, removeFav, favDentists } = useContext(ContextGlobal).contextValue;
  const [fav, setFav] = useState(isFav(favDentists, id));

  const toggleFav = () => {
    if(fav){
      removeFav(user);
    }else{
      addNewFav(user);
    }
    setFav(!fav);
  };

  return (
    <div className="card">
      <button onClick={toggleFav} className="favButton">
        {fav ? (
          <AiTwotoneHeart className={`fav-icon`} />
        ) : (
          <AiOutlineHeart className={`fav-icon`} />
        )}
      </button>

      <Link to={`/dentist/${id}`}>
        <div className="top-card">
          <img src={picture} alt="Picture dentist" />
          <p>{name}</p>
        </div>
        <div className="dentist-data">
          <span>ID: {id}</span>
          <p>Usuario: {username}</p>
        </div>

      </Link>
    </div>
  );
};

export default Card;
