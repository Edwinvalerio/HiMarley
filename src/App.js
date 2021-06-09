import "./App.css";

import Chat from "./components/Chat/Chat";
function App() {
  return (
    <div className="App">
      <img
        id="logo"
        src="https://images.squarespace-cdn.com/content/5b7c84ac55b02cf2b54d4c30/1603394018804-X0LRAPZUSLL13T4TFIGN/JPEG+Hi-Marley-Logo-092820-RGB_Marley-Red-White-2-Color.png?format=1500w&content-type=image%2Fpng"
        alt="hi Marley"
      />
      <Chat />
    </div>
  );
}

export default App;
