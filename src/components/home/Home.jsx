import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../section";
import Loader from "../../utils/Loader";
import { Message } from "../error";

const Container = styled.div`
  padding: 0px 20px;
`;

const Home = props => {
  const { nowPlaying, upComing, popular, error, loading } = props;

  return loading ? (
    <Loader />
  ) : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now Playing">
          {nowPlaying.map((movie, idx) => {
            return <div key={idx}>{movie.title}</div>;
          })}
        </Section>
      )}

      {upComing && upComing.length > 0 && (
        <Section title="Up Coming">
          {upComing.map((movie, idx) => {
            return <div key={idx}>{movie.title}</div>;
          })}
        </Section>
      )}

      {popular && popular.length > 0 && (
        <Section title="Popular">
          {popular.map((movie, idx) => {
            return <div key={idx}>{movie.title}</div>;
          })}
        </Section>
      )}
      {error && <Message text={error} color="#e74c3c" />}
    </Container>
  );
};

Home.propTypes = {
  nowPlaying: PropTypes.array,
  upComing: PropTypes.array,
  popular: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default Home;
