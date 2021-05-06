import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { busca } from "../api/api";
import "../assets/css/blog.css";

export default function ListaCategorias() {
  const [categories, setCategorries] = useState([]);
  useEffect(() => {
    busca(`/categorias`, setCategorries);
  }, []);
  return (
    <ul className="lista-categorias container flex">
      {categories.map((categorie) => (
        <Link to={`/categoria/${categorie.id}`}>
          <li
            className={`lista-categorias__categoria lista-categorias__categoria--${categorie.id}`}
          >
            {categorie.nome}
          </li>
        </Link>
      ))}
    </ul>
  );
}
