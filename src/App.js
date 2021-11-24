import LogIn from "./log-in/LogIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideMenu from "./side-menu/SideMenu";
import SignUp from "./sign-up/SignUp";
import Settings from "./settings/Settings";
import WelcomePage from "./WelcomePage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/log-in" element={<LogIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/bookings" element={<SignUp />} />
          <Route path="/account" element={<SignUp />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/contact" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
