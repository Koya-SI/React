import React from 'react';
import { ISquare } from '../../interface';

interface SquareProps {
  value: ISquare;
  onClick: () => void;
}

export default function Square(props:SquareProps) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
}