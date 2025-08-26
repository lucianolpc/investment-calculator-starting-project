import { useState } from "react";

import { calculateInvestmentResults } from "../util/investment";

import UserInput from "./UserInput";
import Results from "./Results";

const initialValues = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0,
};

export default function MainBody() {
  console.log('MainBody Executado');
  const [values, setValues] = useState({...initialValues});

  function handleChange(value, inputName) {
    setValues(oldValues => {
      return {
        ...oldValues,
        [inputName]: parseFloat(value),
      }
    });
  }

  const results = calculateInvestmentResults({...values});

  return (
    <main>
      <UserInput handleChange={handleChange} values={values}/>
      <Results results={results} />
    </main>
  );
}
