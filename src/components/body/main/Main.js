import React from 'react';
// import Calc from './calc/Calc';
// import Calc1 from './calc/Calc1';
import Calc2 from './calc/Calc2';
import './Main.css'



function Main() {
  return (
  <div className="col-lg-8">
      <h1>UAE VAT Tax Calculator</h1>
          <div className="instructions padding">
              <p>Enter the value and press enter or click calculate button to see VAT percentage.</p>
          </div>
          <section className="calculator-form">
            <Calc2/>
          </section>
  </div >
  );
}

export default Main;