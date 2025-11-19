import { useContext, useState } from "react";
import { Link } from "react-router";
import { FavoritesContext } from "../store/FavoritesContext";

export function Card({ data, category }) {
  const { toggleFavorite, favoriteExists } = useContext(FavoritesContext);
  const { name, uid } = data;

  return (
    <div className="card col-4">
      <img
        src={`/images/${category}/${name.toLowerCase().replace("/", "-").split(" ").join("-")}.jpg`}
        alt="image"
        className="object-fit-cover"
        style={{ height: "250px" }}
      />
      <div className="card-body">
        <div className="card-title">{name}</div>
      </div>
      <div className="card-footer d-flex justify-content-between border-0">
        <Link className="btn btn-outline-primary" to={`${category}/${uid}`}>
          Learn More!
        </Link>
        <button
          className={`btn btn-outline-warning ${
            favoriteExists(uid, name) ? "active" : ""
          }`}
          onClick={() => toggleFavorite(category, uid, name)}
        >
          {favoriteExists(uid, name) ? "♥" : "♡"}
        </button>
      </div>
    </div>
  );
}
