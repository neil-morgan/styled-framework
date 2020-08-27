import React from "react";
import styled from "styled-components/macro";
import PropTypes from "prop-types";

const LegendAndLabel = (props) => {
  const { legend, label } = props;
  return (
    <>
      {legend && <Legend>{legend}</Legend>}
      {label && <Label>{label}</Label>}
    </>
  );
};

const Label = styled.label`
  ${({ theme }) => theme && theme.colors.text};
  font-weight: 500;
  margin: 0;
  user-select: none;
`;
const Legend = styled.legend`
  width: 100%;
  ${({ theme }) => theme && theme.fontSize.heading};
  color: ${({ theme }) => theme && theme.colors.text};
`;

LegendAndLabel.propTypes = {
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  legend: PropTypes.string,
};

LegendAndLabel.defaultProps = {
  isRequired: false,
};

export default LegendAndLabel;
