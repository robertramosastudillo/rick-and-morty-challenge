import http from "../config/http-common";

const getCharacters = () => {
  return http.get(`/character`);
};

const RickAndMortyService = { getCharacters };

export default RickAndMortyService;
