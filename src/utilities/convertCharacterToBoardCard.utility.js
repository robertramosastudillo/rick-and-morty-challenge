export const convertCharacterToBoardCard = (characters) => {
  const newCharacters = characters.map((character) => {
    return {
      id: character.id,
      name: character.name,
      image: character.image,
    };
  });

  newCharacters.sort(() => {
    return Math.random() - 0.5;
  });

  return newCharacters.slice(1, 11);
};
