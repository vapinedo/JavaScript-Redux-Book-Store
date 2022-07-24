export function ReactJs() {}

ReactJs.prototype.render = function (component) {
  const root = document.getElementById("root");
  root.appendChild(component);
};