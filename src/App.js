import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio"
import Work from "./components/works/Work"
import Testimonials from "./components/testimonials/Testimonials"
import Contact from "./components/contact/Contact"
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";

function App() {
  const [menuOpen, setMenuopen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuopen={setMenuopen} />
      <Menu menuOpen={menuOpen} setMenuopen={setMenuopen}/>
      <div className="sections">

<Intro/>
<Portfolio/>
<Work/>
<Testimonials/>
<Contact/>


      </div>


    </div>
  );
}

export default App;
