import { addClass, removeClass } from "./helpers";
let mouseOverHander = function(event) {
  let span = event.target.parentNode.getElementsByTagName("SPAN")[0];
  addClass(span, "tooltip-show");
};
let mouseOutHander = function(event) {
  let span = event.target.parentNode.getElementsByTagName("SPAN")[0];
  removeClass(span, "tooltip-show");
};

export default {
  install(Vue) {
    Vue.directive("tooltip", {
      bind(el, bindings) {
        let span = document.createElement("span");
        let text = document.createTextNode(
          `Seats available: ${bindings.value.seats}`
        );
        span.appendChild(text);
        addClass(span, "tooltip");
        el.appendChild(span);
        let div = el.getElementsByTagName("DIV")[0];
        div.addEventListener("mouseover", mouseOverHander);
        div.addEventListener("mouseout", mouseOutHander);
        div.addEventListener("touchstart", mouseOverHander);
        div.addEventListener("touchend", mouseOutHander);
      },
      unbind(el) {
        let div = el.getElementsByTagName("DIV")[0];
        div.removeEventListener("mouseover", mouseOverHander);
        div.removeEventListener("mouseout", mouseOutHander);
        div.removeEventListener("touchstart", mouseOverHander);
        div.removeEventListener("touchend", mouseOutHander);
      },
    });
  },
};
