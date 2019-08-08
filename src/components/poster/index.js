import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

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
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;

const Title = styled.div`
  /* font-size: 16px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding-top: 3px; */
  display: block;
  margin-bottom: 3px;
`;

const Date = styled.div`
  /* text-align: right;
  font-size: 12px;
  color: #95a5a6; */
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
`;

const Poster = ({ imageUrl, title, rating, year }) => {
  const { REACT_APP_IMAGE_API_URL } = process.env;
  let star = "";
  for (let i = 0; i < 10; i++) {
    if (i < Math.floor(rating)) star += "💛";
    else star += `🤍`;
  }
  return (
    <Container>
      <ImageContainer>{imageUrl !== null && <Image bgUrl={`${REACT_APP_IMAGE_API_URL}/${imageUrl}`} />}</ImageContainer>
      <Rating>{star}</Rating>
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
