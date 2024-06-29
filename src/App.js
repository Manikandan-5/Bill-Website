import "./App.css";
import SideNav from "./components/SideNav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <div className="header_box">
        <SideNav />
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
