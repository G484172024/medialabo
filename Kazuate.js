// 答え
let kotae = Math.floor(Math.random() * 10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let b = document.querySelector('button#kaitou');
b.addEventListener('click', hantei);

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
    // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
    let i = document.querySelector('input[name ="kazu"]');
    let yoso = Number(i.value);

    let p = document.querySelector('span#kaisu');
    kaisu++;
    p.textContent = kaisu;

    let y = document.querySelector('span#answer');
    y.textContent = yoso;

    // 課題3-1: 正解判定する
    // kotae と yoso が一致するかどうか調べて結果を出力
    // 課題3-1における出力先はコンソール

    let x = document.querySelector('p#result');
    if (kaisu > 3) {
        x.textContent = ("答えは" + kotae + "でした. すでにゲームは終わっています");
    } else if (yoso === kotae) {
        x.textContent = ("正解です. おめでとう！");
        kaisu = kaisu + 3;
    } else if (yoso < kotae) {
        x.textContent = ("まちがい. 答えはもっと大きいですよ");
    } else {
        x.textContent = ("まちがい. 答えはもっと小さいですよ");
    }
}