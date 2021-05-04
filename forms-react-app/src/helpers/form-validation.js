function validateCpf(cpf) {
  if (cpf && cpf.length !== 11) {
    return "Cpf deve ter 11 digitos";
  } else {
    return;
  }
}

function validatePassword(password) {
  if (!password || password.length < 4 || password.length > 72) {
    return "Senha inválida. A senha deve possuir entre 4 e 72 digitos.";
  }
  return;
}
export { validateCpf, validatePassword };
