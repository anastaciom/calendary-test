import styled, { css } from "styled-components";

const responsive = css`
  font-size: 22px;
  > button {
    height: 50%;
    width: 30px;
    align-items: center;
    justify-content: center;
    display: flex;
    border: none;
    border-radius: 50%;
    cursor: pointer;
  }

  @media only screen and (max-width: 600px) {
    font-size: 18px;
  }

  @media only screen and (max-width: 400px) {
    font-size: 16px;
    > button {
      height: 40%;
      width: 25px;
      border-radius: 40px;
      cursor: pointer;
    }
  }
`;

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  height: 60px;
  padding: 0px 10px 0px 10px;
  align-items: center;
  background-color: ${(props) => props.theme.primaryColor};
  color: white;
  font-weight: bold;

  ${responsive}
`;

const ListWrapper = styled.ul`
  list-style-type: none;
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const MonthAndYearOptionsWrapper = styled.li`
  width: 100%;
  > button {
    width: 100%;
    cursor: pointer;
    border-radius: 10px;
    font-size: 18px;
    outline: none;
    border: none;
    text-align: start;
    background-color: transparent;
    color: white;
    padding: 8px;
    margin-bottom: 6px;
    transition: background-color 0.3s;

    &:hover {
      background-color: #0000004c;
    }
  }
`;

const ChangeMonthButtonWrapper = styled.button`
  background-color: #0000004c;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.secondaryColor};
  }
`;

export {
  HeaderWrapper,
  ListWrapper,
  MonthAndYearOptionsWrapper,
  ChangeMonthButtonWrapper,
};
