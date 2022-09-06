import Board from "../../components/Board/Board";
import { Timer } from "../../components/Timer/Timer";
import { useEffect, useState } from "react";
import {
  OptionsMenuContainer,
  BoardContainer,
  TimerGame,
  WinnerText,
  WinnerBg,
} from "./Game.styled";
import { GameContainer, Movements, OptionsMenu, Button } from "./Game.styled";
import rickAndMortyService from "../../api/services/rickAndMortyService";
import { convertCharacterToBoardCard } from "../../utilities/convertCharacterToBoardCard.utility";
import confetti from "canvas-confetti";

export const Game = () => {
  const [shuffledMemoBlocks, setShuffledMemoBlocks] = useState([]);
  const [animating, setAnimating] = useState(false);
  const [movements, setMovements] = useState(0);
  const [finalized, setFinalized] = useState(1);
  const [reStartTime, setReStartTime] = useState(true);
  const [stoptTime, setStoptTime] = useState(false);
  const [winner, setWinner] = useState(false);
  const [selectedMemoBlock, setselectedMemoBlock] = useState(null);
  const [characters, setCharacters] = useState([]);
  const [resetCharacters, setResetCharacters] = useState(false);

  useEffect(() => {
    const getCharacters = async () => {
      const { data } = await rickAndMortyService.getCharacters();
      setCharacters(convertCharacterToBoardCard(data.results));
    };

    getCharacters();
  }, [resetCharacters]);

  useEffect(() => {
    if (characters.length > 0) {
      const shuffledEmojiList = shuffleArray([...characters, ...characters]);
      setShuffledMemoBlocks(
        shuffledEmojiList.map((character, i) => ({
          index: i,
          character: {
            name: character.name,
            id: character.id,
            image: character.image,
          },
          flipped: false,
        }))
      );
    }
  }, [characters]);

  useEffect(() => {
    if (winner) {
      setTimeout(() => {
        setWinner(false);
      }, 1500);
    }
  }, [winner]);

  const shuffleArray = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  const handleMemoClick = (memoBlock) => {
    setMovements(movements + 1);
    setReStartTime(false);
    const flippedMemoBlock = { ...memoBlock, flipped: true };

    let shuffledMemoBlocksCopy = [...shuffledMemoBlocks];
    shuffledMemoBlocksCopy.splice(memoBlock.index, 1, flippedMemoBlock);
    setShuffledMemoBlocks(shuffledMemoBlocksCopy);
    if (selectedMemoBlock === null) {
      setselectedMemoBlock(memoBlock);
    } else if (selectedMemoBlock.character.id === memoBlock.character.id) {
      setselectedMemoBlock(null);
      setFinalized(finalized + 1);
      if (finalized === 10) {
        confetti({
          particleCount: 200,
          spread: 70,
          origin: { y: 0.6 },
          angle: 120,
        });
        confetti({
          particleCount: 200,
          spread: 70,
          origin: { y: 0.6 },
          angle: 60,
        });
        setStoptTime(true);
        setWinner(true);
      }
    } else {
      setAnimating(true);
      setTimeout(() => {
        shuffledMemoBlocksCopy.splice(memoBlock.index, 1, memoBlock);
        shuffledMemoBlocksCopy.splice(
          selectedMemoBlock.index,
          1,
          selectedMemoBlock
        );
        setShuffledMemoBlocks(shuffledMemoBlocksCopy);
        setselectedMemoBlock(null);
        setAnimating(false);
      }, 1000);
    }
  };

  const playAgain = () => {
    setTimeout(() => {
      setResetCharacters(!resetCharacters);
    }, 1000);
    setShuffledMemoBlocks((items) =>
      items.map((item) => ({
        ...item,
        flipped: false,
      }))
    );
    setMovements(0);
    setReStartTime(true);
    setStoptTime(false);
  };

  return (
    <>
      <GameContainer>
        <WinnerBg winner={winner}>
          <WinnerText winner={winner}>Ganaste!!!</WinnerText>
        </WinnerBg>
        <BoardContainer>
          <Board
            memoBlocks={shuffledMemoBlocks}
            animating={animating}
            handleMemoClick={handleMemoClick}
          />
        </BoardContainer>
        <OptionsMenuContainer>
          <OptionsMenu>
            <Movements>Movimientos: {movements}</Movements>
          </OptionsMenu>
          <OptionsMenu>
            <TimerGame>Tiempo de juego:</TimerGame>
            <Timer reStartTime={reStartTime} stoptTime={stoptTime} />
          </OptionsMenu>

          <Button onClick={playAgain}>Jugar de nuevo</Button>
        </OptionsMenuContainer>
      </GameContainer>
    </>
  );
};
