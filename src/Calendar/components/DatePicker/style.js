import styled from "styled-components";
import { getRgbString } from "../../core/utils/isRgb";

const InputWrapper = styled.div`
  display: flex;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  position: relative;

  &:focus-within {
    > label {
      color: ${({ theme }) => theme.primaryColor};
    }
  }
  > label + & {
    margin-top: 3px;
  }
  > label {
    color: ${({ theme }) => theme.inputLabelColor};
    font-size: 13px;
    line-height: 2;
  }
`;

const DatePickerWrapper = styled.input`
  outline: none;
  border: none;
  height: 100%;
  flex: 1;
  cursor: pointer;
  padding: 0 8px;
`;

const InputContentWrapper = styled.div`
  border-radius: 2px;
  &:focus-within {
    box-shadow: ${({ theme, $errorMode }) =>
      `0 0 0 0.2rem rgba(${getRgbString($errorMode ? theme.errorColor : theme.primaryColor)}, 0.25)`};
    border-color: ${({ theme, $errorMode }) =>
      $errorMode ? theme.errorColor : theme.primaryColor};
  }
  color: ${({ theme }) => theme.inputValueColor};
  transition:
    border-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  font-size: 15px;
  cursor: pointer;
  height: 36px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.inputBorderColor};
`;

const InputIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 8px;
  cursor: pointer;
  height: 100%;
`;

export {
  InputWrapper,
  DatePickerWrapper,
  InputContentWrapper,
  InputIconWrapper,
};
