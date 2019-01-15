import dynamics from "dynamics.js";

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

export {
  getComputedTranslateY,
  scrollY,
  extend,
  IsoGrid,
  getRandomInt,
  RequestAnimationFrame,
  isoGridProperties,
  isoGridOptions2
};
