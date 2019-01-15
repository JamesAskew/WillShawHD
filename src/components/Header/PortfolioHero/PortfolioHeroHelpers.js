import dynamics from "dynamics.js";
import classie from "classie";
import imagesLoaded from "imagesloaded";
import AnimOnScroll from "anime";
import Masonry from "isotope-layout";

function getComputedTranslateY(obj) {
  if (!window.getComputedStyle) return;
  var style = getComputedStyle(obj),
    transform = style.transform || style.webkitTransform || style.mozTransform;
  var mat = transform.match(/^matrix3d\((.+)\)$/);
  if (mat) return parseFloat(mat[1].split(", ")[13]);
  mat = transform.match(/^matrix\((.+)\)$/);
  return mat ? parseFloat(mat[1].split(", ")[5]) : 0;
}

// some helper functions
function scrollY(docElem) {
  return window.pageYOffset || docElem.scrollTop;
}

function extend(a, b) {
  for (var key in b) {
    if (b.hasOwnProperty(key)) {
      a[key] = b[key];
    }
  }
  return a;
}

function IsoGrid(el, options) {
  this.isolayerEl = el;

  this.options = extend({}, this.options);
  extend(this.options, options);

  if (!document.querySelector(".gridy")) {
  } else {
    this.gridEl = this.isolayerEl.querySelector(".gridy");
  }

  if (!document.querySelector(".grid__item")) {
  } else {
    // grid items
    this.gridItems = [].slice.call(this.gridEl.querySelectorAll(".grid__item"));
    this.gridItemsTotal = this.gridItems.length;

    this.didscroll = false;

    this._init();

    //please();
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let lastTime = 0;
const RequestAnimationFrame = function(callback, element) {
  var currTime = new Date().getTime();
  var timeToCall = Math.max(0, 16 - (currTime - lastTime));
  var id = window.setTimeout(function() {
    callback(currTime + timeToCall);
  }, timeToCall);
  lastTime = currTime + timeToCall;
  return id;
};

const isoGridProperties = function(pos) {
  return {
    translateZ: (pos + 1) * 30,
    rotateZ: getRandomInt(-4, 4)
  };
};
const isoGridOptions2 = function(pos, itemstotal) {
  return {
    type: dynamics.bezier,
    duration: 500,
    points: [
      {
        x: 0,
        y: 0,
        cp: [
          {
            x: 0.2,
            y: 1
          }
        ]
      },
      {
        x: 1,
        y: 1,
        cp: [
          {
            x: 0.3,
            y: 1
          }
        ]
      }
    ],
    delay: (itemstotal - pos - 1) * 40
  };
};

function animationHelpers(window) {
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
}

function imagesLoadedHelper(gridEl, sender) {
  var self = sender;

  imagesLoaded(gridEl, function() {
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
}

export {
  getComputedTranslateY,
  scrollY,
  extend,
  IsoGrid,
  getRandomInt,
  RequestAnimationFrame,
  isoGridProperties,
  isoGridOptions2,
  animationHelpers,
  imagesLoadedHelper
};
