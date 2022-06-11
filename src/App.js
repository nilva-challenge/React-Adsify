import "./index.css"
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";
import {HashRouter} from "react-router-dom";
import Detail from "./pages/Detail";
import Header from "./components/Header";


function App() {
  return (
      <div className="h-screen w-screen overflow-hidden">
          <div className="h-full flex flex-row p-2 rounded bg-gray-100">
              <Sidebar/>
              <div className="w-full">
                  <Header/>
                  <HashRouter>
                      <Switch>
                          <Route exact path="/" component={Home}/>

                          <Route exact path="/detail" component={Detail}/>
                      </Switch>
                  </HashRouter>
              </div>
          </div>
      </div>

  );
}

export default App;
