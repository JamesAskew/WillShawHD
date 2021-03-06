import React, { Component } from "react";
import YouTube from "react-youtube";

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
import Modal from "../../Modal/Modal";
import ModalTriggerImage from "../../ModalTriggerImage/ModalTriggerImage";

class PortfolioHero extends Component {
  constructor(props) {
    super(props);

    this.state = {
      classes: ["isolayer", "isolayer--deco1", "isolayer--shadow"]
    };
  }

  componentDidMount() {
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
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

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
              <Modal triggerImage={<ModalTriggerImage img={imgOne} />}>
                <YouTube videoId="nqpxPCWyqKI" opts={opts} />
              </Modal>
            </li>
            <li className="grid__item">
              <Modal triggerImage={<ModalTriggerImage img={imgTwo} />}>
                <YouTube videoId="nqpxPCWyqKI" opts={opts} />
              </Modal>
            </li>
            <li className="grid__item">
              <Modal triggerImage={<ModalTriggerImage img={imgThree} />}>
                <YouTube videoId="nqpxPCWyqKI" opts={opts} />
              </Modal>
            </li>
            <li className="grid__item">
              <Modal triggerImage={<ModalTriggerImage img={imgFour} />}>
                <YouTube videoId="nqpxPCWyqKI" opts={opts} />
              </Modal>
            </li>
            <li className="grid__item">
              <Modal
                triggerImage={
                  <ModalTriggerImage
                    img={imgFive}
                    imgAlt="alt for number five"
                  />
                }
              >
                <YouTube videoId="nqpxPCWyqKI" opts={opts} />
              </Modal>
            </li>
            <li className="grid__item">
              <Modal triggerImage={<ModalTriggerImage img={imgSix} />}>
                <YouTube videoId="nqpxPCWyqKI" opts={opts} />
              </Modal>
            </li>
            <li className="grid__item">
              <Modal triggerImage={<ModalTriggerImage img={imgSeven} />}>
                <YouTube videoId="nqpxPCWyqKI" opts={opts} />
              </Modal>
            </li>
            <li className="grid__item">
              <Modal triggerImage={<ModalTriggerImage img={imgEight} />}>
                <YouTube videoId="nqpxPCWyqKI" opts={opts} />
              </Modal>
            </li>
            <li className="grid__item">
              <Modal triggerImage={<ModalTriggerImage img={imgNine} />}>
                <YouTube videoId="nqpxPCWyqKI" opts={opts} />
              </Modal>
            </li>
            <li className="grid__item">
              <Modal triggerImage={<ModalTriggerImage img={imgTen} />}>
                <YouTube videoId="nqpxPCWyqKI" opts={opts} />
              </Modal>
            </li>
            <li className="grid__item">
              <Modal triggerImage={<ModalTriggerImage img={imgEleven} />}>
                <YouTube videoId="nqpxPCWyqKI" opts={opts} />
              </Modal>
            </li>
            <li className="grid__item">
              <Modal triggerImage={<ModalTriggerImage img={imgTwelve} />}>
                <YouTube videoId="nqpxPCWyqKI" opts={opts} />
              </Modal>
            </li>
            <li className="grid__item">
              <Modal triggerImage={<ModalTriggerImage img={imgOne} />}>
                <YouTube videoId="nqpxPCWyqKI" opts={opts} />
              </Modal>
            </li>
            <li className="grid__item">
              <Modal triggerImage={<ModalTriggerImage img={imgTwo} />}>
                <YouTube videoId="nqpxPCWyqKI" opts={opts} />
              </Modal>
            </li>
            <li className="grid__item">
              <Modal triggerImage={<ModalTriggerImage img={imgThree} />}>
                <YouTube videoId="nqpxPCWyqKI" opts={opts} />
              </Modal>
            </li>
            <li className="grid__item">
              <Modal triggerImage={<ModalTriggerImage img={imgFour} />}>
                <YouTube videoId="nqpxPCWyqKI" opts={opts} />
              </Modal>
            </li>
            <li className="grid__item">
              <Modal triggerImage={<ModalTriggerImage img={imgFive} />}>
                <YouTube videoId="nqpxPCWyqKI" opts={opts} />
              </Modal>
            </li>
            <li className="grid__item">
              <Modal triggerImage={<ModalTriggerImage img={imgSix} />}>
                <YouTube videoId="nqpxPCWyqKI" opts={opts} />
              </Modal>
            </li>
            <li className="grid__item">
              <Modal triggerImage={<ModalTriggerImage img={imgSeven} />}>
                <YouTube videoId="nqpxPCWyqKI" opts={opts} />
              </Modal>
            </li>
            <li className="grid__item">
              <Modal triggerImage={<ModalTriggerImage img={imgEight} />}>
                <YouTube videoId="nqpxPCWyqKI" opts={opts} />
              </Modal>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default PortfolioHero;
