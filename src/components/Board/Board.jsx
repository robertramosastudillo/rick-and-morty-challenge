import BoardCard from "../BoardCard/BoardCard";
import { BoardContainer } from "./Board.styled";

const Board = ({ animating, handleMemoClick, memoBlocks }) => {
  return (
    <BoardContainer>
      {memoBlocks.map((memoBlock, i) => {
        return (
          <BoardCard
            key={`${i}_${memoBlock.character.id}`}
            animating={animating}
            handleMemoClick={handleMemoClick}
            memoBlock={memoBlock}
          />
        );
      })}
    </BoardContainer>
  );
};

export default Board;
