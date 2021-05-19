import React, { useEffect, useState } from "react";
import {
  Image,
  Container,
  DropDown,
  InicialUrl,
  P,
  ElementCCSContainer,
  ElementCCS,
  WebImg,
  Element,
  MenuImg,
  ImageContainer,
  Buttom,
  Url,
  PUrl,
  SpaceController,
  History,
  HistoryContainer,
  ElementHistory,
  ButtomDownload,
  Menu,
  DropDownContainer,
  Recommendation,
  Recommend
} from "./styled";
import axios from "axios";
import ImgixClient from "@imgix/js-core";
import { Dropdown } from "react-bootstrap";
import { params } from "../Helper/params";
import { textObj } from "../Helper/text";
import {
  FaInfoCircle,
  FaPencilAlt,
  FaFileImage,
  FaPlusCircle,
  FaTimesCircle,
  FaFileArchive,
  FaArrowDown
} from "react-icons/fa";
import "./index.css";

const client = new ImgixClient({
  domain: `${process.env.REACT_APP_IMAGE_URL_INICIAL}`,
  secureURLToken: `${process.env.REACT_APP_IMGIX_TOKEN}`,
});

const SandBox = () => {
  const [imgEx, setImgEx] = useState([]);
  const [value, setValue] = useState("");
  const [imgToShow, setImgToShow] = useState("");
  const [show, setShow] = useState(false);
  const [elements, setElements] = useState(["h", "w"]);
  const [history, setHistory] = useState([]);
  const [imgParams, setImgParams] = useState({ h: 500, w: 500 });
  const [showEle, setShowEle] = useState(false);
  const [showHis, setShowHis] = useState(false);
  const [change, setChange] = useState(false);

  const handleValue = (value) => {
    let img = imgEx.filter((item) => {
      if (item.url.includes(value)) {
        return item;
      }
      return null
    });
    setImgToShow(img[0]);
    setValue('');
  };

  const handleElement = (value, key) => {
    if (key || key === 0) {
      let newElements = elements;
      newElements[key] = value;
      let obj = { ...imgParams };
      obj[value] = "";
      setImgParams(obj);
      setElements(newElements);
      setChange(!change);
    } else {
      setElements([...elements, value]);
    }
  };
  const handleHistory = (params) => {
    setHistory([...history, params]);
    setImgParams({ h: 500, w: 500 });
    setShowEle(false);
    setChange(!change);
  };

  const handleParams = (key, value) => {
    let obj = { ...imgParams };
    obj[key] = value;
    setImgParams(obj);
    setChange(!change);
  };

  const handleDelete = (key, id, array) => {
    let newElements = array.filter((ele, i) => {
      if (id !== i) {
        return ele;
      }
      return null
    });
    delete imgParams[key];
    if (array === elements) {
      setElements(newElements);
    }
    if (array === history) {
      setHistory(newElements);
    }
    setChange(!change);
  };

  const handleReBuild = (obj) => {
    let newElements = Object.keys(obj);
    console.log(newElements);
    setElements(newElements);
    setShowEle(true);
    setChange(!change);
  };
  const handleInput = (value) => {
    setImgToShow({ url: value });
    setValue(value)
  };

  useEffect(() => { }, [change]);

  useEffect(() => {
    console.log(process.env.REACT_APP_IMAGE_URL);
    axios.get(process.env.REACT_APP_IMAGE_URL).then((res) => {
      setImgEx(res.data);
      setImgToShow(res.data[0]);
    });
  }, []);

  const url = client.buildURL(`${imgToShow.url}`, imgParams);

  return (
    <Container>
      <MenuImg>
        <Menu>{textObj.menu}</Menu>
        <Buttom onClick={() => setShow(!show)}>
          {textObj.images} <FaFileImage />
        </Buttom>
        {show
          ?
          <DropDownContainer>
            {
              imgEx.map((img, key) => (
                <DropDown>

                  <Url onClick={() => handleValue(img.url)}>
                    <PUrl>{img.url}</PUrl>
                  </Url>
                </DropDown>
              ))
            }
          </DropDownContainer>
          : null}
        <Buttom onClick={() => setShowHis(!showHis)}>
          {textObj.history} <FaFileArchive />
        </Buttom>
        {showHis ? (
          history.length > 0 ? (
            <HistoryContainer>
              {history.map((ele, id) => {
                let nro = id + 1
                return (
                  <ElementHistory>
                    <History onClick={() => handleReBuild(ele)}>
                      <P>{textObj.history} {nro}</P>
                    </History>
                    <FaTimesCircle
                      className="iconX"
                      onClick={() => handleDelete(ele, id, history)}
                      title="Remove History"
                    />
                  </ElementHistory>
                );
              })}
            </HistoryContainer>
          ) : (
              <ElementHistory>
                <History>
                  <P>{textObj.notHistory}</P>
                </History>
              </ElementHistory>
            )
        ) : null}
        <Buttom onClick={() => setShowEle(!showEle)}>
          {textObj.edit} <FaPencilAlt />
        </Buttom>
        {showEle ? (
          <ElementCCSContainer>
            {elements.map((ele, id) => {
              return (
                <Element>
                  <Dropdown className="dropDown">
                    <Dropdown.Toggle
                      variant="success"
                      id="dropdown-basic"
                      className="dropButtom"
                    >
                      {ele}
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="elementContainer">
                      {params.map((par, key) => (
                        <div>
                          {console.log(par, "par")}
                          <div className="element">
                            <Dropdown.Item
                              className="dropItem"
                              onClick={() => handleElement(par.value, id)}
                            >
                              {par.value}
                            </Dropdown.Item>
                            <a
                              href={par.url}
                              rel="noopener noreferrer"
                              className="iconSearch"
                              target="_blank"
                            >
                              <FaInfoCircle
                                className="icon"
                                title={par.short_description}
                              />
                            </a>
                          </div>
                          <hr />
                        </div>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                  <ElementCCS
                    placeholder="value"
                    onChange={(e) => handleParams(ele, e.target.value)}
                    disabled={ele === "" ? true : false}
                    value={imgParams[ele] ? imgParams[ele] : ""}
                  />
                  {elements.length > 1 ? (
                    <FaTimesCircle
                      className="iconX"
                      onClick={() => handleDelete(ele, id, elements)}
                      title="Remove element"
                    />
                  ) : null
                  }
                </Element>
              );
            })}
            <div className="iconController">
              <FaPlusCircle
                className="iconPlus"
                onClick={() => handleElement("")}
                title="Add element"
              />
            </div>
          </ElementCCSContainer>
        ) : (
          <Recommendation>
            <Recommend> We recommend you to go before start to edit go to</Recommend>
            <FaArrowDown className="iconX"/>
            <a href="https://docs.imgix.com/apis/rendering"
          rel="noopener noreferrer"
          className="urlReference"
          target="_blank">https://docs.imgix.com/apis/rendering</a>
            </Recommendation>
          )}
      </MenuImg>
      <SpaceController>
        <WebImg
          placeholder="Put a web image url (jpg, jpeg, png, etc)"
          value={value}
          onChange={(e) => handleInput(e.target.value)}
        />
        <ImageContainer>
          {imgEx.length > 0 ? <Image src={url} /> : null}
        </ImageContainer>
        <InicialUrl>
          <a
            href={url}
            rel="noopener noreferrer"
            className="url"
            target="_blank"
          >
            {url ? url : "creating url"}
          </a>
        </InicialUrl>
        <a
          href={url}
          rel="noopener noreferrer"
          className="urlDownload"
          target="_blank"
        >
          <ButtomDownload onClick={() => handleHistory(imgParams)}>
            {textObj.download}
          </ButtomDownload>
        </a>
      </SpaceController>
    </Container>
  );
};

export default SandBox;
