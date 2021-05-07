import styled from "styled-components";
import { corPrimaria } from "./variables";

export const Icone = styled.img`
  height: 25px;
  width: 25px;
`;

export const IconeTema = styled(Icone)`
  filter: ${({ theme }) => theme.filter};
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.inside};
  border-radius: 5px;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.04);
  padding: 20px;
  margin: 5px;
  width: 48%;
  @media (max-width: 800px) {
    width: 95%;
  }
`;

export const Botao = styled.button`
  margin: 15px auto 0px auto;
  display: block;
  border-radius: 20px;
  background-color: ${corPrimaria};
  border: none;
  color: white;
  font-weight: 600;
  font-size: 14px;
  padding: 8px 20px;
  cursor: pointer;
`;

export const Detalhe = styled.span`
  color: ${corPrimaria};
  font-size: 24px;
`;

export const Saldo = styled.div`
  font-weight: 700;
  font-size: 32px;
`;

export const BtnTema = styled.button`
  position: absolute;
  top: 4vh;
  right: 20px;
  background-color: inherit;
  border: none;
  cursor: pointer;
`;
