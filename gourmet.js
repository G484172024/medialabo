function printDom(data) {
  const shops = data.results.shop;

  const oldResult = document.getElementById("result");
  if (oldResult) {
    oldResult.remove();
  }

  const resultDiv = document.createElement("div");
  resultDiv.id = "result";
  document.body.appendChild(resultDiv);

  for (let i = 0; i < shops.length; i++) {
    const shop = shops[i];

    const shopDiv = document.createElement("div");
    shopDiv.style.border = "1px solid #ccc";
    shopDiv.style.margin = "10px";
    shopDiv.style.padding = "10px";
    shopDiv.style.backgroundColor = "#f9f9f9";

    shopDiv.innerHTML = `
      <h2>${shop.name}</h2>
      <p><strong>アクセス:</strong> ${shop.access}</p>
      <p><strong>住所:</strong> ${shop.address}</p>
      <p><strong>予算:</strong> ${shop.budget.name}</p>
      <p><strong>キャッチコピー:</strong> ${shop.catch}</p>
      <p><strong>ジャンル:</strong> ${shop.genre.name}</p>
      <p><strong>サブジャンル:</strong> ${shop.sub_genre ? shop.sub_genre.name : "なし"}</p>
      <p><strong>営業時間:</strong> ${shop.open}</p>
      <p><strong>最寄駅:</strong> ${shop.station_name}</p>
    `;

    resultDiv.appendChild(shopDiv);
  }
}

let b = document.querySelector('#kensakubotan');
b.addEventListener('click', sendRequest);

function sendRequest() {
  let input = document.querySelector('input[name="searchkey"]');
  let menu = input.value.trim();

  const genreMap = {
    "居酒屋": "01",
    "ダイニングバー・バル": "02",
    "創作料理": "03",
    "和食": "04",
    "洋食": "05",
    "イタリアン・フレンチ": "06",
    "中華": "07",
    "焼肉・ホルモン": "08",
    "アジア・エスニック料理": "09",
    "各国料理": "10",
    "カラオケ・パーティ": "11",
    "バー・カクテル": "12",
    "ラーメン": "13",
    "カフェ・スイーツ": "14",
    "その他グルメ": "15",
    "お好み焼き・もんじゃ": "16",
    "韓国料理": "17"
  };

  const G = genreMap[menu];
  if (G) {
    let url = `https://www.nishita-lab.org/web-contents/jsons/hotpepper/G0${G}.json`;
    axios.get(url)
      .then(showResult)
      .catch(showError)
      .then(finish);
  } else {
    console.log('対応したジャンル名を入力してください。');
  }
}

function showResult(resp) {
  let data = resp.data;
  if (typeof data === 'string') {
    data = JSON.parse(data);
  }
  printDom(data);
}

function showError(err) {
  console.log(err);
}

function finish() {
  console.log('Ajax 通信が終わりました');
}