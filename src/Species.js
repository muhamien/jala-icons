import * as React from "react";
const SvgSpecies = ({ title, titleId, ...props }) => (
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
      fillRule="evenodd"
      d="M16.752 7.5c.366.001.73.05 1.083.145l-1.112 3.496h-2.398a3.038 3.038 0 0 1-3.035-3.034.607.607 0 0 1 .607-.607zM12.64 8.962a.301.301 0 1 0 .334-.5.301.301 0 0 0-.334.5"
      clipRule="evenodd"
    />
    <path
      fill="#404040"
      d="M18.14 12.052a1.528 1.528 0 0 0-.816-.8l1.087-3.42A4.255 4.255 0 0 1 21 11.747c0 .081-.005.155-.01.239l-.005.067zM17.83 13.723c.28-.284.438-.666.442-1.064l2.63-.003a4.265 4.265 0 0 1-2.032 2.77zM17.319 14.054c-.168.069-.346.107-.527.113l-1.439-.287a.606.606 0 0 0-.662.866l.168.335-.168.335a.606.606 0 0 0 .662.867l1.479-.296a4.221 4.221 0 0 0 1.484-.3zM5.731 11.137c.004-.4.162-.78.442-1.064l-1.04-1.706a4.268 4.268 0 0 0-2.03 2.77zM5.86 11.746c.159.361.451.647.816.797L5.59 15.96A4.254 4.254 0 0 1 3 12.052c0-.081.005-.155.01-.239l.005-.067zM6.681 9.742c.167-.07.346-.109.527-.115l1.438.289a.607.607 0 0 0 .662-.867l-.168-.335.168-.335a.607.607 0 0 0-.662-.866l-1.479.295a4.222 4.222 0 0 0-1.484.301z"
    />
    <path
      fill="#404040"
      fillRule="evenodd"
      d="M7.248 16.295a4.223 4.223 0 0 1-1.084-.145l1.112-3.496h2.4a3.038 3.038 0 0 1 3.034 3.034.607.607 0 0 1-.607.607zm4.112-1.462a.3.3 0 1 0-.334.5.3.3 0 0 0 .334-.5"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSpecies;