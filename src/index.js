/** ES2015の新機能
 * const,let等の変数宣言
 */

// 旧 varで変数宣言
var val1 = "Var変数";
console.log(val1);

// var変数は上書き可能
val1 = "var変数を上書き";
console.log(val1);

// var変数は再宣言可能
var val1 = "var変数を再宣言";
console.log(val1);

// letで変数宣言
let val2 = "let変数";
console.log(val2);

// letは上書き可能
val2 = "let変数を上書き";
console.log(val2);

// letは再宣言不可
// let val2 = "";

// constで変数宣言
const val3 = "const変数";
console.log(val3);

// constで変数は上書き再宣言不可

// constで定義したオブジェクトのプロパティは変更可能
const val4 = {
  name: "じゃけぇ",
  age: 28
};
val4.name = "jake";
val4.address = "Hirosihima";
console.log(val4);

// constで定義した配列は変更可能
const val5 = ["dog", "cat"];
val5[0] = "bird";
val5.push("monkey");
console.log(val5);

/**
 * テンプレート文字列
 */
const namet = "じゃけぇ";
const age = 28;
// 従来の方法
const message1 = "私の名前は" + namet + "です。年齢は" + age + "です。";
console.log(message1);
// テンプレート文字列を用いた方法
const message2 = `私の名前は${namet}です。年齢は${age}です。`;
console.log(message2);

/**
 * アロー関数
 */
// 従来の関数
function func1(str1) {
  return str1;
}
console.log(func1("func1です"));
// 変数に関数を格納
const func2 = function (str2) {
  return str2;
};
console.log(func2("func2です"));
// アロー関数
const func3 = (str3) => {
  return str3;
};
console.log(func3("func3です"));
// 中の処理が1行で終わる場合{}を省略できる
const func4 = (str4) => str4;
console.log(func4("func4です"));
// 複数の引数のサンプル
const func5 = (num1, num2) => {
  return num1 + num2;
};
console.log(func5(10, 20));

/**
 * 分割代入
 */
const myProfile = {
  name1: "じゃけぇ",
  age1: 28
};
const message3 = `名前は${myProfile.name1}です。年齢は${myProfile.age1}です。`;
console.log(message3);
// オブジェクトのプロパティの中身を一度で複数取り出すことができる。配列も可能(配列順に格納される)
const { name1, age1 } = myProfile;
const message4 = `名前は${name1}です。年齢は${age1}です。`;
console.log(message4);

/**
 * デフォルト値、引数など
 */
const sayHello = (name2 = "ゲスト") => console.log(`こんにちは${name2}です。`);
sayHello();

/**
 * スプレッド構文 ...
 */
// 配列の展開
const arr1 = [1, 2];
const sumFunc = (num1, num2) => console.log(num1 + num2);
// 以下は同じ結果となる
sumFunc(arr1[0], arr1[1]);
sumFunc(...arr1);

// まとめる
const arr2 = [1, 2, 3, 4, 5];
const [num3, num4, ...arr3] = arr2;
// 残りがarr3に代入される
console.log(num3);
console.log(num4);
console.log(arr3);

// 配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];
const arr6 = [...arr4];
const arr7 = [...arr4, ...arr5];
console.log(arr6);
console.log(arr7);
// const arr6 = arr4 だと参照渡しになるのでコピーにならない

/**
 * mapやfilterを使った配列の処理
 */
const nameArr = ["田中", "山田", "じゃけぇ"];
// 引数のアロー関数ないで配列を順番に処理する
const nameArr2 = nameArr.map((name) => {
  return name;
});
console.log(nameArr2);
nameArr.map((name) => console.log(name));
// 二番目の引数はインデックス
nameArr.map((name, index) => console.log(name, index));
// return文の条件に一致したもののみ返す
const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => {
  return num % 2 === 0;
});
console.log(newNumArr);

/**
 * 三項演算子（新機能ではないが、Reactでよく使う
 */
// ある条件 ? 条件がtrueの時 : 条件がfalseの時
const val6 = 1 < 0 ? "trueです" : "falseです";
console.log(val6);

const inum = 1300;
const snum = "1300";
let formattedNum =
  typeof inum === "number" ? inum.toLocaleString() : "数値を入力してください";
console.log(formattedNum);
formattedNum =
  typeof snum === "number" ? inum.toLocaleString() : "数値を入力してください";
console.log(formattedNum);

/**
 * 論理演算子の本当の意味
 */
const flag1 = true;
const flag2 = false;
// 通常の使い方
if (flag1 || flag2) {
  console.log("1がtrueなのでtrue");
}
if (flag1 && flag2) {
} else {
  console.log("2がfalseなのでfalse");
}

// ||は左側がfalseなら右側を返す
const num5 = 100;
const fee = num5 || "金額未設定です";
console.log(fee);

// &&は左側がtrueなら右側を返す
const num6 = 100;
const fee2 = num6 && "何か設定されました";
console.log(fee2);
