const controls = document.querySelector("#controls");
const statusBox = document.querySelector("#status");
const app = document.querySelector("#app");
controls.innerHTML =
  '<input id="city" placeholder="Hà Nội"><button id="search">Tìm</button><div id="history"></div>';
const input = document.querySelector("#city");
const historyBox = document.querySelector("#history");
let history = JSON.parse(localStorage.getItem("weatherHistory") || "[]");
function setStatus(text, cls = "") {
  statusBox.className = cls;
  statusBox.textContent = text;
}
function save(city) {
  history = [city, ...history.filter((x) => x !== city)].slice(0, 5);
  localStorage.setItem("weatherHistory", JSON.stringify(history));
  renderHistory();
}
function renderHistory() {
  historyBox.textContent = "";
  history.forEach((city) => {
    const b = document.createElement("button");
    b.textContent = city;
    b.onclick = () => load(city);
    historyBox.appendChild(b);
  });
}
async function load(city = input.value.trim() || "Hà Nội") {
  setStatus("Đang tải...", "loading");
  app.textContent = "";
  try {
    const res = await fetch(
      "https://wttr.in/" + encodeURIComponent(city) + "?format=j1",
    );
    if (!res.ok) throw new Error("HTTP " + res.status);
    const data = await res.json();
    const current = data.current_condition[0];
    app.innerHTML =
      '<article class="card"><h2>' +
      city +
      "</h2><p>Nhiệt độ: " +
      current.temp_C +
      " C</p><p>Độ ẩm: " +
      current.humidity +
      "%</p><p>" +
      current.weatherDesc[0].value +
      "</p></article>";
    setStatus("Thành công");
    save(city);
  } catch (error) {
    setStatus("Lỗi: " + error.message, "error");
  }
}
document.querySelector("#search").onclick = () => load();
renderHistory();
load("Hà Nội");
