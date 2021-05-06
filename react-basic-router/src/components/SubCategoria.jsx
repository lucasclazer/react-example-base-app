import React from "react";
import { useParams } from "react-router";
import ListaPost from "./ListaPost";

export default function SubCategoria() {
  const { subcategoria } = useParams();
  console.log("subCategoria teste", subcategoria);
  return (
    <>
      <ListaPost url={`/posts?subcategoria=${subcategoria}`} />
    </>
  );
}
