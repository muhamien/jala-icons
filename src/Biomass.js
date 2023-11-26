import * as React from "react";
const SvgBiomass = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M5.018 3h13.95a1.268 1.268 0 0 1 0 2.537H5.018a1.268 1.268 0 0 1 0-2.537ZM10.091 6.015h3.17V7.84h-3.17V6.015ZM12.733 12.863a4.485 4.485 0 0 0-.581-2.114 4.485 4.485 0 0 0-.582 2.114c0 1.167.259 2.113.582 2.113.323 0 .58-.947.58-2.114Z"
      fill="#404040"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.546 21H5.44a1.693 1.693 0 0 1-1.691-1.691l1.48-9.3a1.693 1.693 0 0 1 1.69-1.691h9.934a1.693 1.693 0 0 1 1.692 1.691l1.69 9.3A1.693 1.693 0 0 1 18.546 21Zm-6.447-10.99a4.756 4.756 0 1 0 0 9.511 4.756 4.756 0 0 0 0-9.512Z"
      fill="#404040"
    />
  </svg>
);
export default SvgBiomass;