import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../utils/Loader";
import Section from "../section";
import { Message } from "../error";
import Poster from "../poster";
import { Link } from "react-router-dom";

const Container = styled.div`
  padding: 0 20px;
`;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`;

const Search = props => {
  const { movieResults, tvResults, searchTerm, loading, error, handleSubmit, handleChange, beforTerm } = props;
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input placeholder="Search Movies or TV Show ..." value={searchTerm} onChange={handleChange("searchTerm")} />
      </Form>
      {loading ? (
        <Loader />
      ) : (
        <>
          {movieResults && movieResults.length > 0 && (
            <Section title="Search Movies">
              {movieResults.map(movie => (
                <Link key={movie.id} to={`/movie/${movie.id}`}>
                  <Poster imageUrl={movie.poster_path} title={movie.title} rating={movie.vote_average} year={movie.release_date} />
                </Link>
              ))}
            </Section>
          )}
          {tvResults && tvResults.length > 0 && (
            <Section title="Search TV Show">
              {tvResults.map(show => (
                <Link key={show.id} to={`/show/${show.id}`}>
                  <Poster imageUrl={show.poster_path} title={show.name} rating={show.vote_average} year={show.first_air_date} />
                </Link>
              ))}
            </Section>
          )}
        </>
      )}
      {error && <Message text={error} color="#e74c3c" />}
      {movieResults && tvResults && movieResults.concat(tvResults).length === 0 && <Message text={`Nothing Movies & TV Show : "${beforTerm}"`} color="#95a5a6" />}
    </Container>
  );
};

Search.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  searchTerm: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired
};

export default Search;
