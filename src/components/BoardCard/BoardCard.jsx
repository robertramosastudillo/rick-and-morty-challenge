import rickandmortyfront from "/assets/rick-and-morty-front.jpg";
import { BoardCardClose, BoardCardOpen } from "./BoardCard.styled";
import {
  BoardCardAction,
  BoardCardContainer,
  BoardCardImage,
} from "./BoardCard.styled";

const BoardCard = ({ animating, handleMemoClick, memoBlock }) => (
  <BoardCardContainer
    onClick={() =>
      !memoBlock.flipped && !animating && handleMemoClick(memoBlock)
    }
  >
    <BoardCardAction actionFlipped={memoBlock.flipped}>
      <BoardCardOpen>
        <BoardCardImage
          src={rickandmortyfront}
          alt="Rick And Morty Card Front"
        />
      </BoardCardOpen>
      <BoardCardClose>
        <BoardCardImage
          src={memoBlock.character.image}
          alt={memoBlock.character.name}
        />
      </BoardCardClose>
    </BoardCardAction>
  </BoardCardContainer>
);

export default BoardCard;
