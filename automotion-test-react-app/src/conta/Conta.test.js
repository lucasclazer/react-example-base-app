import React from 'react'
import { fireEvent, render, screen } from "@testing-library/react"
import Conta from "./Conta"



describe('Testing Account component', () => {
    it('Check if account balance is monetary value,.', ()=> {
        render(<Conta saldo={1000}/>)
    
        const balance = screen.getByTestId('saldo-conta');
        expect(balance.textContent).toBe('R$ 1000');

    })

    it('Verify if function was called when realize operation button was clicked.', ()=> {
        const realizeTransaction = jest.fn();

        render(<Conta salda={1000} realizarTransacao={realizeTransaction} />)
        fireEvent.click(screen.getByText('Realizar operação'))
        expect(realizeTransaction).toHaveBeenCalled()
    })
})