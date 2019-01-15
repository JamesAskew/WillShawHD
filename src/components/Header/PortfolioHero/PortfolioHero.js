import React, { Component } from "react";

import "../../../assets/css/isolayer.css";

// import imgOne from "../../../assets/images/thumbnails/isolayer10.jpg";
import imgOne from "../../../assets/images/thumbnails/01.jpg";
import imgTwo from "../../../assets/images/thumbnails/02.jpg";
import imgThree from "../../../assets/images/thumbnails/03.jpg";
import imgFour from "../../../assets/images/thumbnails/04.jpg";
import imgFive from "../../../assets/images/thumbnails/05.jpg";
import imgSix from "../../../assets/images/thumbnails/06.jpg";
import imgSeven from "../../../assets/images/thumbnails/07.jpg";
import imgEight from "../../../assets/images/thumbnails/08.jpg";
import imgNine from "../../../assets/images/thumbnails/09.jpg";
import imgTen from "../../../assets/images/thumbnails/10.jpg";
import imgEleven from "../../../assets/images/thumbnails/11.jpg";
import imgTwelve from "../../../assets/images/thumbnails/12.jpg";

import {
  IsoGrid,
  isoGridProperties,
  isoGridOptions2,
  animationHelpers,
  imagesLoadedHelper
} from "./PortfolioHeroHelpers";

import {
  isoGridOptions,
  isoGridInitEvents,
  isoGridExpandSubItems,
  isoGridCollapseSubItems,
  isoGridScrollPage,
  isoGridCreatePseudoScroller
} from "./isoGridHelpers";

class PortfolioHero extends Component {
  constructor(props) {
    super(props);

    this.state = {
      classes: ["isolayer", "isolayer--deco1", "isolayer--shadow"]
    };
  }

  componentDidMount() {
    // debugger;
    console.log("portfolio hero - componentDidMount()");

    animationHelpers(window);

    const please = () => {
      this.setState(prevState => {
        const currentClasses = prevState.classes;
        currentClasses.push("visible");
        return {
          classes: currentClasses
        };
      });
    };

    IsoGrid.prototype.options = isoGridOptions;

    IsoGrid.prototype._init = function() {
      imagesLoadedHelper(this.gridEl, this);

      IsoGrid.prototype._initEvents = function() {
        isoGridInitEvents(this);
        please();
      };
      IsoGrid.prototype._expandSubItems = function(item) {
        isoGridExpandSubItems(this, item);
      };

      IsoGrid.prototype._collapseSubItems = function(item) {
        isoGridCollapseSubItems(item);
      };

      IsoGrid.prototype._scrollPage = function() {
        isoGridScrollPage(this);
      };
    };

    IsoGrid.prototype._createPseudoScroller = function() {
      isoGridCreatePseudoScroller(this);
    };

    new IsoGrid(document.querySelector(".isolayer--deco1"), {
      transform:
        "translateX(33vw) translateY(-340px) rotateX(45deg) rotateZ(45deg)",
      stackItemsAnimation: {
        properties: isoGridProperties,
        options: isoGridOptions2
      }
    });
  }

  render() {
    console.log("portfolio hero - render()");

    return (
      <div>
        <div className="inner">
          <h2>WILL SHAW</h2>
          <p>Videographer | Editor | Photographer</p>
          <a href="https://www.google.com/" className="ghost-btn">
            <svg>
              <defs>
                <linearGradient>
                  <stop offset="0%" stopColor="#FF8282" />
                  <stop offset="100%" stopColor="#E178ED" />
                </linearGradient>
              </defs>
              <rect
                width="206"
                height="50"
                x="5"
                y="5"
                rx="25"
                fill="none"
                stroke="#ffffff"
              />
            </svg>
            <span>Discover Now</span>
          </a>
        </div>
        <div className={this.state.classes.join(" ")}>
          <ul className="gridy">
            <li className="grid__item">
              <a className="grid__link" href="https://www.google.com/">
                <div className="layer" />
                <div className="layer" />
                <div className="layer" />
                <img className="grid__img layer" src={imgOne} alt="image" />
              </a>
            </li>
            <li className="grid__item">
              <a className="grid__link" href="https://www.google.com/">
                <div className="layer" />
                <div className="layer" />
                <div className="layer" />
                <img className="grid__img layer" src={imgTwo} alt="02" />
              </a>
            </li>
            <li className="grid__item">
              <a className="grid__link" href="https://www.google.com/">
                <div className="layer" />
                <div className="layer" />
                <div className="layer" />
                <img className="grid__img layer" src={imgThree} alt="02" />
              </a>
            </li>
            <li className="grid__item">
              <a className="grid__link" href="https://www.google.com/">
                <div className="layer" />
                <div className="layer" />
                <div className="layer" />
                <img className="grid__img layer" src={imgFour} alt="02" />
              </a>
            </li>
            <li className="grid__item">
              <a className="grid__link" href="https://www.google.com/">
                <div className="layer" />
                <div className="layer" />
                <div className="layer" />
                <img className="grid__img layer" src={imgFive} alt="02" />
              </a>
            </li>
            <li className="grid__item">
              <a className="grid__link" href="https://www.google.com/">
                <div className="layer" />
                <div className="layer" />
                <div className="layer" />
                <img className="grid__img layer" src={imgSix} alt="02" />
              </a>
            </li>
            <li className="grid__item">
              <a className="grid__link" href="https://www.google.com/">
                <div className="layer" />
                <div className="layer" />
                <div className="layer" />
                <img className="grid__img layer" src={imgSeven} alt="02" />
              </a>
            </li>
            <li className="grid__item">
              <a className="grid__link" href="https://www.google.com/">
                <div className="layer" />
                <div className="layer" />
                <div className="layer" />
                <img className="grid__img layer" src={imgEight} alt="02" />
              </a>
            </li>
            <li className="grid__item">
              <a className="grid__link" href="https://www.google.com/">
                <div className="layer" />
                <div className="layer" />
                <div className="layer" />
                <img className="grid__img layer" src={imgNine} alt="02" />
              </a>
            </li>
            <li className="grid__item">
              <a className="grid__link" href="https://www.google.com/">
                <div className="layer" />
                <div className="layer" />
                <div className="layer" />
                <img className="grid__img layer" src={imgTen} alt="02" />
              </a>
            </li>
            <li className="grid__item">
              <a className="grid__link" href="https://www.google.com/">
                <div className="layer" />
                <div className="layer" />
                <div className="layer" />
                <img className="grid__img layer" src={imgEleven} alt="02" />
              </a>
            </li>
            <li className="grid__item">
              <a className="grid__link" href="https://www.google.com/">
                <div className="layer" />
                <div className="layer" />
                <div className="layer" />
                <img className="grid__img layer" src={imgTwelve} alt="02" />
              </a>
            </li>
            <li className="grid__item">
              <a className="grid__link" href="https://www.google.com/">
                <div className="layer" />
                <div className="layer" />
                <div className="layer" />
                <img className="grid__img layer" src={imgOne} alt="image" />
              </a>
            </li>
            <li className="grid__item">
              <a className="grid__link" href="https://www.google.com/">
                <div className="layer" />
                <div className="layer" />
                <div className="layer" />
                <img className="grid__img layer" src={imgTwo} alt="02" />
              </a>
            </li>
            <li className="grid__item">
              <a className="grid__link" href="https://www.google.com/">
                <div className="layer" />
                <div className="layer" />
                <div className="layer" />
                <img className="grid__img layer" src={imgThree} alt="02" />
              </a>
            </li>
            <li className="grid__item">
              <a className="grid__link" href="https://www.google.com/">
                <div className="layer" />
                <div className="layer" />
                <div className="layer" />
                <img className="grid__img layer" src={imgFour} alt="02" />
              </a>
            </li>
            <li className="grid__item">
              <a className="grid__link" href="https://www.google.com/">
                <div className="layer" />
                <div className="layer" />
                <div className="layer" />
                <img className="grid__img layer" src={imgFive} alt="02" />
              </a>
            </li>
            <li className="grid__item">
              <a className="grid__link" href="https://www.google.com/">
                <div className="layer" />
                <div className="layer" />
                <div className="layer" />
                <img className="grid__img layer" src={imgThree} alt="02" />
              </a>
            </li>
            <li className="grid__item">
              <a className="grid__link" href="https://www.google.com/">
                <div className="layer" />
                <div className="layer" />
                <div className="layer" />
                <img className="grid__img layer" src={imgFour} alt="02" />
              </a>
            </li>
            <li className="grid__item">
              <a className="grid__link" href="https://www.google.com/">
                <div className="layer" />
                <div className="layer" />
                <div className="layer" />
                <img className="grid__img layer" src={imgFive} alt="02" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default PortfolioHero;
