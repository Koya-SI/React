import React from 'react';
import '../style/index.css';
import Board from '../board/board';
import calculateWinner from '../function/calculateWinner';
import {History} from '../../ISquare';
interface GameState {
  history: History[];
  stepNumber: number;
  xIsNext: boolean;
}

/**
 * @param {GameState} interface GameState.
 * @return {JSX.Element} Game component.
 * @extends React.Component
 */
export default class Game extends React.Component<unknown, GameState> {
/**
 * @constructor
 * @param {props} props
 */
  constructor(props: GameState) {
    super(props);
    this.state = {
      history: [{squares: Array(9).fill(null), location: []}],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  /**
 * @param {number} i
 */
  handleClick(i: number) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    const location = current.location.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([
        {
          squares: squares,
          location: location,
        },
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  /**
 * @param {number} step
 */
  jumpTo(step: number) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }

  /**
 * @return {JSX.Element}
 */
  render() {
    const history = this.state.history;
    const current = history[history.length - 1];
    const winner = calculateWinner(current.squares);
    const moves = history.map((step, move) => {
      const desc = move ? 'Go to move #' + move : 'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>
            <strong>{desc}</strong>
          </button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className='game'>
        <div className='game-board'>
          <Board
            squares={current.squares}
            onClick={(i: number) => this.handleClick(i)}
          />
        </div>
        <div className='game-info'>
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}
