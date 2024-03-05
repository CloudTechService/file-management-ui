import Router from "./router/router";
import "./App.css";
import "./assets/css/common.css"

function App() {
  return (
    <>
      {/* <SideMenu /> */}
      <div className="pageContent">
        {/* <Header /> */}
        <Router />
      </div>
    </>
  );
}

export default App;
