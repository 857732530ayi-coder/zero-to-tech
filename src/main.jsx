import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// 承担"入口文件"的职责：把 React 组件 App 挂载到页面上。
// 4.1 那 8 个 CSS 原样搬过来——React 不管 CSS 内部细节。
// 顺序和 4.1 的 html <link> 一致。
import "./css/reset.css";
import "./css/variables.css";
import "./css/layout.css";
import "./css/hero.css";
import "./css/nav.css";
import "./css/cards.css";
import "./css/lab.css";
import "./css/responsive.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
