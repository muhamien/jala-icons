import * as React from "react";
const SvgCultivationReport = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#404040"
      d="M13.227 2.004h-7.68a.927.927 0 0 0-.922.937v18.11c0 .518.411.936.922.936h12.902c.511 0 .922-.418.922-.937V8.25h-5.222a.932.932 0 0 1-.922-.937zm-.718 9.602c.318.002.636.044.942.127l-.966 3.041h-2.088a2.643 2.643 0 0 1-2.64-2.64.528.528 0 0 1 .527-.528zm-3.578 1.271a.268.268 0 0 1-.098-.118.267.267 0 0 1 .192-.36.264.264 0 1 1-.095.48zm4.786 2.688a1.328 1.328 0 0 0-.71-.695l.945-2.973a3.706 3.706 0 0 1 2.252 3.402c0 .067-.003.128-.009.196l-.004.07zm-.274 1.454c.244-.247.382-.578.385-.925h2.287a3.703 3.703 0 0 1-1.768 2.406zm-.441.288.868 1.419c-.412.165-.85.254-1.293.263l-1.286.258a.528.528 0 0 1-.576-.753l.146-.292-.146-.292a.531.531 0 0 1 .052-.556.525.525 0 0 1 .524-.197l1.252.25c.158-.006.313-.04.459-.1"
    />
    <path
      fill="#404040"
      d="M15.403 7.144h4.001a1.179 1.179 0 0 0-.232-.335c-4.822-4.821-4.61-4.672-4.91-4.804v3.997c0 .632.51 1.142 1.14 1.142"
    />
  </svg>
);
export default SvgCultivationReport;
