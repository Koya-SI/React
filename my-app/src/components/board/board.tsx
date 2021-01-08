import React from 'react';
import '../style/index.css';
import Square from '../square/square';
import {ISquare} from '../../ISquare';
interface BoardProps {
  squares: ISquare[];
  onClick: (i: number) => void;
  winningSquares: number[];
}

/**
 * get BoardProps and return JSX.Element.
 * @param {props} props BoardProps.
 * @return {JSX.Element} Square component.
 */
export default function Board(props: BoardProps) {
  const renderSquare = (i: number) => {
    return <Square value={props.squares[i]} onClick={() => props.onClick(i)}
      isWinning={props.winningSquares.includes(i)}/>;
  };

  const renderSquares = (n: number) => {
    const squares = [];
    for (let i = n; i < n + 3; i++) {
      squares.push(renderSquare(i));
    }
    return squares;
  };

  const renderRows = (i: number) => {
    return <div className="board-row">{renderSquares(i)}</div>;
  };

  const board = () => {
    const colum = [];
    for (let i = 0; i < 9;) {
      colum.push(renderRows(i));
      i += 3;
    }
    return colum;
  };

  return (
    <div>
      {board()}
    </div>
  );
}
