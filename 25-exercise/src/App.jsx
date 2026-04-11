import { Outlet } from "react-router";
import { Header } from "./components/Header";

const App = () => {
  return (
    <div className="bg-gray-200 min-h-screen">
      <Header />
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default App;
