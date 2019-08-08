import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Detail = props => {
  const { result, error, loading } = props;
  return <div>Detail</div>;
};

Detail.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default Detail;
