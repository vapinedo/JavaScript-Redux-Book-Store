import { App } from "./app.js";
import { ReactJs } from "./react.js";

const main = async () => {
  const React = new ReactJs();
  React.render(App());
};
main();