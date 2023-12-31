import * as React from "react";
const SvgShrimp = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M15.937 13.315a2.842 2.842 0 0 1-.82 1.972l1.927 3.158a7.913 7.913 0 0 0 3.767-5.13zM14.185 10.708c.677.28 1.22.81 1.514 1.481h5.273c.012-.21.028-.377.028-.566a7.889 7.889 0 0 0-4.8-7.251zM14.176 15.901c-.31.128-.641.2-.977.211l-2.67-.533a1.125 1.125 0 0 0-1.227 1.607l.31.622-.31.621a1.126 1.126 0 0 0 1.227 1.606l2.74-.548a7.828 7.828 0 0 0 2.756-.56zM15.134 4.02a7.837 7.837 0 0 0-2.008-.27H4.125A1.126 1.126 0 0 0 3 4.876a5.632 5.632 0 0 0 5.625 5.626h4.45zM5.813 6.555a.562.562 0 1 1 0-1.125.562.562 0 0 1 0 1.125"
    />
  </svg>
);
export default SvgShrimp;
