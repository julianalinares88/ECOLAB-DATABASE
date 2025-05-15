import { makeRequest } from "../app.js";

export default function renderScreen1() {
  const app = document.getElementById("app");
  app.innerHTML = `
      <div id="screen1">
        <h2>Screen 1</h2>
        <button id="get-btn">Get products</button>
        <button id="get-under50-btn">Productos < $50</button>

        <button id="change-screen-btn">Change screen on app 2</button>
      </div>
  `;

  document.getElementById("get-btn").addEventListener("click", getProducts);
  document
    .getElementById("change-screen-btn")
    .addEventListener("click", sendEventChangeScreen);

  async function getProducts() {
    const response = await makeRequest("/api/productos", "GET");
    console.log("🟢 Productos recibidos:", response);
  }

  document.getElementById("get-under50-btn").addEventListener("click", async () => {
  const response = await makeRequest("/api/productos/precio/menor50", "GET");
  console.log("🔍 Productos < $50:", response);
});


  async function sendEventChangeScreen() {
    const changeEventResponse = await makeRequest("/change-screen", "POST");
    console.log("🔄 Cambio de pantalla:", changeEventResponse);
  }
}
