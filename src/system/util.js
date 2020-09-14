const isValidDate = (s) => {
  let bits = s.split("/");
  let y = bits[2],
    m = bits[1],
    d = bits[0];
  let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if ((!(y % 4) && y % 100) || !(y % 400)) {
    daysInMonth[1] = 29;
  }
  return !/\D/.test(String(d)) && d > 0 && d <= daysInMonth[--m];
};

const isANumber = (num) => {
  return /^-?[\d.]+(?:e-?\d+)?$/.test(num);
};

const isConstructorType = (type, value) => {
  return value.constructor.name.toLowerCase() === type.toLowerCase();
};

const isEmptyObject = (obj) => {
  return Object.keys(obj).length === 0;
};

const delEmptyObjectKeys = (obj) => {
  Object.keys(obj).forEach((key) => obj[key] == null && delete obj[key]);
  return obj;
};

const getObjectLength = (obj) => {
  let size = 0,
    key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) size++;
  }
  return size;
};

const arrayToObject = (array, key) => {
  const initialValue = {};
  return array.reduce((obj, item) => {
    return {
      ...obj,
      [item[key]]: item,
    };
  }, initialValue);
};

const iterate = (num) => {
  return function (f) {
    if (num > 0) {
      f();
      iterate(num - 1)(f);
    }
  };
};

const slice = (obj, s, e) =>
  Object.keys(obj)
    .slice(s, e)
    .reduce((result, key) => {
      result[key] = obj[key];
      return result;
    }, {});

const generateKey = (pre) => {
  return `${pre}_${new Date().getTime()}`;
};

export default function () {
  return {
    isValidDate,
    isANumber,
    isConstructorType,
    isEmptyObject,
    delEmptyObjectKeys,
    getObjectLength,
    arrayToObject,
    generateKey,
    iterate,
    slice,
  };
}
