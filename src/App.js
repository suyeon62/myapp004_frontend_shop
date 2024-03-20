import { Route, Routes } from "react-router-dom";
import "./App.css";
import BaseLayout from "./components/layout/BaseLayout";
import BoardList from "./components/board/BoardList";
import Home from "./components/Home";
import BoardWrite from "./components/board/BoardWrite";
import BoardView from "./components/board/BoardView";
import BoardUpdate from "./components/board/BoardUpdate";
import JoinAdd from "./components/members/JoinAdd";
import Login from "./components/members/Login";
import Logout from "./components/members/Logout";
import EditInfo from "./components/members/EditInfo";
import MemberRemove from "./components/members/MemberRemove";

function App() {
  return (
    <div className="container">
      <h1>My Shop</h1>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Home />} />

          <Route path="login" element={<Login />} />
          <Route path="joinadd" element={<JoinAdd />} />
          <Route path="logout" element={<Logout />} />
          <Route path="editinfo" element={<EditInfo />} />
          <Route path="memberremove" element={<MemberRemove />} />

          <Route path="board/list/:currentPage" element={<BoardList />} />
          <Route path="board/write" element={<BoardWrite />} />
          <Route path="board/write/:num" element={<BoardWrite />} />
          <Route path="board/view/:num" element={<BoardView />} />
          <Route path="board/update/:num" element={<BoardUpdate />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
