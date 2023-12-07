import * as React from "react";
const SvgTrading = ({ title, titleId, ...props }) => (
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
      d="M4.102 13.158a.349.349 0 0 0 0 .493l1.01 1.01a.35.35 0 0 0 .495 0L11.3 8.969a.349.349 0 0 1 .494 0l.949.949c.19.19.514.103.584-.157l1.425-5.32a.349.349 0 0 0-.427-.428l-5.32 1.426a.349.349 0 0 0-.157.584l.948.948a.349.349 0 0 1 0 .494zM19.898 10.842a.349.349 0 0 0 0-.493l-1.01-1.01a.349.349 0 0 0-.495 0L12.7 15.031a.349.349 0 0 1-.494 0l-.949-.949a.349.349 0 0 0-.584.157l-1.425 5.32c-.07.26.168.497.427.428l5.32-1.426a.349.349 0 0 0 .157-.584l-.948-.948a.349.349 0 0 1 0-.494z"
    />
  </svg>
);
export default SvgTrading;