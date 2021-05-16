
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import api from './api';

jest.mock('./api');

describe("Test Api requisitions", () => {
  it("Verify if transaction is returning correct values.", async () => {
    api.listaTransacoes.mockResolvedValue([
      {
        "valor": "10",
        "transacao": "saque",
        "data": "10/08/2020",
        "id": 1
      },
      {
        "transacao": "deposito",
        "valor": "20",
        "data": "26/09/2020",
        "id": 2
      },
    ]);

    render(<App />);
    expect(await screen.findByText('saque')).toBeInTheDocument();

    expect(screen.getByTestId('transacoes').children.length).toBe(2);
  });



})


