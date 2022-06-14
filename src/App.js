import "./index.css"
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import {Switch ,Route} from "react-router-dom";
import Detail from "./pages/Detail";
import Header from "./components/Header";
import {useState} from "react";


function App() {
    const [showHeader,setShowHeader]=useState(true);
    const changeShowSidebarHandler =()=>{
        setShowHeader(!showHeader);
    };
  return (
      <div className="h-screen w-screen overflow-hidden">
          <div className="h-full flex flex-row p-2 rounded bg-gray-200">
              <Sidebar showsidebar={showHeader}/>
              <div className="w-full h-full flex flex-col justify-between overflow-hidden">
                  <Header showing={showHeader} active={changeShowSidebarHandler}/>
                      <Switch>
                          <Route exact path="/" component={Home}/>
                          <Route exact path="/detail" component={Detail}/>
                      </Switch>
              </div>
          </div>
      </div>
  );
}

export default App;
