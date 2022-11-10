import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import Category from "./routes/Category";
import appStyle from "./sass/App.css";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie/:id" element={<Detail />}></Route>
        <Route path="/MovieCate/:cateTitle" element={<Category />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
