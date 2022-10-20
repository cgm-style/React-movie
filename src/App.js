import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return (
    <Router basename="process.env.PUBLIC_URL">
      <Routes>
        <Route path="/movie" element={<Detail />}>
          <Detail />
        </Route>
        <Route path="/" element={<Home />}>
          <Home />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
