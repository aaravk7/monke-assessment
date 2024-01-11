import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";

function App() {
  const { state } = useNavigation();

  return (
    <div className="flex flex-col gap-2">
      <Navbar />
      {state === "loading" ? <Loader /> : <Outlet />}
    </div>
  );
}

export default App;
