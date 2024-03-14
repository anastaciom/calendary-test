import styled from "styled-components";

const InputWrapper = styled.div`
  display: flex;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  position: relative;

  &:focus-within {
    > div {
      border-color: #2196f3;
    }
    > label {
      color: #2196f3;
    }
  }
  > label + & {
    margin-top: 3px;
  }
  > label {
    color: rgba(69, 90, 100, 0.54);
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
  color: rgba(69, 90, 100, 0.87);
  transition: border-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-size: 15px;
  cursor: pointer;
  height: 36px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #cfd8dc; //TODO: ASDDASDAS
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
