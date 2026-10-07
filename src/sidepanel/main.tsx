import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div>
      <h1>WhatsApp Productivity CRM</h1>
      <p>MVP iniciado correctamente 🚀</p>
    </div>
  );
}

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);