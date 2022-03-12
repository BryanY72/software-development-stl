import About from "./components/About";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex flex-col items-center text-white bg-blue-400 h-screen">
      <Navbar />
      <div id="content" className="flex flex-col items-center space-y-24 mt-10">
        <div className="flex flex-col items-center space-y-6">
          <h1 className="text-6xl">
            Hi! I'm{" "}
            <span className="text-8xl italic bg-blue-200 p-2 rounded-xl text-black">
              Mark Fang.
            </span>
          </h1>
          <div id="divider" className="p-1 bg-black w-full rounded-xl"></div>
        </div>
        <About />
      </div>
    </div>
  );
}

export default App;
