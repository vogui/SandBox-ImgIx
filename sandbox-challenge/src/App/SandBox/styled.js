import styled from "styled-components";
import { colors, mobile } from "../Helper/styleHelper";

export const Image = styled.img`
@media (max-width: ${mobile}) {
  width: 200px;
  height: 200px;;
}`;

export const SpaceController = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  @media (max-width: ${mobile}) {
    flex-direction: column-reverse;
  }
`;
export const Menu = styled.h1`
color:${colors.white};
font-size:100%
font-family: "Times New Roman";
margin-bottom:0;
`

export const MenuImg = styled.div`
  width: 20%;
  display:flex;
  flex-direction: column;
  align-items: center;
  background: ${colors.gray};
  height:800px;
  @media (max-width: ${mobile}) {
    height:500px;
    width: 100%;
    justify-content: end;
  }
`;
export const ImageContainer = styled.div`
  background: ${colors.black};
  width: 95%;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  @media (max-width: ${mobile}) {
    height: 350px;
  }
`;

export const DropContainer = styled.div`
  display: flex;
  width: 50%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const Buttom = styled.button`
  font-family: "Times New Roman";
  color: ${colors.black_gray};
  height: 50px;
  width: 50%;
  font-size: 120%;
  margin-top: 10%;
  cursor: pointer;
  @media (max-width: ${mobile}) {
    margin-top: 5%;
    width: 30%;
  }
`;
export const ButtomDownload = styled.button`
  font-family: "Times New Roman";
  color: ${colors.black_gray};
  height: 50px;
  width: 100%;
  margin-left: 25%;
  font-size: 120%;
  margin-top: 25%;
  cursor: pointer;
  @media (max-width: ${mobile}) {
    margin-left: 0;
  }
`;

export const Url = styled.div`
  font-family: Times New Roman;
  color: ${colors.black_gray};
  height: 50px;
  width: 105%;
  font-size: 100%;
  margin-top: 5px;
  outline: none;
  cursor: pointer;
`;

export const WebImg = styled.input`
  height: 30px;
  width: 80%;
  margin-top: 15px;
  margin-bottom: 15px;
  padding-left: 20px;
  border-radius: 20px;
  outline: none;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 500px;
`;

export const Ele = styled.div`
  font-family: Times New Roman;
  color: ${colors.black_gray};
  height: 20px;
  width: 100%;
  font-size: 50%;
  margin-top: 5px;
  outline: none;
  cursor: pointer;
`;
export const PUrl = styled.p``;

export const DropDown = styled.div`
  ${(props) => {
    return !props.show ? `visibility: hidden` : `visibility: visible`;
  }};
  position: absolute;
  top: 220px;
  display: flex;
  flex-direction: column;
  left:15px;
  max-height: 350px;
  transition: max-height 0.3s linear;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 0 24px 24px;
  box-sizing: border-box;
  border: 1px solid ${colors.black};
  border-top: none;
  border-radius: 0 0 6px 6px;
  margin: 0 auto;
  width: 20%;
  background: rgba(255, 255, 255, 0.85);
  z-index: 1;
  &::-webkit-scrollbar {
    width: 6px;
    @media (max-width: ${mobile}) {
      width: 0;
    }
  }

  &::-webkit-scrollbar-thumb {
    background-color: white;
  }

  &::-webkit-scrollbar-track {
    background-color: white;
  }
  &.hidden {
    max-height: 0;
    padding: 0;
    border: none;
    transition: all 0.2s linear;
  }
  &:hover {
    &::-webkit-scrollbar {
      width: 6px;
      @media (max-width: ${mobile}) {
        width: 0;
      }
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${colors.black_gray};
      border-radius: 6px;
    }

    &::-webkit-scrollbar-track {
      background-color: ${colors.white};
    }
  }
`;

export const InicialUrl = styled.div`
  width: 90%;
  background: ${colors.white};
  margin-top: 30px;
  height: 60px;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  overflow: auto;
`;

export const P = styled.p`
  color: ${colors.black_gray};
  padding: 0.5em;
  font-family: "Times New Roman";
  text-overflow: ellipsis;
  text-align: center;
`;

export const ElementCCSContainer = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  background: ${colors.gray};
  flex-direction: column;
  overflow: auto;
  margin-top:10px;
`;

export const ElementCCS = styled.input`
  width: 50%;
  background: ${colors.white};
  height: 50px;
  text-align: center;
  font-size: 120%;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
`;

export const Element = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  background: ${colors.gray};
  align-items: center;
  justify-content: center;
`;
export const ElementHistory = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  background: ${colors.gray};
  align-items: center;
  justify-content: center;
  width: 100%;
  cursor: pointer;
`;

export const History = styled.div`
  width: 50%;
  margin-top: 5px;
  background: ${colors.white};
  height: 50px;
  text-align: center;
  font-size: 100%;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;

`;

export const HistoryContainer = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  background: ${colors.gray};
  flex-direction: column;
  align-items: center;
  overflow: auto;
  margin-top:10px;
`;
