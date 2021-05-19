import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Container, Contact, A } from "./styled";
import { textObj } from "../Helper/text"

const Footer = () => {
  return (
    <Container>
      <Contact>
        <A href="https://github.com/vogui" target="_blank">
          <FaGithub />
          {textObj.name}
        </A>
      </Contact>
      <Contact>
        <A
          href="https://www.linkedin.com/in/guillermo-vogeler-medialdea-127b05139/"
          target="_blank"
        >
          <FaLinkedinIn />
          {textObj.name}
        </A>
      </Contact>
      <Contact>
        <A href="mailto: guillevogemedialdea@gmail.com" target="_blank">
          <HiOutlineMail />
          {textObj.contact}
        </A>
      </Contact>
    </Container>
  );
};

export default Footer;
