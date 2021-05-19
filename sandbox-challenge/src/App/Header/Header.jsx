import React from "react";
import { Container, P , Image} from "./styled";
import { textObj } from "../Helper/text"

const Header = () => {
  return (
    <Container>
      <Image src={textObj.img}></Image>
      <P>Sand Box Challenge</P>
    </Container>
  );
};

export default Header;
