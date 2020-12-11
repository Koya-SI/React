# React
 - index.jsファイル内の呼び出し順
	プログラム開始時
		- class Gameが呼ばれる
			- コンストラクターで盤面の状態が入るhistory、番手を決めるxIsNext、今が何手目かの情報が入るstepNumberにそれぞれ盤面の状態を表すnull、xの番を表すtrue、何手目かを表す0が初期値として入る
			- render関数が呼ばれ、history、currentにステートで定義した変数の値が入る
			- winnerにはcalculateWinner関数で処理した値が入る
			- Boardのコンポネントが呼ばれているreturn文でBoardクラスが呼ばれる
		- function Boardが呼ばれる
			- divタグで画面描画をしているreturn文でrenderSquare関数を9回呼び、renderSquare関数は呼ばれた回数分Squareコンポネントを呼んでいる
		- function Squareが呼ばれる
			- returnでBoardクラスにbuttonタグを返す

	ユーザーからのアクションが発生した場合
		- ユーザーが画面にあるマスを押すと、function Squareのfunction Boardから渡されたonClickが呼ばれ、function BoardのonClickは親要素のclass GameのhandleClick関数を呼び、handleClick関数は番手を記録し、呼ばれるたびにfunction calculateWinnerを呼んで、勝者を判定する
		- function calculateWinnerでは、変数linesで勝ちパターンを定義して、for文でsquares配列の中身を見て、a、b、cが全て〇または✕だった場合に、全て揃ったほうを呼び出し元に返し、揃っていない場合はnullを返す