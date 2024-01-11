import Navbar from "./components/Sidebar";
import "./App.css";
import Content from "./components/Content";
const App = () => {
  return (
    <div className="home-page h-screen flex-col ">
      <div className="flex flex-col md:flex-row  h-screen ">
        <div
          className="border-2  border-transparent  md:px-0  w-full h-fit md:h-full md:w-64  md:py-0"
          style={{ background: "#fafafa" }}
        >
          <Navbar />
        </div>
        <div
          className="h-full  w-full rounded-xl py-3 px-3 md:py-10 md:px-10"
          style={{ background: "#EEF5FF" }}
        >
          <Content />
        </div>
      </div>
    </div>
  );
};

export default App;
