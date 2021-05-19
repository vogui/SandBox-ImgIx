import styled from "styled-components";
import { colors } from "../Helper/styleHelper";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: ${colors.gray};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const P = styled.p`
  font-weight: 700;
  font-size: 200%;
  margin: 0;
  color: ${colors.white};
`;
