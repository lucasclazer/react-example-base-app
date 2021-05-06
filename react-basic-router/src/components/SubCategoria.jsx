import React from "react";
import { useParams } from "react-router";
import ListaPost from "./ListaPost";

export default function SubCategoria() {
  const { subcategoria } = useParams();

  return (
    <>
      <ListaPost url={`/posts?subCategoria=${subcategoria}`} />
    </>
  );
}
