import React from "react";

export default function CategoryList(props) {
  const _handleInputAddCategory = (e) => {
    if (e.key === "Enter")
      props.addCategory && props.addCategory(e.target.value);
  };
  return (
    <section>
      <ul>
        {props.categories &&
          props.categories.map((category, index) => (
            <li key={index}>{category.name}</li>
          ))}
      </ul>
      <input
        placeholder="Adicionar categoria"
        type="text"
        onKeyUp={_handleInputAddCategory}
      />
    </section>
  );
}
