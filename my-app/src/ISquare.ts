export type ISquare = 'X' | 'O' | null;
export type Locations = [
  [1, 1],
  [2, 1],
  [3, 1],
  [1, 2],
  [2, 2],
  [3, 2],
  [1, 3],
  [2, 3],
  [3, 3]
];
export interface History {
  squares: ISquare[];
}
