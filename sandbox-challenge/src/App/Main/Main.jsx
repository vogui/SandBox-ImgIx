import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SandBox from "../SandBox/SandBox"
import { Container } from "./styled";

const Main = () => {
  return (
    <Container>
      <Header />
      <SandBox />
      <Footer />
    </Container>
  );
};


export default Main;