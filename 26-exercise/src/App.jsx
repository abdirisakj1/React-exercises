import { Link, Outlet } from "react-router";
import { Header } from "./Header";
import { BlogList } from "./BlogList";

const App = () => {
  return (
    <div className="bg-gray-200 min-h-screen">
      <Header/>
      <div className="max-w-3xl mx-auto my-10">
        <Outlet/>
      </div>
    </div>
  );
};

export default App;
