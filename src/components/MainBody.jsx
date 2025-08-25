import { useState } from "react";

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
        [inputName]: value,
      }
    });
  }

  return (
    <main>
      <UserInput handleChange={handleChange} values={values}/>
      <Results />
    </main>
  );
}
