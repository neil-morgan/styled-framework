import { css } from "styled-components";
import getMediaQuery from "./get-media-query";
import Config from "./config";
import Util from "./util";

const { dimensions, grid } = Config();
const { isEmptyObject, isConstructorType } = Util();

const _error = (message) => {
  throw new Error(message);
};

const clean = (raw) => {
  const props = Object.keys(raw)
    .filter((props) => ~dimensions.indexOf(props))
    .sort((key1, key2) => dimensions.indexOf(key1) - dimensions.indexOf(key2))
    .reduce((obj, key) => ((obj[key] = raw[key]), obj), {});

  if (!isEmptyObject(props)) return props;
};

const resolve = (num) => {
  return num <= grid.columns
    ? css`
        flex-basis: ${(100 / grid.columns) * num}%;
        max-width: ${(100 / grid.columns) * num}%;
      `
    : _error(`Value must range between 1 and ${grid.columns}`);
};

export default (obj) => {
  const props = clean(obj);
  let arr = [];
  if (undefined !== props) {
    Object.entries(props).forEach(([key, value]) => {
      isConstructorType("number", value)
        ? arr.push(getMediaQuery[key]`${resolve(value)}`)
        : _error(`Value must be an integer`);
    });
  }
  return arr;
};
