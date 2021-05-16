
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import App, { calcularNovoSaldo } from './App';


describe("Test Main app.js", () => {
  describe('On app start', () => {
    test("check bank name", () => {
      //renders the component
      render(<App />);
      //search into the componente for the specfic text.
      expect(screen.getByText("ByteBank")).toBeInTheDocument();
    });

    it('check Show Balance text.', () => {
      render(<App />);
      expect(screen.getByText('Saldo:')).toBeInTheDocument();
    })

    it('check Transaction button', () => {
      render(<App />);
      expect(screen.getByText('Realizar operação')).toBeInTheDocument();
    })
  })


  describe('When transaction was done', () => {
    //testing specific function
    it('check withdraw transaction', () => {
      const values = {
        transacao: 'saque',
        valor: 50
      }

      const newBalance = calcularNovoSaldo(values, 150);

      expect(newBalance).toBe(100);

    });
    it('check withdraw realized', ()=>{
      const {getByText, getByTestId, getByLabelText } = render(<App />);
    
      const balance = getByText("R$ 1000");
      const trasaction = getByLabelText('Saque')
      const value = getByTestId('valor')
      const transactionButton = getByText('Realizar operação')

      expect(balance.textContent).toBe('R$ 1000') //check bank default value
      
      //creates dom event
      fireEvent.click(trasaction, {target: {value: 'saque'}})
      fireEvent.change(value, {target: {value: 100}})
      fireEvent.click(transactionButton)

      //verify final account balance 
      expect(balance.textContent).toBe('R$ 900')   
    })


  })

});

