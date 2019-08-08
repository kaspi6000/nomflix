import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../utils/Loader";

const Container = styled.div`
  padding: 0 20px;
`;

const Image = styled.img`
  opacity: 0.5;
  width: 100%;
`;

const Detail = props => {
  const { result, error, loading } = props;
  const { REACT_APP_IMAGE_API_URL } = process.env;
  console.log(props);
  return loading ? (
    <Loader />
  ) : (
    <Container>
      {result.adult ? <span>19세이상 관람 가능</span> : <span>전체 연령</span>}
      <Image src={`${REACT_APP_IMAGE_API_URL}${result.backdrop_path}`} alt="" />
      <div>
        <span>{result.title}</span>
        <span>장르 : {result.genres.map(genre => `${genre.name} `)}</span>
        <span>{result.overview}</span>
        {result &&
          result.videos.results.map(video => {
            return (
              <div key={video.id}>
                <video src={`https://www.youtube.com/watch?v=${video.key}`} autoPlay />
              </div>
            );
          })}
      </div>
    </Container>
  );
};

Detail.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default Detail;
