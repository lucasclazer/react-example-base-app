
import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';


describe("Test Main app.js", () => {
  describe('On app start', () => {
    it("check bank name", () => {
    //renders the component
      render(<App />);
      //search into the componente for the specfic text.
      expect(screen.getByText("ByteBank")).toBeInTheDocument();
    });
    
    it('check Show Balance text.', () => {
      render(<App/>);
      expect(screen.getByText('Saldo:')).toBeInTheDocument();
    })
  
    it('check Transaction button', () => {
      render(<App/>);
      expect(screen.getByText('Realizar operação')).toBeInTheDocument();
    })
  })
  
});

