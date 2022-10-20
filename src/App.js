import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/React-movie/" element={<Home />} />
      <Route path="/React-movie/movie" element={<Detail />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
