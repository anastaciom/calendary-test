import React from "react";
import PropTypes from "prop-types";
import { ContentWrapper, OptionWrapper } from "./style";

const Content = ({
  handlePeriodSelection,
  value,
  id,
  inputName,
  isChecked,
}) => {
  return (
    <ContentWrapper tabIndex={0} role="radio" aria-checked={isChecked}>
      <OptionWrapper>
        <input
          type="radio"
          id={id}
          name={inputName}
          value={value}
          readOnly
          checked={isChecked}
          onChange={handlePeriodSelection}
          tabIndex={-1}
        />
        <label htmlFor={id}>{value}</label>
      </OptionWrapper>
    </ContentWrapper>
  );
};

Content.propTypes = {
  handlePeriodSelection: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
};

export { Content };
