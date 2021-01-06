import {ISquare} from '../../ISquare';

interface SquareProps {
  value: ISquare;
  onClick: () => void;
  isHighlighted: boolean;
}

/**
 * get SquareProps and return JSX.Element.
 * @param {props} props SquareProps.
 * @return {JSX.Element} button.
 */
export default function Square(props: SquareProps) {
  let className = 'square';
  if (props.isHighlighted) {
    className += 'highlighted';
  }
  return (
    <button className={className} onClick={props.onClick}>
      {props.value}
    </button>
  );
}
