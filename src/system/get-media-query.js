import { css } from "styled-components";
import Config from "./config";

const { dimensions, breakpoints } = Config();

const merge = () => {
  let arr = [];
  for (const key in breakpoints) {
    arr[dimensions[key]] = parseFloat(breakpoints[key].replace(/em/g, ""));
  }
  return { ...arr };
};

const make = (media) => {
  return (...args) => css`
    @media ${media} {
      ${css(...args)}
    }
  `;
};

export default Object.keys(merge()).reduce((media, breakpoint) => {
  const breakpointWidth = merge()[breakpoint];
  media[breakpoint] = make(
    [breakpoint !== 0 && `(min-width: ${breakpointWidth}em)`]
      .filter(Boolean)
      .join(" and ")
  );
  return media;
}, {});
