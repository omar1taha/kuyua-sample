import "./MainPageLayout.scss";
import logo from "../src/assets/logo.png";
import { Outlet } from "react-router-dom";

function MainPageLayout() {
  return (
    <main className="main-layout">
      <div className="navbar">
        <img src={logo}></img>
      </div>
      <Outlet />
    </main>
  );
}

export default MainPageLayout;
