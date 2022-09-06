export const convertCharacterToBoardCard = (characters) => {
  const newCharacters = characters.map((character) => {
    return {
      id: character.id,
      name: character.name,
      image: character.image,
    };
  });

  return newCharacters.slice(1, 11);
};
