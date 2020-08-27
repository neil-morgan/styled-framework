import Util from "../system/util";

const { isConstructorType } = Util();

export default {
  NUMBER: (value) => {
    console.log(value);
    return /^[0-9]*$/.test(value);
  },

  TEXT: (value) => {
    return /^[a-zA-Z ]*$/.test(value);
  },
};
