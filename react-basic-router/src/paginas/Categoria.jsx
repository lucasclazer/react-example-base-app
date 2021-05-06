import React, { useEffect, useState } from "react";
import { Route, Switch, useParams, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import { busca } from "../api/api";
import "../assets/css/blog.css";
import ListaCategorias from "../components/ListaCategorias";
import ListaPost from "../components/ListaPost";
import SubCategoria from "../components/SubCategoria";

export default function Categoria() {
  const { id } = useParams();
  const { url, path } = useRouteMatch();
  const [subCategories, setSubCategories] = useState([]);

  useEffect(() => {
    busca(`/categorias/${id}`, (categoria) => {
      setSubCategories(categoria.subcategorias);
    }).catch((err) => setSubCategories([]));
  }, [id]);

  return (
    <>
      <div className="container">
        <h2 className="titulo-pagina">Pet Notícias</h2>
      </div>
      <ListaCategorias />
      <ul className="lista-categorias container flex">
        {subCategories &&
          subCategories.map((subCategorie) => (
            <li
              className={`lista-categorias__categoria lista-categorias__categoria--${id}`}
              key={subCategorie}
            >
              <Link to={`${url}/${subCategorie}`}>{subCategorie}</Link>
            </li>
          ))}
      </ul>
      <Switch>
        <Route exact path={`${path}/`}>
          <ListaPost url={`/posts?categoria=${id}`} />
        </Route>
        <Route exact path={`${path}/:subcategoria`}>
          <SubCategoria />
        </Route>
      </Switch>
    </>
  );
}
