import styled from "styled-components";
import { mobile, colors} from "../Helper/styleHelper";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  background: ${colors.black_gray};
  flex-direction: column;
  padding: 60px 0;
  @media (max-width: ${mobile}) {
    padding-bottom: 120px;
  }
`;
