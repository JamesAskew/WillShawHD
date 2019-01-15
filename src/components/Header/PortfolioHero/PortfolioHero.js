import React, { Component } from "react";

import dynamics from "dynamics.js";
import classie from "classie";
import imagesLoaded from "imagesloaded";
import AnimOnScroll from "anime";
import Masonry from "isotope-layout";

import "../../../assets/css/isolayer.css";

import imgOne from "../../../assets/images/thumbnails/isolayer10.jpg";

import {
  IsoGrid,
  RequestAnimationFrame,
  isoGridProperties,
  isoGridOptions2
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
      classes: ["isolayer", "isolayer--deco1", "isolayer--shadow"],
      updated: false
    };
  }

  componentDidMount() {
    // debugger;
    console.log("portfolio hero - componentDidMount()");

    var prefixes = "webkit moz ms o".split(" ");
    // get unprefixed rAF and cAF, if present
    var requestAnimationFrame = window.requestAnimationFrame;
    var cancelAnimationFrame = window.cancelAnimationFrame;
    // loop through vendor prefixes and get prefixed rAF and cAF
    var prefix;
    for (var i = 0; i < prefixes.length; i++) {
      if (requestAnimationFrame && cancelAnimationFrame) {
        break;
      }
      prefix = prefixes[i];
      requestAnimationFrame =
        requestAnimationFrame || window[prefix + "RequestAnimationFrame"];
      cancelAnimationFrame =
        cancelAnimationFrame ||
        window[prefix + "CancelAnimationFrame"] ||
        window[prefix + "CancelRequestAnimationFrame"];
    }

    if (!requestAnimationFrame || !cancelAnimationFrame) {
      requestAnimationFrame = RequestAnimationFrame;

      cancelAnimationFrame = function(id) {
        window.clearTimeout(id);
      };
    }

    const please = () => {
      console.log("please");
      this.setState(prevState => {
        const currentClasses = prevState.classes;
        currentClasses.push("visible");

        return {
          classes: currentClasses,
          updated: true
        };
      });
    };

    IsoGrid.prototype.options = isoGridOptions;

    IsoGrid.prototype._init = function() {
      var self = this;

      imagesLoaded(this.gridEl, function() {
        // initialize masonry
        self.msnry = new Masonry(self.gridEl, {
          itemSelector: ".grid__item",
          isFitWidth: true
        });

        // the isolayer div element will be positioned fixed and will have a transformation based on the values defined in the HTML (data-attrs for the isolayer div element)
        if (self.options.type === "scrollable") {
          self.isolayerEl.style.position = "fixed";
        }

        self.isolayerEl.style.WebkitTransformStyle = self.isolayerEl.style.transformStyle =
          "preserve-3d";

        var transformValue =
          self.options.perspective != 0
            ? "perspective(" +
              self.options.perspective +
              "px) " +
              self.options.transform
            : self.options.transform;
        self.isolayerEl.style.WebkitTransform = self.isolayerEl.style.transform = transformValue;

        // create the div element that will force the height for scrolling
        if (self.options.type === "scrollable") {
          self._createPseudoScroller();
        }

        // init/bind events
        self._initEvents();

        // effects for loading grid elements:
        if (self.options.type === "scrollable") {
          new AnimOnScroll(self.gridEl, {
            minDuration: 1,
            maxDuration: 1.2,
            viewportFactor: 0
          });
        }

        // grid is "loaded" (all images are loaded)
        self.options.onGridLoaded();
        classie.add(self.gridEl, "grid--loaded");
      });

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
        {this.state.updated ? <p>loaded</p> : <p>loading</p>}

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
                <img className="grid__img layer" src={imgOne} alt="02" />
              </a>
            </li>
            <li className="grid__item">
              <a className="grid__link" href="https://www.google.com/">
                <div className="layer" />
                <div className="layer" />
                <div className="layer" />
                <img className="grid__img layer" src={imgOne} alt="02" />
              </a>
            </li>
            <li className="grid__item">
              <a className="grid__link" href="https://www.google.com/">
                <div className="layer" />
                <div className="layer" />
                <div className="layer" />
                <img className="grid__img layer" src={imgOne} alt="02" />
              </a>
            </li>
            <li className="grid__item">
              <a className="grid__link" href="https://www.google.com/">
                <div className="layer" />
                <div className="layer" />
                <div className="layer" />
                <img className="grid__img layer" src={imgOne} alt="02" />
              </a>
            </li>
            <li className="grid__item">
              <a className="grid__link" href="https://www.google.com/">
                <div className="layer" />
                <div className="layer" />
                <div className="layer" />
                <img className="grid__img layer" src={imgOne} alt="02" />
              </a>
            </li>
            <li className="grid__item">
              <a className="grid__link" href="https://www.google.com/">
                <div className="layer" />
                <div className="layer" />
                <div className="layer" />
                <img className="grid__img layer" src={imgOne} alt="02" />
              </a>
            </li>
            <li className="grid__item">
              <a className="grid__link" href="https://www.google.com/">
                <div className="layer" />
                <div className="layer" />
                <div className="layer" />
                <img
                  className="grid__img layer"
                  src="../../../assets/images/thumbnails/Changin-Plants-4-300x188.png"
                  alt="02"
                />
              </a>
            </li>
            <li className="grid__item">
              <a className="grid__link" href="https://www.google.com/">
                <div className="layer" />
                <div className="layer" />
                <div className="layer" />
                <img
                  className="grid__img layer"
                  src="images/isolayer9.jpg"
                  alt="02"
                />
              </a>
            </li>
            <li className="grid__item">
              <a className="grid__link" href="https://www.google.com/">
                <div className="layer" />
                <div className="layer" />
                <div className="layer" />
                <img
                  className="grid__img layer"
                  src="images/isolayer10.jpg"
                  alt="02"
                />
              </a>
            </li>
            <li className="grid__item">
              <a className="grid__link" href="https://www.google.com/">
                <div className="layer" />
                <div className="layer" />
                <div className="layer" />
                <img
                  className="grid__img layer"
                  src="images/isolayer11.jpg"
                  alt="02"
                />
              </a>
            </li>
            <li className="grid__item">
              <a className="grid__link" href="https://www.google.com/">
                <div className="layer" />
                <div className="layer" />
                <div className="layer" />
                <img
                  className="grid__img layer"
                  src="images/isolayer12.jpg"
                  alt="02"
                />
              </a>
            </li>
            <li className="grid__item">
              <a className="grid__link" href="https://www.google.com/">
                <div className="layer" />
                <div className="layer" />
                <div className="layer" />
                <img
                  className="grid__img layer"
                  src="images/isolayer13.jpg"
                  alt="02"
                />
              </a>
            </li>
            <li className="grid__item">
              <a className="grid__link" href="https://www.google.com/">
                <div className="layer" />
                <div className="layer" />
                <div className="layer" />
                <img
                  className="grid__img layer"
                  src="images/isolayer14.jpg"
                  alt="02"
                />
              </a>
            </li>
            <li className="grid__item">
              <a className="grid__link" href="https://www.google.com/">
                <div className="layer" />
                <div className="layer" />
                <div className="layer" />
                <img
                  className="grid__img layer"
                  src="images/isolayer15.jpg"
                  alt="02"
                />
              </a>
            </li>
            <li className="grid__item">
              <a className="grid__link" href="https://www.google.com/">
                <div className="layer" />
                <div className="layer" />
                <div className="layer" />
                <img
                  className="grid__img layer"
                  src="images/isolayer16.jpg"
                  alt="02"
                />
              </a>
            </li>
            <li className="grid__item">
              <a className="grid__link" href="https://www.google.com/">
                <div className="layer" />
                <div className="layer" />
                <div className="layer" />
                <img
                  className="grid__img layer"
                  src="images/isolayer17.jpg"
                  alt="02"
                />
              </a>
            </li>
            <li className="grid__item">
              <a className="grid__link" href="https://www.google.com/">
                <div className="layer" />
                <div className="layer" />
                <div className="layer" />
                <img
                  className="grid__img layer"
                  src="images/isolayer18.jpg"
                  alt="02"
                />
              </a>
            </li>
            <li className="grid__item">
              <a className="grid__link" href="https://www.google.com/">
                <div className="layer" />
                <div className="layer" />
                <div className="layer" />
                <img
                  className="grid__img layer"
                  src="images/isolayer19.jpg"
                  alt="02"
                />
              </a>
            </li>
            <li className="grid__item">
              <a className="grid__link" href="https://www.google.com/">
                <div className="layer" />
                <div className="layer" />
                <div className="layer" />
                <img
                  className="grid__img layer"
                  src="images/isolayer20.jpg"
                  alt="02"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default PortfolioHero;
