# React
 - index.jsファイル内の呼び出し順
	プログラム開始時
		- class Gameが呼ばれる
			- コンストラクターでステートの初期値が入る
			- render関数が呼ばれ、その中で定義した変数に値が入る
			- returnでBoardクラスが呼ばれる
		- function Boardが呼ばれる
			- render関数が呼ばれ、return内でrenderSquare関数を呼ぶ
			- renderSquare関数内でsquareクラスが呼ばれる
		- function Squareが呼ばれる
			- render関数が呼ばれ、buttonタグをBoardクラスに返す

	ユーザーからのアクションが発生した場合
		- ユーザーが画面にあるマスを押すと、function Squareのfunction Boardから渡されたonClickが呼ばれ、function BoardのonClickは親要素のclass GameのhandleClick関数を呼び、handleClick関数は番手を記録し、呼ばれるたびにfunction calculateWinnerを呼んで、勝者を判定する
		- function calculateWinnerでは、変数linesで勝ちパターンを定義して、for文でsquares配列の中身を見て、a、b、cが全て〇または✕だった場合に、全て揃ったほうを呼び出し元に返し、揃っていない場合はnullを返す