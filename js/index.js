const result = document.querySelector(".result");
const button = document.getElementById("draw-button");
const link = document.querySelector(".shrine-link");
const image = document.querySelector(".shrine-image");

const omikuji = ["大吉", "中吉", "吉", "末吉", "凶"];
const shrineData = {
    "大吉": {
        name: "明治神宮",
        url: "https://www.meijijingu.or.jp/",
        image: "img/meiji.jpg"
    },
    "中吉": {
        name: "伏見稲荷大社",
        url: "https://inari.jp/",
        image: "img/fushimi.jpg"
    },
    "吉": {
        name: "住吉大社",
        url: "https://www.sumiyoshitaisha.net/",
        image: "img/sumiyoshi.jpg"
    },
    "末吉": {
        name: "川越氷川神社",
        url: "https://www.kawagoehikawa.jp/",
        image: "img/kawagoe.jpg"
    },
    "凶": {
        name: "鷲神社",
        url: "https://www.otorisama.or.jp/",
        image: "img/washi.jpg"
    }
};

button.addEventListener("click", () => {
    const number = Math.floor(Math.random() * omikuji.length);
    const resultText = omikuji[number];
    const shrine = shrineData[resultText];

    result.textContent = resultText;
    link.href = shrine.url;
    link.textContent = `おすすめの神社：${shrine.name}`;
    link.style.display = "inline-block";

    image.src = shrine.image;
    image.alt = `${shrine.name}の写真`;
    image.style.display = "block";
});
