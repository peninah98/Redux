import "./App.css";
import Profile from "./componets/Profile";
import Login from "./componets/Login";
import ChangeColor from "./componets/ChangeColor";

function App() {
  return (
    <div className="bg-violet-900 w-1/2 h-1/2 space-y-7 px-2 text-center py-8 mx-auto my-4 shadow-2xl">
      <h1 className="text-4xl text-gray-400 ">React Redux</h1>
      <Profile/>
      <Login/>
      <ChangeColor/>
    </div>
  );
}

export default App;
