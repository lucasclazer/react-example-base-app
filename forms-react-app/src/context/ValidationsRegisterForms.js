import { createContext } from "react";
import { validateCpf, validatePassword } from "../helpers/form-validation";

const ValidationsRegisterForms = createContext({
  cpf: validateCpf,
  password: validatePassword,
});

export default ValidationsRegisterForms;
