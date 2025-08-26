import PropTypes from "prop-types";

export default function InputBlock({
  inputName,
  inputId,
  initialValue,
  changeHandler,
}) {
  const errorMessage = initialValue < 0 ? <p>Invalid number!</p> : null;

  return (
    <div>
      <label htmlFor={inputName}>{inputName}</label>
      <input
        id={inputName}
        value={initialValue}
        type="number"
        onChange={(event) => changeHandler(event.target.value, inputId)}
      />
      {errorMessage}
    </div>
  );
}

InputBlock.propTypes = {
  inputId: PropTypes.number.isRequired,
  inputName: PropTypes.string.isRequired,
  initialValue: PropTypes.number.isRequired,
  changeHandler: PropTypes.func.is,
};
