import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Movie, TvOff } from "@material-ui/icons";

const Container = styled.div`
  font-size: 12px;
`;

const Image = styled.div`
  /* width: 100%; */
  background-image: url(${props => props.bgUrl});
  height: 180px;
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
  transition: opacity 0.1s linear;
`;

const Rating = styled.span`
  bottom: 5px;
  right: 5px;
  position: absolute;
  opacity: 0;
  transition: opacity 0.1s linear;
`;

const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.3;
      border: 3px solid #3498db;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;

const Title = styled.span`
  /* font-size: 16px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding-top: 3px; */
  display: block;
  margin-bottom: 3px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding-top: 3px;
`;

const Date = styled.div`
  /* text-align: right;
  font-size: 12px;
  color: #95a5a6; */
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
`;

const Poster = ({ imageUrl, title, rating, year, isMovie = true }) => {
  const { REACT_APP_IMAGE_API_URL } = process.env;
  return (
    <Container>
      <ImageContainer>
        {imageUrl === null ? (
          <Image>{isMovie ? <Movie style={{ width: "100%", height: "100%" }} /> : <TvOff style={{ width: "100%", height: "100%" }} />}</Image>
        ) : (
          <Image bgUrl={`${REACT_APP_IMAGE_API_URL}/${imageUrl}`} />
        )}
        <Rating>
          <span role="img" aria-label="star">
            💛
          </span>{" "}
          {rating} / 10
        </Rating>
      </ImageContainer>
      <Title>{title}</Title>
      <Date>{year && year.substring(0, 4)}</Date>
    </Container>
  );
};

Poster.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  year: PropTypes.string
};

export default Poster;
