import http from "../config/http-common";

const getCharacters = () => {
  return http.get(`/character?page=${Math.floor(Math.random() * 41) + 1}`);
};

const RickAndMortyService = { getCharacters };

export default RickAndMortyService;
