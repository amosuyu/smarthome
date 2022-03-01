// import ClientLayOut from "layout/ClientLayOut";
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
          <Route path="*" element={<h1>page not found</h1>} />
        </Routes>
      </Router>,
    </>
  );
}

export default App;
