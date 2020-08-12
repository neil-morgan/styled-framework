import { fluidRange } from "polished";

export default (sizes, breakpoints) => {
  const obj = {},
    setup = {
      property: "font-size",
      min: `${breakpoints[0].replace(/em/g, "") * 16}px`,
      max: `${breakpoints[3].replace(/em/g, "") * 16}px`,
    };
  Object.entries(sizes).forEach(([key, value]) => {
    obj[key] = fluidRange(
      {
        prop: setup.property,
        fromSize: value.from,
        toSize: value.to,
      },
      setup.min,
      setup.max
    );
  });

  return obj;
};
