import dynamics from "dynamics.js";
import { scrollY, getComputedTranslateY } from "./PortfolioHeroHelpers";

const isoGridOptions = {
  // static or scrollable
  type: "static",
  // grid perspective value
  perspective: 0,
  // grid transform
  transform: "",
  // each grid item animation (for the subitems)
  stackItemsAnimation: {
    // this follows the dynamics.js (https://github.com/michaelvillar/dynamics.js) animate fn syntax
    // properties (pos is the current subitem position)
    properties: function(pos) {
      return {
        translateZ: (pos + 1) * 50
      };
    },
    // animation options (pos is the current subitem position); itemstotal is the total number of subitems
    options: function(pos, itemstotal) {
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
        ]
      };
    }
  },
  // callback for loaded grid
  onGridLoaded: function() {
    return false;
  }
};

function isoGridInitEvents(sender) {
  var self = sender;

  var scrollHandler = function() {
      requestAnimationFrame(function() {
        if (!self.didscroll) {
          self.didscroll = true;
          self._scrollPage();
        }
      });
    },
    mouseenterHandler = function(ev) {
      self._expandSubItems(ev.target);
    },
    mouseleaveHandler = function(ev) {
      self._collapseSubItems(ev.target);
    };

  if (sender.options.type === "scrollable") {
    // update the transform (ty) on scroll
    window.addEventListener("scroll", scrollHandler, false);
    // on resize (layoutComplete for the masonry instance) recalculate height
    sender.msnry.on("layoutComplete", function(laidOutItems) {
      // reset the height of the pseudoScroller (grid´s height + additional space between the top of the rotated isolayerEl and the page)
      self.pseudoScrollerEl.style.height =
        self.gridEl.offsetHeight +
        self.isolayerEl.offsetTop * Math.sqrt(2) +
        "px";
      self._scrollPage();
    });
  }

  sender.gridItems.forEach(function(item) {
    item.addEventListener("mouseenter", mouseenterHandler);
    item.addEventListener("mouseleave", mouseleaveHandler);
  });
}

function isoGridExpandSubItems(sender, item) {
  var self = sender,
    itemLink = item.querySelector("div"),
    subItems = [].slice.call(itemLink.querySelectorAll(".layer")),
    subItemsTotal = subItems.length;

  itemLink.style.zIndex = item.style.zIndex = sender.gridItemsTotal;

  subItems.forEach(function(subitem, pos) {
    dynamics.stop(subitem);
    dynamics.animate(
      subitem,
      self.options.stackItemsAnimation.properties(pos),
      self.options.stackItemsAnimation.options(pos, subItemsTotal)
    );
  });
}

function isoGridCollapseSubItems(item) {
  var itemLink = item.querySelector("div");
  [].slice
    .call(itemLink.querySelectorAll(".layer"))
    .forEach(function(subitem, pos) {
      dynamics.stop(subitem);
      dynamics.animate(
        subitem,
        {
          translateZ: 0 // enough to reset any transform value previously set
        },
        {
          duration: 100,
          complete: function() {
            itemLink.style.zIndex = item.style.zIndex = 1;
          }
        }
      );
    });
}

function isoGridScrollPage(sender) {
  sender.gridEl.style.WebkitTransform = sender.gridEl.style.transform =
    "translate3d(0,-" + scrollY(window.document.documentElement) + "px,0)";
  sender.didscroll = false;
}

function isoGridCreatePseudoScroller(sender) {
  // element that will force the height for scrolling
  sender.pseudoScrollerEl = document.createElement("div");
  sender.pseudoScrollerEl.className = "pseudo-scroller";
  // insert it inside the main container (same level of isolayerEl)
  sender.isolayerEl.parentNode.insertBefore(
    sender.pseudoScrollerEl,
    sender.isolayerEl
  );
  // set the height of the pseudoScroller (grid´s height + additional space between the top of the rotated isolayerEl and the page - value set for the translation on the Y axis)
  sender.pseudoScrollerEl.style.height =
    sender.gridEl.offsetHeight +
    getComputedTranslateY(sender.isolayerEl) * Math.sqrt(2) +
    "px";
}

export {
  isoGridOptions,
  isoGridInitEvents,
  isoGridExpandSubItems,
  isoGridCollapseSubItems,
  isoGridScrollPage,
  isoGridCreatePseudoScroller
};
