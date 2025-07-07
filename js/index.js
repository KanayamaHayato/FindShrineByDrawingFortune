const result = document.querySelector(".result");
const button = document.getElementById("draw-button");
const link = document.querySelector(".shrine-link");

const omikuji = ["大吉", "中吉", "吉", "末吉", "凶"];
const shrineLinks = {
    "大吉": { name: "明治神宮", url: "https://www.meijijingu.or.jp/" },
    "中吉": { name: "伏見稲荷大社", url: "https://inari.jp/" },
    "吉":   { name: "住吉大社", url: "https://www.sumiyoshitaisha.net/" },
    "末吉": { name: "川越氷川神社", url: "https://www.kawagoehikawa.jp/" },
    "凶":   { name: "鷲神社", url: "https://www.otorisama.or.jp/" }
};

button.addEventListener("click", () => {
    const number = Math.floor(Math.random() * omikuji.length);
    const resultText = omikuji[number];
    result.textContent = resultText;

    const shrine = shrineLinks[resultText];
    link.href = shrine.url;
    link.textContent = `おすすめの神社：${shrine.name}`;
    link.style.display = "inline-block";
});
