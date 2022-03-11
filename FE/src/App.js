import ClientLayOut from "layout/ClientLayOut";
import { clientRoutes } from "router/router";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const renderLayout = (routes) => {
    return (
      routes?.map((route, i) => {
        const { path, element, index } = route;
        return (
          <Route key={i} element={element} path={path} index={index} />
        )
      })
    )
  }

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ClientLayOut />}>
            {renderLayout(clientRoutes)}
          </Route>
          <Route path="*" element={<img src="https://c.neh.tw/thumb/f/720/f307e47f32574e0486ed.jpg"  className="w-[70%] h-[70%] bg-cover mx-auto"/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
