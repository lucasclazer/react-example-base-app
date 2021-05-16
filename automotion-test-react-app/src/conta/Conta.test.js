import React from 'react'
import { render, screen } from "@testing-library/react"
import Conta from "./Conta"



describe('Testing Account component', () => {
    it('checking balance as monetary value', ()=> {
        render(<Conta saldo={1000}/>)
    
        const balance = screen.getByTestId('saldo-conta');
        expect(balance.textContent).toBe('R$ 1000');

    })

})