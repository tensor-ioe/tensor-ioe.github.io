import "./App.css"
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Events from "./components/Events/Events"
import Gallery from "./components/Gallery/Gallery"
import Sponsor from "./components/Sponsor/Sponsor"
import Contact from "./components/Contact/Contact"
import Apply from "./components/Apply/Apply"
import Footer from "./components/Footer/Footer"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" Component={Home}></Route>
                <Route path="/about" Component={About}></Route>
                <Route path="/events" Component={Events}></Route>
                <Route path="/gallery" Component={Gallery}></Route>
                <Route path="/sponsor" Component={Sponsor}></Route>
                <Route path="/contact" Component={Contact}></Route>
                <Route path="/apply" Component={Apply}></Route>
            </Routes>
            <Footer />
        </Router>
    )
}
export default App;
