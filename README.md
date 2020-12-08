# React
 - index.jsファイル内の呼び出し順
	プログラム開始時
		- class Gameが呼ばれる
		- class Boardが呼ばれる
		- function Squareが呼ばれる

	ユーザーからのアクションが発生した場合
		- ユーザーが画面にあるマスを押すと、function Squareのclass Boardから渡されたonClickが呼ばれ、class BoardのonClickは親要素のclass GameのhandleClick関数を呼び、handleClick関数は番手を記録し、呼ばれるたびにfunction calculateWinnerを呼んで、勝者を判定する
