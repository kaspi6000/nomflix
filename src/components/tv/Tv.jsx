import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../section";
import Loader from "../../utils/Loader";
import { Message } from "../error";

const Container = styled.div`
  padding: 0px 20px;
`;

const Tv = props => {
  const { topRated, popular, airingToday, error, loading } = props;
  // console.log(props);
  return loading ? (
    <Loader />
  ) : (
    <Container>
      {topRated && topRated.length > 0 && (
        <Section title="Top rated TV show">
          {topRated.map((show, idx) => {
            return <div key={idx}>{show.name}</div>;
          })}
        </Section>
      )}

      {popular && popular.length > 0 && (
        <Section title="Popular TV show">
          {popular.map((show, idx) => {
            return <div key={idx}>{show.name}</div>;
          })}
        </Section>
      )}

      {airingToday && airingToday.length > 0 && (
        <Section title="AiringToday TV show">
          {airingToday.map((show, idx) => {
            return <div key={idx}>{show.name}</div>;
          })}
        </Section>
      )}
      {error && <Message text={error} color="#e74c3c" />}
    </Container>
  );
};

Tv.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default Tv;
