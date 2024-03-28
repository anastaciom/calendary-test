import styled from "styled-components";

const ErrorMessageWrapper = styled.p`
  color: ${(props) => props.theme.errorColor};
  font-size: 12px;
  padding: 0px;
  margin: 4px 0px 0px 0px;
`;

export { ErrorMessageWrapper };
