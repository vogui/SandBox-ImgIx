import styled from "styled-components";
import { mobile, colors } from "../Helper/styleHelper";

export const Container = styled.div`
  width: 100%;
  height: 60px;
  position: fixed;
  bottom: 0;
  left: 0;
  background: ${colors.gray};
  box-sizing: border-box;
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 2;
  @media (max-width: ${mobile}) {
    flex-direction: column;
    height: 120px;
    justify-content: center;
  }
`;
export const Contact = styled.div`
  width: 30%;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const A = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-family: Roboto;
  font-weight: 300;
  font-size: 100%;
  color: #eeeef0;
`;
