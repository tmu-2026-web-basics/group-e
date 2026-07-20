//コンテストページだけ順位を表示

const params = new URLSearchParams(location.search);
const type = params.get("type");
const id = Number(params.get("id"));
const rank = params.get("rank");

const rankElement = document.getElementById("profile-rank");

if (rank) {
  rankElement.textContent = `${rank}位`;
  rankElement.hidden = false;
}
