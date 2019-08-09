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

const Tv = props => {
  const { topRated, popular, airingToday, error, loading } = props;
  // console.log(props);
  return loading ? (
    <Loader />
  ) : (
    <Container>
      {topRated && topRated.length > 0 && (
        <Section title="Top rated TV show">
          {topRated.map(show => {
            return (
              <Link key={show.id} to={`/show/${show.id}`}>
                <Poster imageUrl={show.poster_path} title={show.name} rating={show.vote_average} year={show.first_air_date} isMovie={false} />
              </Link>
            );
          })}
        </Section>
      )}

      {popular && popular.length > 0 && (
        <Section title="Popular TV show">
          {popular.map(show => {
            return (
              <Link key={show.id} to={`/show/${show.id}`}>
                <Poster imageUrl={show.poster_path} title={show.name} rating={show.vote_average} year={show.first_air_date} isMovie={false} />
              </Link>
            );
          })}
        </Section>
      )}

      {airingToday && airingToday.length > 0 && (
        <Section title="AiringToday TV show">
          {airingToday.map(show => {
            return (
              <Link key={show.id} to={`/show/${show.id}`}>
                <Poster imageUrl={show.poster_path} title={show.name} rating={show.vote_average} year={show.first_air_date} isMovie={false} />
              </Link>
            );
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
