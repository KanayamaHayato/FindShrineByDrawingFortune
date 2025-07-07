const result = document.querySelector(".result");
const button = document.getElementById("draw-button");
const shrineInfo = document.querySelector(".shrine-info");
const shrineName = document.querySelector(".shrine-name");
const shrineDesc = document.querySelector(".shrine-description");
const link = document.querySelector(".shrine-link");
<<<<<<< Updated upstream
<<<<<<< Updated upstream

const omikuji = ["大吉", "中吉", "吉", "末吉", "凶"];
const shrineLinks = {
    "大吉": { name: "明治神宮", url: "https://www.meijijingu.or.jp/" },
    "中吉": { name: "伏見稲荷大社", url: "https://inari.jp/" },
    "吉":   { name: "住吉大社", url: "https://www.sumiyoshitaisha.net/" },
    "末吉": { name: "川越氷川神社", url: "https://www.kawagoehikawa.jp/" },
    "凶":   { name: "鷲神社", url: "https://www.otorisama.or.jp/" }
=======
=======
>>>>>>> Stashed changes
const bg = document.querySelector(".background-image");

const omikuji = ["大吉", "中吉", "吉", "末吉", "凶"];
const shrineData = {
    "大吉": {
        name: "明治神宮",
        url: "https://www.meijijingu.or.jp/",
        image: "img/meiji.jpg",
        desc: "東京・原宿にある格式高い神社。初詣参拝者数日本一！"
    },
    "中吉": {
        name: "伏見稲荷大社",
        url: "https://inari.jp/",
        image: "img/fushimi.jpg",
        desc: "京都にある千本鳥居で有名な神社。商売繁盛の神様！"
    },
    "吉": {
        name: "住吉大社",
        url: "https://www.sumiyoshitaisha.net/",
        image: "img/sumiyoshi.jpg",
        desc: "大阪のパワースポット！航海の安全や厄除けにもご利益あり。"
    },
    "末吉": {
        name: "川越氷川神社",
        url: "https://www.kawagoehikawa.jp/",
        image: "img/kawagoe.jpg",
        desc: "縁結びで有名な神社。風鈴回廊も人気！"
    },
    "凶": {
        name: "鷲神社",
        url: "https://www.otorisama.or.jp/",
        image: "img/washi.jpg",
        desc: "東京都・浅草にある「おとりさま」。運気アップの酉の市で有名。"
    }
>>>>>>> Stashed changes
};

button.addEventListener("click", () => {
    const number = Math.floor(Math.random() * omikuji.length);
    const resultText = omikuji[number];
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    result.textContent = resultText;

    const shrine = shrineLinks[resultText];
    link.href = shrine.url;
    link.textContent = `おすすめの神社：${shrine.name}`;
    link.style.display = "inline-block";
=======
    const shrine = shrineData[resultText];

    result.textContent = `あなたの運勢は… ${resultText}！`;

=======
    const shrine = shrineData[resultText];

    result.textContent = `あなたの運勢は… ${resultText}！`;

>>>>>>> Stashed changes
    shrineName.textContent = shrine.name;
    shrineDesc.textContent = shrine.desc;
    link.href = shrine.url;
    link.textContent = `神社の公式サイトへ`;
    shrineInfo.style.display = "block";

    bg.style.backgroundImage = `url(${shrine.image})`;
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
});
