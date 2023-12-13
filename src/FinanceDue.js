import * as React from "react";
const SvgFinanceDue = ({ title, titleId, ...props }) => (
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
      d="M14.268 8.094a.732.732 0 0 1 .331-.518c.184-.122.41-.16.672-.118.26.042.459.15.596.325a.744.744 0 0 1 .15.597.724.724 0 0 1-.332.51c-.183.122-.406.16-.666.118-.263-.042-.465-.149-.602-.32a.733.733 0 0 1-.15-.594M14.754 6.502l.15-1.33c.471.298.893.668 1.253 1.095l-.097.45a.347.347 0 0 1-.392.266l-.628-.103a.347.347 0 0 1-.287-.377z"
    />
    <path
      fill="currentColor"
      d="M19.684 19.492H4.187l1.602-2.283a3.396 3.396 0 0 0 .618-1.954V9.832c0-1.525.618-2.907 1.619-3.907a5.507 5.507 0 0 1 3.907-1.62 5.5 5.5 0 0 1 2.468.579l-.176 1.556a.873.873 0 0 0 .174.632 1.282 1.282 0 0 0-.659.932c-.06.375.028.724.26 1.012.22.277.534.453.933.516.396.065.747-.002 1.045-.2.309-.205.504-.505.566-.871a1.266 1.266 0 0 0-.328-1.094.864.864 0 0 0 .362-.534c.558.864.883 1.892.883 2.997v5.423c0 .7.216 1.381.618 1.953l1.604 2.286z"
    />
    <path
      fill="currentColor"
      d="M11.79 6.498h-.025a.83.83 0 0 1-.83-.83V3.9a.83.83 0 0 1 .83-.83h.024a.83.83 0 0 1 .83.83v1.768a.829.829 0 0 1-.83.83M11.801 21.21h-.05a1.69 1.69 0 0 1-1.69-1.691v-.05c0-.933.757-1.69 1.69-1.69h.05c.934 0 1.69.757 1.69 1.69v.05a1.69 1.69 0 0 1-1.69 1.69M15.867 7.781a.744.744 0 0 1 .15.597.724.724 0 0 1-.332.511c-.183.122-.406.16-.666.118-.263-.042-.465-.15-.602-.321a.73.73 0 0 1-.15-.594.732.732 0 0 1 .332-.518c.184-.121.41-.16.672-.117.262.044.459.15.596.324M16.689 3.774l-.53 2.493-.097.45a.347.347 0 0 1-.392.266l-.628-.103a.345.345 0 0 1-.286-.378l.15-1.33.192-1.658a.34.34 0 0 1 .395-.298l.917.15c.191.03.32.215.279.408"
    />
    <path
      fill="currentColor"
      d="M15.867 7.781c-.137-.174-.335-.28-.596-.324-.263-.042-.488-.004-.672.117a.741.741 0 0 0-.331.518.73.73 0 0 0 .15.594c.136.17.338.277.601.32.26.043.483.005.666-.117a.735.735 0 0 0 .331-.51.739.739 0 0 0-.15-.598m.542-4.418-.916-.15a.342.342 0 0 0-.396.3l-.19 1.657-.152 1.33c-.02.181.105.348.287.378l.628.103c.181.028.353-.09.392-.267l.097-.45.53-2.492a.343.343 0 0 0-.28-.409z"
    />
  </svg>
);
export default SvgFinanceDue;
