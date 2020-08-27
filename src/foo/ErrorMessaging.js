import React from "react";
import styled from "styled-components/macro";
import PropTypes from "prop-types";

const ErrorMessaging = (props) => {
  const { isMissing, hasError, errorMessage, missingMessage } = props;
  return (
    <>
      {hasError && errorMessage && <Error>{errorMessage}</Error>}
      {isMissing && missingMessage && <Error>{missingMessage}</Error>}
    </>
  );
};

const Error = styled.div`
  ${({ theme }) => theme && theme.fontSize.regular}
  display: block;
  color: red;
  white-space: normal;
  word-wrap: break-word;
  width: 100%;
  max-width: 635px;
  font-weight: 500;
  position: relative;
  margin-bottom: 18px;
`;

ErrorMessaging.propTypes = {
  errorMessage: PropTypes.string,
  hasError: PropTypes.bool,
  isMissing: PropTypes.bool,
  missingMessage: PropTypes.string,
};

ErrorMessaging.defaultProps = {
  missingMessage: "This field is required.",
};

export default ErrorMessaging;
