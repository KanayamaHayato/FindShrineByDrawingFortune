/* ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
   index.js  ― おみくじ SPA（くじスタート画面は保留）
   ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝ */

/* ===== 1. DOM ===== */
const loadingBox   = document.querySelector(".omikuji-loading"); // 「引いています…」
const result       = document.querySelector(".result");          // 運勢テキスト
const shrineInfo   = document.querySelector(".shrine-info");     // 神社カード
const shrineName   = document.querySelector(".shrine-name");
const shrineDesc   = document.querySelector(".shrine-description");
const link         = document.querySelector(".shrine-link");
const bg           = document.querySelector(".background-image");// 背景
const drawButton   = document.getElementById("draw-button");     // 抽選ボタン

/* ===== 2. データ ===== */
const omikuji = ["大吉", "中吉", "吉", "末吉", "凶"];

const shrineData = {
  "大吉": {
    name: "明治神宮",
    page: "shrine/meiji.html",
    image: "img/meiji.jpg",
    desc: "東京・原宿にある格式高い神社。初詣参拝者数日本一！"
  },
  "中吉": {
    name: "伏見稲荷大社",
    page: "shrine/fushimi.html",
    image: "img/fushimi.jpg",
    desc: "京都の千本鳥居で有名な神社。商売繁盛の神様！"
  },
  "吉": {
    name: "住吉大社",
    page: "shrine/sumiyoshi.html",
    image: "img/sumiyoshi.jpg",
    desc: "大阪にある住吉大社。海上守護・厄除けで有名。"
  },
  "末吉": {
    name: "川越氷川神社",
    page: "shrine/kawagoe.html",
    image: "img/kawagoe.jpg",
    desc: "埼玉・川越の縁結び神社。風鈴イベントも人気！"
  },
  "凶": {
    name: "鷲神社",
    page: "shrine/washi.html",
    image: "img/washi.jpg",
    desc: "東京・浅草の開運神社。酉の市で熊手が有名。"
  }
};

/* ===== 3. ユーティリティ ===== */
function resetAnim(el, ...classes) {
  el.classList.remove(...classes);
  void el.offsetWidth;               // 強制再描画でアニメ再適用
}

/* ===== 4. おみくじ処理 ===== */
function drawOmikuji() {
  /* 4-1. ローディング表示 */
  loadingBox.style.display = "block";
  result.textContent = "";
  shrineInfo.style.display = "none";

  /* 4-2. １秒後に結果決定 */
  setTimeout(() => {
    const choice = omikuji[Math.floor(Math.random() * omikuji.length)];
    const shrine = shrineData[choice];

    /* --- 結果表示 --- */
    result.textContent = `あなたの運勢は… ${choice}！`;
    resetAnim(result, "big-daikichi", "fade-in");

    if (choice === "大吉") {
      result.classList.add("big-daikichi");   // 特別演出
    } else {
      result.classList.add("fade-in");        // デフォ演出
    }

    /* --- 神社カード --- */
    shrineName.textContent = shrine.name;
    shrineDesc.textContent = shrine.desc;
    link.href = shrine.page;
    link.textContent = `${shrine.name}の詳細を見る`;
    shrineInfo.style.display = "block";

    /* --- 背景更新 & ローディング終了 --- */
    bg.style.backgroundImage = `url(${shrine.image})`;
    loadingBox.style.display = "none";

    // 2秒後に自動遷移
    setTimeout(() => {
    // result をURLに含める
    const encodedResult = encodeURIComponent(choice);
    window.location.href = `${shrine.page}?result=${encodedResult}`;
    }, 0);


  }, 1000); // ←ローディング時間
}

/* ===== 5. イベント登録 ===== */
drawButton.addEventListener("click", drawOmikuji);

