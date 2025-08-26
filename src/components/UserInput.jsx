import PropTypes from "prop-types";

import InputBlock from "./InputBlock";

export default function UserInput({ handleChange, values }) {  
  return (
    <section id="user-input" className="input-group">
      <InputBlock
        inputId="initialInvestment"
        inputName="Initial Investment"
        initialValue={values.initialInvestment}
        changeHandler={handleChange}
      />
      <InputBlock
        inputId="annualInvestment"
        inputName="Annual Investment"
        initialValue={values.annualInvestment}
        changeHandler={handleChange}
      />
      <InputBlock
        inputId="expectedReturn"
        inputName="Expected Return"
        initialValue={values.expectedReturn}
        changeHandler={handleChange}
      />
      <InputBlock
        inputId="duration"
        inputName="Duration"
        initialValue={values.duration}
        changeHandler={handleChange}
      />
    </section>
  );
}

UserInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
};
