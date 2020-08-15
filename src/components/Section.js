import PropTypes from "prop-types";
import styled from "styled-components/macro";
import { color } from "styled-system";

const Section = styled.section`
  position: relative;
  ${color}
`;

Section.displayName = "Section";

export default Section;
