import {ISquare} from '../../ISquare';

interface SquareProps {
  value: ISquare;
  onClick: () => void;
}

/**
 * get SquareProps and return JSX.Element.
 * @param {props} props SquareProps.
 * @return {JSX.Element} button.
 */
export default function Square(props: SquareProps) {
  return (
    <button className='square' onClick={props.onClick}>
      {props.value}
    </button>
  );
}
