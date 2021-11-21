import LogIn from "./log-in/LogIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LogIn />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
