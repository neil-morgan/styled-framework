import PropTypes from "prop-types";
import styled, { css } from "styled-components/macro";
import Config from "../system/config";
import getMediaQuery from "../system/get-media-query";

const { dimensions } = Config();

const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-right: ${({ theme }) => theme.grid.margin};
  padding-left: ${({ theme }) => theme.grid.margin};

  &::after,
  &::before {
    content: "";
    display: block;
    min-height: 4rem;
    height: 4vw;
    max-height: 6rem;
  }

  ${(props) =>
    !props.fluid &&
    css`
      ${dimensions.map((key, i) => {
        return (
          props.theme.containers[i] &&
          getMediaQuery[key]`width: ${(props) => props.theme.containers[i]}`
        );
      })}
    `}
`;

export default Container;
