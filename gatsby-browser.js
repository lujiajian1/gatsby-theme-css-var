import 'antd/dist/antd.css';
import "./src/styles/ant-dark.css";
const localKey = "theme-mode";

const getStorage = () => {
  const value = localStorage.getItem(localKey);
  return value ? value : getThemeMode() === 'lx-theme-light' ? 'light' : 'dark';
};

const getThemeMode = () => {
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "lx-theme-light"
    : "lx-theme-dark";
};

const switchModeHandler = (value) => {
  const doc = document.querySelector("body");
  if (doc) {
    doc.removeAttribute("class");
    doc.classList.add(value);
  }
};

const changeColorMode = () => {
  if (getStorage() !== "auto") {
    return;
  }
  const color = getThemeMode();
  switchModeHandler(color);
};

export const onClientEntry = () => {
  const matchMediaHandler = window.matchMedia("(prefers-color-scheme: light)");
  matchMediaHandler.addEventListener("change", changeColorMode);
};