import PropTypes from "prop-types";

export default function InputBlock({
  inputName,
  inputId,
  initialValue,
  changeHandler,
}) {
  return (
    <div>
      <label htmlFor={inputName}>{inputName}</label>
      <input
        id={inputName}
        value={initialValue}
        type="number"
        onChange={(event) => changeHandler(event.target.value, inputId)}
      />
    </div>
  );
}

InputBlock.propTypes = {
  inputId: PropTypes.number.isRequired,
  inputName: PropTypes.string.isRequired,
  initialValue: PropTypes.number.isRequired,
  changeHandler: PropTypes.func.is,
};
