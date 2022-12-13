import './assets/css/index.css';
import React from 'react'
import ReactDOM from 'react-dom/client'
import { CalculatorProvider } from './store/CalculatorProvider';
import Calculator from './main/Calculator';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h1>Calculator</h1>
    <CalculatorProvider>
      <Calculator />
    </CalculatorProvider>
  </React.StrictMode>
)
