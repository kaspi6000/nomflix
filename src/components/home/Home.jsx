import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../section";
import Loader from "../../utils/Loader";
import { Message } from "../error";
import Poster from "../poster";
import { Link } from "react-router-dom";

const Container = styled.div`
  padding: 20px;
`;

const Home = props => {
  const { nowPlaying, upComing, popular, error, loading } = props;
  // console.log(props);
  return loading ? (
    <Loader />
  ) : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now Playing">
          {nowPlaying.map(movie => {
            return (
              <Link key={movie.id} to={`/movie/${movie.id}`}>
                <Poster
                  imageUrl={movie.poster_path}
                  title={movie.title}
                  rating={movie.vote_average}
                  year={movie.release_date}
                />
              </Link>
            );
          })}
        </Section>
      )}

      {upComing && upComing.length > 0 && (
        <Section title="Up Coming">
          {upComing.map(movie => {
            return (
              <Link key={movie.id} to={`/movie/${movie.id}`}>
                <Poster
                  imageUrl={movie.poster_path}
                  title={movie.title}
                  rating={movie.vote_average}
                  year={movie.release_date}
                />
              </Link>
            );
          })}
        </Section>
      )}

      {popular && popular.length > 0 && (
        <Section title="Popular">
          {popular.map(movie => {
            return (
              <Link key={movie.id} to={`/movie/${movie.id}`}>
                <Poster
                  imageUrl={movie.poster_path}
                  title={movie.title}
                  rating={movie.vote_average}
                  year={movie.release_date}
                />
              </Link>
            );
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
