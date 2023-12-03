import * as React from "react";
const SvgSimulation = ({ title, titleId, ...props }) => (
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
      d="M4.217 16.045v2.918a.326.326 0 0 0 .326.325h2.253a.326.326 0 0 0 .326-.325V13.83L5.483 15.47a1.987 1.987 0 0 1-1.266.576M8.248 13.793v5.17a.326.326 0 0 0 .325.325h2.253a.326.326 0 0 0 .326-.326V15.92a1.966 1.966 0 0 1-1.357-.577zM12.278 15.598v3.365a.326.326 0 0 0 .326.325h2.253a.326.326 0 0 0 .325-.325v-6.209l-2.584 2.585a1.942 1.942 0 0 1-.32.259M18.997 8.938l-2.689 2.685v7.337a.326.326 0 0 0 .326.325h2.253a.326.326 0 0 0 .326-.325V9.14c-.074-.062-.13-.118-.17-.155z"
    />
    <path
      fill="#404040"
      d="M20.845 4.175a.629.629 0 0 0-.475-.174h-.06c-1.05.048-2.096.1-3.146.148a.679.679 0 0 0-.484.166.551.551 0 0 0-.115.17.544.544 0 0 0 .167.659l.262.266c.182.185.366.37.551.55l-6.344 6.35-2.857-2.85a.906.906 0 0 0-1.283 0l-3.795 3.794a.907.907 0 0 0 0 1.283l.17.17a.904.904 0 0 0 1.284 0l2.984-2.984 2.848 2.85a.91.91 0 0 0 1.286 0l7.159-7.159.81.807a.614.614 0 0 0 .433.229c.09 0 .18-.025.259-.07a.704.704 0 0 0 .155-.114c.13-.143.2-.33.196-.522.03-.68.063-1.363.096-2.045l.048-1.024a.636.636 0 0 0-.15-.5"
    />
  </svg>
);
export default SvgSimulation;
