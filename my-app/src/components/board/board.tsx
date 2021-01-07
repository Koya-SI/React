import React from 'react';
import '../style/index.css';
import Square from '../square/square';
import {ISquare} from '../../ISquare';
interface BoardProps {
  squares: ISquare[];
  onClick: (i: number) => void;
}

/**
 * get BoardProps and return JSX.Element.
 * @param {props} props BoardProps.
 * @return {JSX.Element} Square component.
 */
export default function Board(props: BoardProps) {
  const renderSquare = (i: number) => {
    return <Square value={props.squares[i]} onClick={() => props.onClick(i)}/>;
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

  return (
    <div>
      {renderRows(0)}
      {renderRows(3)}
      {renderRows(6)}
    </div>
  );
}
