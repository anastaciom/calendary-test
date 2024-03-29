import styled from "styled-components";

const ContentWrapper = styled.fieldset`
  border: none;
`;

const OptionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 6px;

  input[type="radio"] {
    margin: 0px;
    appearance: none;
    border: 2px solid ${(props) => props.theme.divider};
    height: 20px;
    width: 20px;
    border-radius: 50%;
  }

  input[type="radio"]:checked {
    background-color: ${(props) => props.theme.primaryColor};
  }
`;

export { ContentWrapper, OptionWrapper };
