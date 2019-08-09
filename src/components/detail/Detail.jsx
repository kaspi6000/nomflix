import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../utils/Loader";
import { Movie, TvOff } from "@material-ui/icons";
import { Message } from "../error";
import { Link } from "react-router-dom";
import ReactCountryFlag from "react-country-flag";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div`
  opacity: 0.5;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
`;

const Cover = styled.div`
  width: 35%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 5px;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
`;

const Title = styled.h3`
  font-size: 30px;
  margin-bottom: 10px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const ItemContainer = styled.div`
  margin: 20px 0;
`;

const Item = styled.span``;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.div`
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.5;
  width: 50%;
`;

const Section = styled.div`
  height: 30%;
  background-color: rgba(255, 255, 255, 0.3);
  margin: 25px 0;
  position: relative;
  overflow: hidden;
`;

const CompanyImage = styled.div`
  background: url(${props => props.bgImage}) no-repeat;
  background-size: contain;
  height: 80%;
  background-position: center center;
  position: absolute;
  top: 0;
  left: ${props => props.sequence * 33}%;
  width: 30%;
  margin: 33px 5px;
  // transform: translateX(-105%);
`;

const SectionTitle = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  margin: 5px 5px;
  font-size: 20px;
  opacity: 0.9;
`;

const VideoLink = styled(Link)`
  color: #e74c3c;
`;

const Detail = props => {
  const { result, error, loading, isMovie = true } = props;
  const { REACT_APP_IMAGE_API_URL } = process.env;
  console.log(props);
  return loading ? (
    <Loader />
  ) : (
    <Container>
      {error ? (
        <Message text={error} />
      ) : (
        <>
          <Backdrop
            bgImage={`${REACT_APP_IMAGE_API_URL}${result.backdrop_path}`}
          />
          <Content>
            {result.poster_path === null ? (
              isMovie ? (
                <Movie style={{ width: "100%", height: "100%" }} />
              ) : (
                <TvOff style={{ width: "100%", height: "100%" }} />
              )
            ) : (
              <Cover
                bgImage={`${REACT_APP_IMAGE_API_URL}/${result.poster_path}`}
              />
            )}
            <Data>
              <Title>
                <ReactCountryFlag
                  code={
                    result.production_countries
                      ? result.production_countries[0].iso_3166_1
                      : result.origin_country[0]
                  }
                  styleProps={{ marginRight: "5px" }}
                  svg
                />
                {result.original_title
                  ? result.original_title
                  : result.original_name}
              </Title>
              <VideoLink to="/collections">🎬 Goning to videos</VideoLink>
              <ItemContainer>
                <Item>
                  {result.release_date
                    ? result.release_date.substring(0, 4)
                    : result.first_air_date.substring(0, 4)}
                </Item>
                <Divider>•</Divider>
                <Item>
                  {result.runtime ? result.runtime : result.episode_run_time}{" "}
                  min
                </Item>
                <Divider>•</Divider>
                <Item>
                  {result.genres &&
                    result.genres.map((genre, idx) =>
                      idx + 1 === result.genres.length
                        ? genre.name
                        : `${genre.name} / `
                    )}
                </Item>
              </ItemContainer>
              <Overview>{result.overview}</Overview>
              <Section>
                <SectionTitle>Production Companies</SectionTitle>
                {result.production_companies &&
                  result.production_companies.map((company, idx) => (
                    <CompanyImage
                      key={company.id}
                      sequence={idx}
                      bgImage={
                        company.logo_path
                          ? `${REACT_APP_IMAGE_API_URL}${company.logo_path}`
                          : ""
                      }
                    />
                  ))}
              </Section>
              <Section />
            </Data>
          </Content>
        </>
      )}
    </Container>
  );
};

Detail.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default Detail;
