import {ISquare} from '../../ISquare';

interface SquareProps {
  value: ISquare;
  onClick: () => void;
  isWinning: boolean;
}

/**
 * get SquareProps and return JSX.Element.
 * @param {props} props SquareProps.
 * @return {JSX.Element} button.
 */
export default function Square(props: SquareProps) {
  return (
    <button className={'square' +
     (props.isWinning ? ' square--winning' : '')} onClick={props.onClick}>
      {props.value}
    </button>
  );
}
