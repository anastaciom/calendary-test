import React from "react";
import PropTypes from "prop-types";
import { ErrorMessageWrapper } from "./style";

const ErrorMessage = ({
  touched,
  selectedDateTime,
  isRequired,
  errorMessage,
}) => {
  let errorText = "";

  if (touched && !selectedDateTime && isRequired) {
    errorText = "Campo obrigatório.";
  } else if (selectedDateTime && errorMessage) {
    errorText = errorMessage;
  }

  return <ErrorMessageWrapper>{errorText}</ErrorMessageWrapper>;
};

ErrorMessage.defaultProps = {
  errorMessage: "",
};

ErrorMessage.propTypes = {
  touched: PropTypes.bool.isRequired,
  selectedDateTime: PropTypes.bool.isRequired,
  isRequired: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
};

export { ErrorMessage };
