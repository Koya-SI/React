import React from 'react';
import '../style/index.css';
import Square from '../square/square';
import {ISquare} from '../../ISquare';
interface BoardProps {
  squares: ISquare[];
  onClick: (i: number) => void;
  winLine: number[];
}

/**
 * get BoardProps and return JSX.Element.
 * @param {props} props BoardProps.
 * @return {JSX.Element} Square component.
 */
export default function Board(props: BoardProps) {
  const renderSquare = (i: number, isHighlighted: boolean) => {
    return <Square value={props.squares[i]} onClick={() => props.onClick(i)}
      isHighlighted={isHighlighted} />;
  };
  const highlight = props.winLine && props.winLine.includes(0 || 1 || 2 || 3 ||
     4 || 5 || 6 || 7 || 8);

  return (
    <div>
      <div className='board-row'>
        {renderSquare(0, highlight)}
        {renderSquare(1, highlight)}
        {renderSquare(2, highlight)}
      </div>
      <div className='board-row'>
        {renderSquare(3, highlight)}
        {renderSquare(4, highlight)}
        {renderSquare(5, highlight)}
      </div>
      <div className='board-row'>
        {renderSquare(6, highlight)}
        {renderSquare(7, highlight)}
        {renderSquare(8, highlight)}
      </div>
    </div>
  );
}
