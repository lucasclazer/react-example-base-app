import { useState } from "react";

function useErrors(validations) {
  const initialState = initializeState(validations);

  const [errors, setErrors] = useState(initialState);
  const validateField = (event) => {
    const { name, value } = event.target;
    const validated = validations[name](value);
    const newErrors = { ...errors };
    newErrors[name] = validated;
    setErrors(newErrors);
  };

  const validateFields = () => {
    console.log("errors", errors);
    for (let field in errors) {
      if (errors[field]) {
        return false;
      }
    }
    return true;
  };

  return [errors, validateField, validateFields];
}

function initializeState(validations) {
  const initialState = {};
  for (let field in validations) {
    const obj = {};
    obj[field] = false;
    initialState[field] = obj[field];
  }
  return initialState;
}

export default useErrors;
