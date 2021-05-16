
import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';



describe("Test Main app.js", () => {
  it("Testing bank name", () => {
    render(<App />);
    expect(screen.getByText("ByteBank")).toBeInTheDocument();
  });
});


