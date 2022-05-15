import Navbar from "./components/Navbar";
// import Carousel from "./components/Carousel";
import Noteform from "./components/Noteform";
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        {/* <Navbar title="Noteblog" about="myabt" /> */}
        <Navbar />
        {/* <Carousel /> */}
        <Switch>
          <Route path='/about'>
            <div className="container">
              <About />
            </div>
          </Route>
          <Route path='/'>
            <div className="container">
              <Noteform />
            </div>
          </Route>
        </Switch>

      </Router>
    </>

  );
}

export default App;
