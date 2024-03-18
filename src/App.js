import "./App.css";
import Chat from "./component/Chat/Chat";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./component/404/NotFound";
import Test from "./component/Test";
import Plan from "./component/Plan/Plan";
import Login from "./component/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Chat />} />
        <Route path="login" element={ <Login />} />
        <Route path="/test" element={ <Test />} />
        <Route path="/plan" element={ <Plan />} />

        <Route path="*" element={ <NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
