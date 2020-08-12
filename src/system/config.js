import getFluidFont from "./get-fluid-font";

const DIMENSION_NAMES = ["xs", "sm", "md", "lg", "xl"];

const CONTAINERS = ["100%", "55rem", "74rem", "100rem", "131rem"];

const BREAKPOINTS = ["0", "37em", "48em", "64.625em", "84em"];

const GRID = {
  columns: 12,
  gutter: "1rem",
  margin: "1rem",
};

const HIERARCHY = {
  mainHeading: {
    from: "30px",
    to: "52px",
  },
  heading: {
    from: "26px",
    to: "40px",
  },
  subHeading: {
    from: "22px",
    to: "28px",
  },
  regular: {
    from: "16px",
    to: "18px",
  },
  small: {
    from: "14px",
    to: "16px",
  },
};

const COLORS = {
  primary: "#806CE9",
  secondary: "#4C94EB",
  tertiary: "#7F9C38",
  text: "#FFFFFF",
  link: "#2196f3",
  foreground: "#2F3238",
  background: "#212327",
  red: "#f44336",
  pink: "#e91e63",
  purple: "#9c27b0",
  violet: "#673ab7",
  indigo: "#3f51b5",
  blue: "#2196f3",
  azure: "#03a9f4",
  cyan: "#00bcd4",
  teal: "#009688",
  green: "#4caf50",
  tea: "#8bc34a",
  lime: "#cddc39",
  yellow: "#ffeb3b",
  amber: "#ffc107",
  orange: "#ff9800",
  carrot: "#ff5722",
  brown: "#795548",
  grey: "#9e9e9e",
  steel: "#607d8b",
  light: "#f7f7f7",
};

const DEBUG_MODE = {
  active: false,
  gridBackground: "#000000",
  gridPattern: {
    brightness: 0.15,
    red: "000",
    green: "255",
    blue: "000",
  },
  wireframeFontColor: "#ffffff",
  wireframe: {
    brightness: 0.75,
    red: "255",
    green: "255",
    blue: "255",
  },
};

export default function () {
  return {
    debug: DEBUG_MODE,
    dimensions: DIMENSION_NAMES,
    containers: CONTAINERS,
    breakpoints: BREAKPOINTS,
    grid: GRID,
    fontSize: getFluidFont(HIERARCHY, BREAKPOINTS),
    colors: COLORS,
  };
}
